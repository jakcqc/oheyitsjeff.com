/* --------------------------- Transforms tab --------------------------- */
import { el, getByPath, setByPath, buildControl } from "./visualHelp.js";
import { registerTab } from "./visualHelp.js";
import { ensurePropOpsState, applyPropOpsToSubtree } from "./svgEditor.js";

/* ------------------------ helpers ------------------------ */
function resolveCenterAxis(val, size, fallback) {
  const n = Number(val);
  if (!Number.isFinite(n)) return fallback;

  // If user enters a fractional value between 0 and 1, treat as percentage of svg size
  if (n >= 0 && n <= 1) return n * size;

  // Otherwise treat as absolute SVG coordinate
  return n;
}

function resolveUiTargets({ applyToAll, tileTargetsText, tileCount }) {
  const raw = String(tileTargetsText ?? "").trim().toLowerCase();
  if (applyToAll || raw === "all") return null; // null => all tiles

  const set = new Set();

  // tokens: split by commas or whitespace
  const tokens = raw.split(/[,\s]+/).map(t => t.trim()).filter(Boolean);

  for (const tok of tokens) {
    if (tok === "all") return null;

    // range like "2-5"
    const m = tok.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) {
      let a = parseInt(m[1], 10);
      let b = parseInt(m[2], 10);
      if (!Number.isFinite(a) || !Number.isFinite(b)) continue;
      if (a > b) [a, b] = [b, a];
      for (let i = a; i <= b; i++) {
        if (i >= 0 && i < tileCount) set.add(i);
      }
      continue;
    }

    // single int
    const n = parseInt(tok, 10);
    if (Number.isFinite(n) && n >= 0 && n < tileCount) set.add(n);
  }

  // If nothing parsed, default to tile 0
  if (set.size === 0) set.add(0);

  return Array.from(set).sort((a, b) => a - b);
}

function fmtNum(v) {
  return Number.isFinite(v) ? String(v) : "NaN";
}

function formatXfStack(stack) {
  if (!stack?.length) return "(no transforms applied)";
  return stack
    .map((op, i) => {
      if (op.kind === "split") return `${i}: split(${op.count})`;
      const tgt = op.targets == null ? "all" : `[${op.targets.join(",")}]`;
      if (op.kind === "rotate") return `${i}: rotate(targets=${tgt}, deg=${op.deg})`;
      if (op.kind === "flipX") return `${i}: flipX(targets=${tgt})`;
      if (op.kind === "flipY") return `${i}: flipY(targets=${tgt})`;
      if (op.kind === "zoom") {
        const c = op.center;
        const cStr =
          c && (Number.isFinite(+c.x) || Number.isFinite(+c.y))
            ? `, center=(${fmtNum(+c.x)},${fmtNum(+c.y)})`
            : "";
        return `${i}: zoom(targets=${tgt}, factor=${op.factor}${cStr})`;
      }
      if (op.kind === "translate") {
        const v = op.v || { x: op.x, y: op.y };
        return `${i}: translate(targets=${tgt}, v=(${fmtNum(+v?.x)},${fmtNum(+v?.y)}))`;
      }
      return `${i}: ${op.kind}`;
    })
    .join("\n");
}

function ensureVector2(obj, defaults) {
  if (!obj || typeof obj !== "object") return { ...defaults };
  return {
    x: "x" in obj ? obj.x : defaults.x,
    y: "y" in obj ? obj.y : defaults.y,
  };
}

export function ensureTransformState(state) {
  if (!state.__xf || typeof state.__xf !== "object") state.__xf = {};
  if (!state.__xf.ui || typeof state.__xf.ui !== "object") state.__xf.ui = {};

  const ui = state.__xf.ui;

  if (ui.splitCount == null) ui.splitCount = 1;
  if (ui.applyToAll == null) ui.applyToAll = false;
  if (ui.activeTile == null) ui.activeTile = "0";
  if (ui.tileTargets == null) ui.tileTargets = "0";
  if (ui.rotateDeg == null) ui.rotateDeg = 90;
  if (ui.zoomFactor == null) ui.zoomFactor = 1.25;

  // NEW: zoom center + translate vector (UI)
  ui.zoomCenter = ensureVector2(ui.zoomCenter, { x: NaN, y: NaN }); // NaN => use svg center
  ui.translateVec = ensureVector2(ui.translateVec, { x: 0, y: 0 });

  if (!Array.isArray(state.__xf.stack)) state.__xf.stack = [];
}

