/* --------------------------- Property Ops tab --------------------------- */
import { getByPath, setByPath } from "./visualHelp.js"; // you already use setByPath in transforms :contentReference[oaicite:1]{index=1}

export function ensurePropOpsState(state) {
  if (!state.__propOps || typeof state.__propOps !== "object") state.__propOps = {};
  if (!state.__propOps.ui || typeof state.__propOps.ui !== "object") {
    state.__propOps.ui = {
        ruleText: `{
        "selector": {"circle":{"r":{"range":[20,100]}}},
        "apply": {"stroke": null}
        }`,
        lastPreview: "",
        };

  }
  if (!Array.isArray(state.__propOps.stack)) state.__propOps.stack = [];
}

function isHexColor(s) {
  return typeof s === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(s.trim());
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
    if (isHexColor(s)) return hexToInt(s);
    // numeric-ish
    const n = Number(s);
    if (Number.isFinite(n) && s !== "") return n;
    return s;
  }
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
    const r = Array.isArray(cond.range) ? cond.range : null;
    const min = r ? r[0] : cond.min;
    const max = r ? r[1] : cond.max;

    if (min == null && max == null) return false;

    const v = coerceComparable(raw);
    const a = min == null ? null : coerceComparable(min);
    const b = max == null ? null : coerceComparable(max);

    if (typeof v !== "number") return false;
    if (a != null && typeof a === "number" && v < a) return false;
    if (b != null && typeof b === "number" && v > b) return false;
    return true;
  }

  // exact
  return coerceComparable(raw) === coerceComparable(cond);
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

   const mkRuleArea = () => {
  const wrap = document.createElement("div");
  const lab = document.createElement("div");
  lab.textContent = "rule JSON";

  const ta = document.createElement("textarea");
  ta.value = String(getByPath(state, "__propOps.ui.ruleText") ?? "");
  ta.rows = 10;
  ta.style.width = "100%";

  ta.addEventListener("input", () => {
    setByPath(state, "__propOps.ui.ruleText", ta.value);
  });

  wrap.appendChild(lab);
  wrap.appendChild(ta);
  return wrap;
};

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
