/* --------------------------- Property Ops tab --------------------------- */
import { getByPath, setByPath } from "./visualHelp.js"; // you already use setByPath in transforms :contentReference[oaicite:1]{index=1}
import { registerTab } from "./visualHelp.js";

export function ensurePropOpsState(state) {
  if (!state.__propOps || typeof state.__propOps !== "object") state.__propOps = {};
  if (!state.__propOps.ui || typeof state.__propOps.ui !== "object") {
    state.__propOps.ui = {
        ruleText: `{
        "selector": {"circle":{"r":{"range":[20,100]}}},
        "apply": {"stroke": null}
        }`,
        lastPreview: "",
        showDocs: true,
        };

  }
  if (state.__propOps.ui.showDocs == null) state.__propOps.ui.showDocs = true;
  if (!Array.isArray(state.__propOps.stack)) state.__propOps.stack = [];
}

const PROP_OPS_DOCS_TEXT = `Property Ops Rules

Rules live at: state.__propOps.stack
UI text lives at: state.__propOps.ui.ruleText

Rule shape:
{
  "selector": { "circle": { "r": { "range": [20, 100] } } },
  "apply": { "stroke": null }
}

Selector keys:
- Tag name ("circle", "path", ...) or "*" for any tag.
- Each attribute/style key maps to a match condition.

Attribute keys:
- "attrName" (e.g. "r", "fill", "opacity")
- "style.someProp" (reads/writes inline style="..." e.g. "style.opacity")

Condition types:
1) Exact match:
  { "fill": "#ff00aa" }
  { "style.opacity": 0.5 }

2) Explicit exact match:
  { "fill": { "eq": [255, 0, 0] } }
  { "fill": { "eq": "rgb(255,0,0)" } }

3) Numeric range:
  { "opacity": { "range": [0.2, 0.9] } }
  { "r": { "min": 20, "max": 100 } }

4) RGB/vector3 range (per channel):
  { "fill": { "range": [[0,0,0],[64,64,64]] } }
  { "fill": { "min": [0,0,0], "max": [64,64,64] } }
  Singular range means exact:
  { "fill": { "range": [[255,0,0]] } }

Apply patches:
- null removes an attribute:
  { "stroke": null }
- "style.someProp" patches inline style:
  { "style.opacity": 0.5 }
- "style": { ... } patches multiple style keys:
  { "style": { "opacity": "0.5", "stroke": null } }
- "$delete": true removes the element:
  { "$delete": true }`;

function isHexColor(s) {
  return typeof s === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(s.trim());
}
function clamp255(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return null;
  return Math.max(0, Math.min(255, Math.round(x)));
}
function parseRgbFunc(s) {
  if (typeof s !== "string") return null;
  const m = s.trim().match(/^rgba?\(\s*([^)]+)\s*\)$/i);
  if (!m) return null;

  const parts = m[1].split(",").map(x => x.trim());
  if (parts.length < 3) return null;

  const r = clamp255(parts[0]);
  const g = clamp255(parts[1]);
  const b = clamp255(parts[2]);
  if (r == null || g == null || b == null) return null;

  return [r, g, b];
}
function hexToRgb(s) {
  if (!isHexColor(s)) return null;
  let h = s.trim().slice(1);
  if (h.length === 3) h = h.split("").map(ch => ch + ch).join("");
  const int = parseInt(h.slice(0, 6), 16);
  if (!Number.isFinite(int)) return null;
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return [r, g, b];
}
function isRgbVector(v) {
  return (
    Array.isArray(v) &&
    v.length === 3 &&
    v.every(x => typeof x === "number" && Number.isFinite(x))
  );
}
function hexToInt(s) {
  let h = s.trim().slice(1);
  if (h.length === 3) h = h.split("").map(ch => ch + ch).join("");
  return parseInt(h.slice(0, 6), 16); // ignore alpha if present
}
function parseStyleAttr(styleStr) {
  const out = {};
  String(styleStr || "")
    .split(";")
    .map(x => x.trim())
    .filter(Boolean)
    .forEach(pair => {
      const i = pair.indexOf(":");
      if (i < 0) return;
      const k = pair.slice(0, i).trim();
      const v = pair.slice(i + 1).trim();
      if (k) out[k] = v;
    });
  return out;
}
function writeStyleAttr(styleObj) {
  return Object.entries(styleObj)
    .filter(([k, v]) => k && v != null && String(v).length)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");
}
function getProp(el, key) {
  if (key.startsWith("style.")) {
    const styleKey = key.slice("style.".length);
    const map = parseStyleAttr(el.getAttribute("style"));
    return map[styleKey];
  }
  return el.getAttribute(key);
}