export function buildTransformPanel({ mountEl, state, xfRuntime }) {
  ensureTransformState(state);

  const root = document.createElement("div");
  root.className = "xf-panel";

  const buildVector2Control = ({
    key,
    label,
    description,
    blankIsNaN = false,
    step = 1,
  }) => {
    const wrap = el("div", { className: "vr-row" });
    wrap.appendChild(el("label", { className: "vr-label", textContent: label }));
    if (description) wrap.appendChild(el("div", { className: "vr-help", textContent: description }));

    const row = el("div", { className: "vr-rangeRow" });

    const makeBox = (axis) => {
      const input = el("input", { type: "number", step: String(step) });
      const v = getByPath(state, key)?.[axis];
      input.value = Number.isFinite(+v) ? String(+v) : "";

      input.addEventListener("change", () => {
        const raw = input.value.trim();
        const n =
          raw === ""
            ? (blankIsNaN ? NaN : 0)
            : Number(raw);

        const cur = ensureVector2(getByPath(state, key), { x: blankIsNaN ? NaN : 0, y: blankIsNaN ? NaN : 0 });
        const next = { ...cur, [axis]: Number.isFinite(n) ? n : (blankIsNaN ? NaN : 0) };
        setByPath(state, key, next);
        render();
      });

      return input;
    };

    row.appendChild(el("div", { className: "vr-help", textContent: "x" }));
    row.appendChild(makeBox("x"));
    row.appendChild(el("div", { className: "vr-help", textContent: "y" }));
    row.appendChild(makeBox("y"));

    wrap.appendChild(row);
    return wrap;
  };

  const render = () => {
    root.innerHTML = "";

    const effectiveSplit = getEffectiveSplitCount(state.__xf.stack);
    const uiSplit = clampInt(getByPath(state, "__xf.ui.splitCount") ?? 1, 1, 64);
    const tileCountForUI = Math.max(1, uiSplit, effectiveSplit);

    const tileOptions = ["all", ...Array.from({ length: tileCountForUI }, (_, i) => String(i))];

    const xfParams = [
      {
        key: "__xf.ui.splitCount",
        label: "split copies",
        type: "number",
        default: 1,
        min: 1,
        max: 64,
        step: 1,
        description: "2=side-by-side, 4=2×2, 9=3×3 ...",
      },

      // {
      //   key: "__xf.ui.applyToAll",
      //   label: "apply transforms to all tiles",
      //   type: "boolean",
      //   default: false,
      // },

      // {
      //   key: "__xf.ui.activeTile",
      //   label: "quick pick tile",
      //   type: "select",
      //   default: "0",
      //   options: tileOptions,
      //   description: "Select a tile (or all) and it will populate tile targets.",
      // },

      {
        key: "__xf.ui.tileTargets",
        label: "tile targets",
        type: "text",
        default: "0",
        description: "Examples: all | 0 | 0,2,5 | 1-4",
      },

      {
        key: "__xf.ui.rotateDeg",
        label: "rotate (deg)",
        type: "number",
        default: 90,
        min: -180,
        max: 180,
        step: 1,
      },

      {
        key: "__xf.ui.zoomFactor",
        label: "zoom factor",
        type: "number",
        default: 1.25,
        min: 0.1,
        max: 20,
        step: 0.05,
        description: "Zoom in uses this; zoom out uses 1 / this.",
      },
    ];

    const controls = document.createElement("div");
    for (const p of xfParams) {
      const node = buildControl({
        param: p,
        state,
        onChange: () => render(),
      });

      // If you re-enable activeTile, keep this sync behavior:
      if (p.key === "__xf.ui.activeTile") {
        const sel = node.querySelector("select");
        if (sel) {
          sel.addEventListener("change", () => {
            setByPath(state, "__xf.ui.tileTargets", sel.value);
            render();
          });
        }
      }

      controls.appendChild(node);
    }

    // NEW UI: zoom center + translate vec (without needing buildControl support)
    controls.appendChild(
      buildVector2Control({
        key: "__xf.ui.zoomCenter",
        label: "zoom center",
        description: "SVG coords. Leave blank for SVG center.",
        blankIsNaN: true,
        step: 1,
      })
    );

    controls.appendChild(
      buildVector2Control({
        key: "__xf.ui.translateVec",
        label: "translate (x,y)",
        description: "Moves targeted tiles by (x,y) in SVG coords.",
        blankIsNaN: false,
        step: 1,
      })
    );

    root.appendChild(controls);

    const btnRow = document.createElement("div");
    btnRow.className = "xf-btnRow";
    root.appendChild(btnRow);

    const mkBtn = (label, onClick) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.onclick = onClick;
      return b;
    };

    const rotateDeg = Number(getByPath(state, "__xf.ui.rotateDeg") ?? 0);
    const zoomFactor = Number(getByPath(state, "__xf.ui.zoomFactor") ?? 1.25);
    const splitCount = clampInt(Number(getByPath(state, "__xf.ui.splitCount") ?? 1), 1, 64);

    const targets = resolveUiTargets({
      applyToAll: !!getByPath(state, "__xf.ui.applyToAll"),
      tileTargetsText: String(getByPath(state, "__xf.ui.tileTargets") ?? ""),
      tileCount: tileCountForUI,
    }); // targets: null => all, or number[]

    btnRow.appendChild(
      mkBtn("apply split", () => {
        state.__xf.stack.push({ kind: "split", count: splitCount });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    btnRow.appendChild(
      mkBtn("rotate", () => {
        state.__xf.stack.push({ kind: "rotate", targets, deg: rotateDeg });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    btnRow.appendChild(
      mkBtn("flip X", () => {
        state.__xf.stack.push({ kind: "flipX", targets });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    btnRow.appendChild(
      mkBtn("flip Y", () => {
        state.__xf.stack.push({ kind: "flipY", targets });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    // NEW: zoom (with center)
    btnRow.appendChild(
      mkBtn("zoom in", () => {
        const f = isFinite(zoomFactor) && zoomFactor > 0 ? zoomFactor : 1.25;
        const c = ensureVector2(getByPath(state, "__xf.ui.zoomCenter"), { x: NaN, y: NaN });
        // copy so stack op doesn't mutate when UI changes
        state.__xf.stack.push({ kind: "zoom", targets, factor: f, center: { x: +c.x, y: +c.y } });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    btnRow.appendChild(
      mkBtn("zoom out", () => {
        const f = isFinite(zoomFactor) && zoomFactor > 0 ? 1 / zoomFactor : 1 / 1.25;
        const c = ensureVector2(getByPath(state, "__xf.ui.zoomCenter"), { x: NaN, y: NaN });
        state.__xf.stack.push({ kind: "zoom", targets, factor: f, center: { x: +c.x, y: +c.y } });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    // NEW: translate
    btnRow.appendChild(
      mkBtn("translate", () => {
        const v = ensureVector2(getByPath(state, "__xf.ui.translateVec"), { x: 0, y: 0 });
        state.__xf.stack.push({ kind: "translate", targets, v: { x: +v.x, y: +v.y } });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    btnRow.appendChild(
      mkBtn("undo", () => {
        state.__xf.stack.pop();
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    btnRow.appendChild(
      mkBtn("reset", () => {
        state.__xf.stack.length = 0;
        xfRuntime?.resetToInitial?.();
        render();
      })
    );

    const stackBox = document.createElement("pre");
    stackBox.className = "xf-stack";
    stackBox.textContent = formatXfStack(state.__xf.stack);
    root.appendChild(stackBox);

    const status = document.createElement("div");
    status.className = "xf-status";
    status.textContent =
      `effective split: ${effectiveSplit} | stack ops: ${state.__xf.stack.length} | ` +
      (targets == null ? "targets: all" : `targets: ${targets.join(",") || "(none)"}`);
    root.appendChild(status);
  };

  render();
  return root;
}

export function registerTransformTab() {
  registerTab("transforms", ({ mountEl, state, xfRuntime }) =>
    buildTransformPanel({ mountEl, state, xfRuntime })
  );
}
export function getEffectiveSplitCount(stack) {
  let s = 1;
  for (const op of stack || []) if (op?.kind === "split") s = clampInt(op.count, 1, 64);
  return s;
}

export function clampInt(v, lo, hi) {
  const n = Number.isFinite(v) ? Math.trunc(v) : Math.trunc(Number(v) || 0);
  return Math.max(lo, Math.min(hi, n));
}

/* ------------------------ Transform runtime (SVG) ------------------------ */
/**
 * Non-destructive:
 * - When split=1, we transform the source <g> directly.
 * - When split>1, we keep the source <g> as the live render target (hidden),
 *   and render transformed/tiling clones into a separate layer, with a mutation
 *   observer to stay in sync with visuals that redraw (like mandel).
 */
export function initTransformRuntime({ mountEl, state }) {
  ensureTransformState(state);
  ensurePropOpsState(state);

  const svg = mountEl?.querySelector?.("svg");
  if (!(svg instanceof SVGSVGElement)) {
    return { rebuildNow() {}, resetToInitial() {}, destroy() {} };
  }

  // Pick a source group (avoid defs + avoid our own layer)
  const sourceG =
    Array.from(svg.querySelectorAll("g")).find(
      g => !g.closest("defs") && !g.hasAttribute("data-xf-layer")
    ) ||
    (() => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svg.appendChild(g);
      return g;
    })();

  sourceG.setAttribute("data-xf-source", "1");

  // Remember initial source transform so reset is “true reset”
  const initialSourceTransform = sourceG.getAttribute("transform");

  // Display layer where we put split/tiling clones
  let layerG = svg.querySelector('g[data-xf-layer="1"]');
  if (!layerG) {
    layerG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    layerG.setAttribute("data-xf-layer", "1");
    layerG.style.pointerEvents = "none";
    svg.appendChild(layerG);
  }

  let rafPending = false;
  const schedule = () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      rebuildNow();
    });
  };

  // Keep up with visuals that redraw internally
  const mo = new MutationObserver(schedule);
  mo.observe(sourceG, { childList: true, subtree: true, attributes: true });

  function resetToInitial() {
    layerG.replaceChildren();
    sourceG.style.display = "";
    if (initialSourceTransform == null) sourceG.removeAttribute("transform");
    else sourceG.setAttribute("transform", initialSourceTransform);
  }

  function rebuildNow() {
    const stack = state.__xf.stack || [];
    const propStack = state.__propOps?.stack || [];
    const hasProps = Array.isArray(propStack) && propStack.length > 0;

    const splitCount = getEffectiveSplitCount(stack);
    const { w, h } = getSvgSize(svg);

    // Nothing to do at all? true reset.
    if ((!stack || stack.length === 0) && !hasProps) {
      resetToInitial();
      return;
    }

    if (splitCount <= 1) {
      layerG.replaceChildren();
      sourceG.style.display = "";

      const t = tileTransformFromStack({ stack, tile: 0, w, h });
      if (t) sourceG.setAttribute("transform", t);
      else {
        // important: don't lose propOps when stack is empty
        if (initialSourceTransform == null) sourceG.removeAttribute("transform");
        else sourceG.setAttribute("transform", initialSourceTransform);
      }

      if (hasProps) applyPropOpsToSubtree(sourceG, propStack);
      return;
    }

    // split > 1
    sourceG.style.display = "none";
    layerG.replaceChildren();

    const grid = Math.ceil(Math.sqrt(splitCount));
    const scale = 1 / grid;

    const kids = Array.from(sourceG.children);
    const N = kids.length || 1;

    for (let tile = 0; tile < splitCount; tile++) {
      const col = tile % grid;
      const row = Math.floor(tile / grid);

      const gTile = document.createElementNS(svg.namespaceURI, "g");
      gTile.setAttribute(
        "transform",
        `translate(${col * w * scale},${row * h * scale}) scale(${scale})`
      );

      const gXf = document.createElementNS(svg.namespaceURI, "g");
      gXf.setAttribute("transform", tileTransformFromStack({ stack, tile, w, h }));

      let localIdx = 0;
      for (const n of kids) {
        const cloned = n.cloneNode(true);
        tagCloneForMode(cloned, tile, localIdx, N);
        dedupeIdsInSubtree(cloned, `__xf_${tile}_${localIdx}`);
        if (hasProps) applyPropOpsToSubtree(cloned, propStack);
        gXf.appendChild(cloned);
        localIdx++;
      }

      gTile.appendChild(gXf);
      layerG.appendChild(gTile);
    }
  }

  function destroy() {
    try { mo.disconnect(); } catch {}
  }

  return { rebuildNow, resetToInitial, destroy };
}

export function getSvgSize(svg) {
  const vb = svg.viewBox && svg.viewBox.baseVal;
  if (vb && vb.width > 0 && vb.height > 0) return { w: vb.width, h: vb.height };

  const aw = parseFloat(svg.getAttribute("width") || "");
  const ah = parseFloat(svg.getAttribute("height") || "");
  if (Number.isFinite(aw) && aw > 0 && Number.isFinite(ah) && ah > 0) return { w: aw, h: ah };

  const r = svg.getBoundingClientRect();
  return { w: r.width || 1, h: r.height || 1 };
}

function opAppliesToTile(op, tile) {
  // Back-compat: old ops might have op.tile
  if (typeof op.tile === "number") return op.tile === tile;

  // New: targets === null => all
  if (op.targets == null) return true;

  // New: targets array
  return Array.isArray(op.targets) && op.targets.includes(tile);
}

function tileTransformFromStack({ stack, tile, w, h }) {
  const cx = w / 2;
  const cy = h / 2;

  const parts = [];
  for (const op of stack || []) {
    if (!op || op.kind === "split") continue;
    if (!opAppliesToTile(op, tile)) continue;

    if (op.kind === "rotate") {
      const deg = Number(op.deg || 0);
      parts.push(`rotate(${deg} ${cx} ${cy})`);
    } else if (op.kind === "flipX") {
      parts.push(`translate(${w} 0) scale(-1 1)`);
    } else if (op.kind === "flipY") {
      parts.push(`translate(0 ${h}) scale(1 -1)`);
    } else if (op.kind === "zoom") {
      const f = Number(op.factor || 1);
      if (Number.isFinite(f) && f !== 1 && f > 0) {
        // NEW: center vector2D; fallback to svg center
        const c = op.center;

        const zx = resolveCenterAxis(c?.x, w, cx);
        const zy = resolveCenterAxis(c?.y, h, cy);

        // backward compat (if old ops exist): op.cx/op.cy may also be fractional percentages
        const cxOld = Number.isFinite(+op.cx) ? resolveCenterAxis(op.cx, w, zx) : zx;
        const cyOld = Number.isFinite(+op.cy) ? resolveCenterAxis(op.cy, h, zy) : zy;

        parts.push(
          `translate(${cxOld} ${cyOld}) scale(${f}) translate(${-cxOld} ${-cyOld})`
        );
      }
    } else if (op.kind === "translate") {
      // NEW: vector2D translate
      const v = op.v || { x: op.x, y: op.y }; // backward compat
      const tx = Number.isFinite(+v?.x) ? +v.x : 0;
      const ty = Number.isFinite(+v?.y) ? +v.y : 0;
      if (tx || ty) parts.push(`translate(${tx} ${ty})`);
    }
  }

  return parts.join(" ");
}

export function tagCloneForMode(node, tile, localIdx, N) {
  if (!(node instanceof Element)) return;
  node.setAttribute("data-xf-mode", String(tile));
  node.setAttribute("data-xf-source-index", String(localIdx));
  node.setAttribute("data-xf-global-index", String(tile * N + localIdx));

  for (const el of node.querySelectorAll("*")) {
    el.setAttribute("data-xf-mode", String(tile));
    el.setAttribute("data-xf-source-index", String(localIdx));
    el.setAttribute("data-xf-global-index", String(tile * N + localIdx));
  }
}

export function dedupeIdsInSubtree(root, suffix) {
  if (!(root instanceof Element)) return;

  const idMap = new Map();

  // 1) rename all ids
  const all = [root, ...Array.from(root.querySelectorAll("*"))];
  for (const el of all) {
    const id = el.getAttribute("id");
    if (id) {
      const next = `${id}${suffix}`;
      idMap.set(id, next);
      el.setAttribute("id", next);
    }
  }

  if (!idMap.size) return;

  // 2) rewrite common ref-bearing attributes
  const refAttrs = [
    "href", "xlink:href",
    "fill", "stroke", "filter", "clip-path", "mask",
    "marker-start", "marker-mid", "marker-end",
    "style",
  ];

  for (const el of all) {
    for (const a of refAttrs) {
      const v = el.getAttribute(a);
      if (!v) continue;

      let next = v;
      for (const [oldId, newId] of idMap) {
        next = next
          .replaceAll(`url(#${oldId})`, `url(#${newId})`)
          .replaceAll(`"#${oldId}"`, `"#${newId}"`)
          .replaceAll(`#${oldId}`, `#${newId}`);
      }
      if (next !== v) el.setAttribute(a, next);
    }
  }
}