function coerceComparable(v) {
  if (v == null) return null;
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const s = v.trim();
    const rgb = parseRgbFunc(s) || hexToRgb(s);
    if (rgb) return rgb;
    if (isHexColor(s)) return hexToInt(s);
    // numeric-ish
    const n = Number(s);
    if (Number.isFinite(n) && s !== "") return n;
    return s;
  }
  if (isRgbVector(v)) return v;
  return v;
}

function matchesCond(el, attrKey, cond) {
  const raw = getProp(el, attrKey);
  if (raw == null) return false;

  // allowed set
  if (Array.isArray(cond)) {
    const v = coerceComparable(raw);
    return cond.some(x => coerceComparable(x) === v);
  }

  // range / min-max
  if (cond && typeof cond === "object") {
    // explicit exact (supports rgb vectors or strings like "rgb(1,2,3)")
    if ("eq" in cond) {
      const a = coerceComparable(raw);
      const b = coerceComparable(cond.eq);
      if (isRgbVector(a) && isRgbVector(b)) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
      }
      return a === b;
    }

    const r = Array.isArray(cond.range) ? cond.range : null;
    const min = r ? r[0] : cond.min;
    const max = r ? r[1] : cond.max;

    if (min == null && max == null) return false;

    const v = coerceComparable(raw);
    const a = min == null ? null : coerceComparable(min);
    const b = max == null ? null : coerceComparable(max);

    // Vector3/rgb range: compare per-channel.
    // Accepted formats:
    // - { range: [[rMin,gMin,bMin], [rMax,gMax,bMax]] }
    // - { min: [rMin,gMin,bMin], max: [rMax,gMax,bMax] }
    // - { range: [[r,g,b]] } (singular => exact match)
    if (isRgbVector(v) && (isRgbVector(a) || isRgbVector(b))) {
      const minVec = isRgbVector(a) ? a : null;
      const maxVec = isRgbVector(b) ? b : null;

      if (minVec && maxVec) {
        return (
          v[0] >= minVec[0] && v[0] <= maxVec[0] &&
          v[1] >= minVec[1] && v[1] <= maxVec[1] &&
          v[2] >= minVec[2] && v[2] <= maxVec[2]
        );
      }

      // If only one side is provided (rare), treat it as exact.
      const only = minVec || maxVec;
      return !!only && v[0] === only[0] && v[1] === only[1] && v[2] === only[2];
    }

    // Scalar range
    if (typeof v !== "number") return false;
    if (a != null && typeof a === "number" && v < a) return false;
    if (b != null && typeof b === "number" && v > b) return false;
    return true;
  }

  // exact
  const left = coerceComparable(raw);
  const right = coerceComparable(cond);
  if (isRgbVector(left) && isRgbVector(right)) {
    return left[0] === right[0] && left[1] === right[1] && left[2] === right[2];
  }
  return left === right;
}

function selectorMatches(el, selectorObj) {
  const tag = (el.tagName || "").toLowerCase();

  // selectorObj: { tagNameOrStar: { attr: cond, ... }, ... }
  for (const [tagKey, constraints] of Object.entries(selectorObj || {})) {
    const tk = String(tagKey).toLowerCase();
    if (tk !== "*" && tk !== tag) continue;

    if (!constraints || typeof constraints !== "object") return true;

    for (const [attrKey, cond] of Object.entries(constraints)) {
      if (!matchesCond(el, attrKey, cond)) return false;
    }
    return true; // matched this tag group
  }
  return false;
}


function applyPatch(el, patchObj) {
    if (patchObj?.$delete) {
        el.remove();
        return;
    }
  for (const [k, v] of Object.entries(patchObj || {})) {
    if (k.startsWith("style.") && typeof v !== "object") {
      const styleKey = k.slice("style.".length);
      const map = parseStyleAttr(el.getAttribute("style"));
      if (v == null) delete map[styleKey];
      else map[styleKey] = String(v);
      const next = writeStyleAttr(map);
      if (next) el.setAttribute("style", next);
      else el.removeAttribute("style");
      continue;
    }

    if (k === "style" && v && typeof v === "object" && !Array.isArray(v)) {
      const map = parseStyleAttr(el.getAttribute("style"));
      for (const [sk, sv] of Object.entries(v)) {
        if (sv == null) delete map[sk];
        else map[sk] = String(sv);
      }
      const next = writeStyleAttr(map);
      if (next) el.setAttribute("style", next);
      else el.removeAttribute("style");
      continue;
    }

    if (v == null) el.removeAttribute(k);
    else el.setAttribute(k, String(v));
  }
}

// This is the hook you’ll call from the clone loop:
export function applyPropOpsToSubtree(rootEl, propStack) {
  // realm-safe: works for SVG elements coming from iframes/other documents
  if (!rootEl || rootEl.nodeType !== 1) return;

  const stack = Array.isArray(propStack) ? propStack : [];
  if (!stack.length) return;

  const all = [rootEl, ...Array.from(rootEl.querySelectorAll("*"))];
  for (const el of all) {
    for (const op of stack) {
      if (!op || op.kind !== "propRule") continue;
      if (selectorMatches(el, op.selector)) applyPatch(el, op.apply);
    }
  }
}



export function buildPropOpsPanel({ mountEl, state, xfRuntime }) {
  ensurePropOpsState(state);

  const root = document.createElement("div");
  root.className = "propops-panel";

  const render = () => {
    root.innerHTML = "";

    const mkDocs = () => {
      const wrap = document.createElement("details");
      wrap.open = !!getByPath(state, "__propOps.ui.showDocs");

      const summary = document.createElement("summary");
      summary.textContent = "Prop Ops rules (docs)";
      wrap.appendChild(summary);

      wrap.addEventListener("toggle", () => {
        setByPath(state, "__propOps.ui.showDocs", !!wrap.open);
      });

      const body = document.createElement("pre");
      body.textContent = PROP_OPS_DOCS_TEXT;
      body.style.whiteSpace = "pre-wrap";
      body.style.marginTop = "8px";
      wrap.appendChild(body);

      return wrap;
    };

   const mkRuleArea = () => {
  const wrap = document.createElement("div");
  const lab = document.createElement("div");
  lab.textContent = "rule JSON";
    lab.style.marginBottom = "5px";
  const divider = document.createElement("div");
  divider.style.borderTop = "3px solid rgba(139, 139, 139, 1)";
  divider.style.margin = "6px 0 8px";

  const ta = document.createElement("textarea");
  ta.value = String(getByPath(state, "__propOps.ui.ruleText") ?? "");
  ta.rows = 10;
  ta.style.width = "100%";

  ta.addEventListener("input", () => {
    setByPath(state, "__propOps.ui.ruleText", ta.value);
  });

  wrap.appendChild(divider);
  wrap.appendChild(lab);

  wrap.appendChild(ta);
  return wrap;
};

    root.appendChild(mkDocs());
    //root.appendChild(mkArea("selector JSON", "__propOps.ui.selectorText"));
    //root.appendChild(mkArea("apply JSON", "__propOps.ui.applyText"));
    root.appendChild(mkRuleArea());

    const btnRow = document.createElement("div");
    btnRow.style.display = "flex";
    btnRow.style.gap = "8px";
    btnRow.style.marginTop = "8px";

    const mkBtn = (label, onClick) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.onclick = onClick;
      return b;
    };

    const parseJson = (txt) => {
      const s = String(txt || "").trim();
      if (!s) return null;
      return JSON.parse(s);
    };

    btnRow.appendChild(
  mkBtn("add rule", () => {
    let rule;
    try {
      rule = parseJson(getByPath(state, "__propOps.ui.ruleText"));
      if (!rule || typeof rule !== "object") {
        throw new Error("rule must be a JSON object");
      }
      if (!rule.selector || typeof rule.selector !== "object") {
        throw new Error("missing or invalid selector");
      }
      if (!rule.apply || typeof rule.apply !== "object") {
        throw new Error("missing or invalid apply");
      }
    } catch (e) {
      setByPath(
        state,
        "__propOps.ui.lastPreview",
        `parse error: ${e?.message || e}`
      );
      render();
      return;
    }

    state.__propOps.stack.push({
      kind: "propRule",
      selector: rule.selector,
      apply: rule.apply,
    });

    xfRuntime?.rebuildNow?.();

    const svg = mountEl.firstElementChild;
    if (svg) {
      applyPropOpsToSubtree(svg, state.__propOps.stack);
    }

    render();
  })
);


    btnRow.appendChild(
      mkBtn("undo", () => {
        state.__propOps.stack.pop();
        xfRuntime?.rebuildNow?.();

const svg = mountEl.firstElementChild;
if (svg) {
  applyPropOpsToSubtree(svg, state.__propOps.stack);
}

        render();
      })
    );

    btnRow.appendChild(
      mkBtn("reset", () => {
        state.__propOps.stack.length = 0;
        xfRuntime?.rebuildNow?.();

const svg = mountEl.firstElementChild;
if (svg) {
  applyPropOpsToSubtree(svg, state.__propOps.stack);
}

        render();
      })
    );

    root.appendChild(btnRow);

    const pre = document.createElement("pre");
    pre.style.marginTop = "8px";
    pre.textContent =
      `rules: ${state.__propOps.stack.length}\n` +
      String(getByPath(state, "__propOps.ui.lastPreview") ?? "");
    root.appendChild(pre);
  };

  render();
  return root;
}
export function registerPropOpsTab() {
  registerTab("propOps", ({ mountEl, state, xfRuntime }) =>
    buildPropOpsPanel({ mountEl, state, xfRuntime })
  );
}
