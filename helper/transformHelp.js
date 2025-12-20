/* --------------------------- Transforms tab --------------------------- */
import { el,getByPath,buildControl} from "./visualHelp.js";
import { ensurePropOpsState, applyPropOpsToSubtree } from "./svgEditor.js";

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

function formatXfStack(stack) {
  if (!stack?.length) return "(no transforms applied)";
  return stack
    .map((op, i) => {
      if (op.kind === "split") return `${i}: split(${op.count})`;
      const tgt = op.targets == null ? "all" : `[${op.targets.join(",")}]`;
      if (op.kind === "rotate") return `${i}: rotate(targets=${tgt}, deg=${op.deg})`;
      if (op.kind === "flipX") return `${i}: flipX(targets=${tgt})`;
      if (op.kind === "flipY") return `${i}: flipY(targets=${tgt})`;
      if (op.kind === "zoom") return `${i}: zoom(targets=${tgt}, factor=${op.factor})`;
      return `${i}: ${op.kind}`;
    })
    .join("\n");
}

export function ensureTransformState(state) {
 function ensureTransformState(state) {
  if (!state.__xf || typeof state.__xf !== "object") state.__xf = {};
  if (!state.__xf.ui || typeof state.__xf.ui !== "object") {
    state.__xf.ui = {
      splitCount: 1,
      applyToAll: false,     // NEW
      activeTile: "0",       // single-tile dropdown still works
      tileTargets: "0",      // NEW: "all" | "0" | "0,2,3" | "1-4"
      rotateDeg: 90,
      zoomFactor: 1.25,      // NEW
    };
  }
  if (!Array.isArray(state.__xf.stack)) state.__xf.stack = [];
}

}

export function buildTransformPanel({ mountEl, state, xfRuntime }) {
  ensureTransformState(state);

  const root = document.createElement("div");
  root.className = "xf-panel";

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
    //   {
    //     key: "__xf.ui.applyToAll",
    //     label: "apply transforms to all tiles",
    //     type: "boolean",
    //     default: false,
    //     description: "If on, rotate/flip/zoom applies to every split tile.",
    //   },

    //   // Keep the single-tile select (requested)
    //   {
    //     key: "__xf.ui.activeTile",
    //     label: "quick pick tile",
    //     type: "select",
    //     default: "0",
    //     options: tileOptions,
    //     description: "Select a tile (or all) and it will populate tile targets.",
    //   },

      // New: type numbers / ranges / 'all'
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
        onChange: () => render(), // keep tab dynamic
      });

      // When the dropdown changes, also set tileTargets to match (so typing not required)
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

    // NEW: zoom
    btnRow.appendChild(
      mkBtn("zoom in", () => {
        const f = isFinite(zoomFactor) && zoomFactor > 0 ? zoomFactor : 1.25;
        state.__xf.stack.push({ kind: "zoom", targets, factor: f });
        xfRuntime?.rebuildNow?.();
        render();
      })
    );

    btnRow.appendChild(
      mkBtn("zoom out", () => {
        const f = isFinite(zoomFactor) && zoomFactor > 0 ? 1 / zoomFactor : 1 / 1.25;
        state.__xf.stack.push({ kind: "zoom", targets, factor: f });
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


// export function formatXfStack(stack) {
//   if (!stack?.length) return "(no transforms applied)";
//   return stack
//     .map((op, i) => {
//       if (op.kind === "split") return `${i}: split(${op.count})`;
//       if (op.kind === "rotate") return `${i}: rotate(tile=${op.tile}, deg=${op.deg})`;
//       if (op.kind === "flipX") return `${i}: flipX(tile=${op.tile})`;
//       if (op.kind === "flipY") return `${i}: flipY(tile=${op.tile})`;
//       return `${i}: ${op.kind}`;
//     })
//     .join("\n");
// }

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
 *
 * This avoids breaking visuals that do g.selectAll("*").remove() on every render. :contentReference[oaicite:5]{index=5}
 */
export function initTransformRuntime({ mountEl, state }) {
  ensureTransformState(state);
    ensurePropOpsState(state);
  const svg = mountEl?.querySelector?.("svg");
  if (!(svg instanceof SVGSVGElement)) {
    return {
      rebuildNow() {},
      resetToInitial() {},
      destroy() {},
    };
  }

  // Pick a source group (mandel uses a single <g> for all shapes). :contentReference[oaicite:6]{index=6}
  const sourceG =
    Array.from(svg.querySelectorAll("g")).find(g => !g.closest("defs") && !g.hasAttribute("data-xf-layer")) ||
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
    layerG.style.pointerEvents = "none"; // let pointer events hit the underlying svg handlers
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

  // Keep up with visuals that redraw internally (mandel zoom anim does). :contentReference[oaicite:7]{index=7}
  const mo = new MutationObserver(schedule);
  //mo.observe(sourceG, { childList: true, subtree: true, attributes: false });
mo.observe(sourceG, { childList: true, subtree: true, attributes: true });

   function resetToInitial() {
    // show source, clear clones, restore original transform attribute
    layerG.replaceChildren();
    sourceG.style.display = "";
    if (initialSourceTransform == null) sourceG.removeAttribute("transform");
    else sourceG.setAttribute("transform", initialSourceTransform);
  }

  function rebuildNow() {
    const stack = state.__xf.stack || [];
    const splitCount = getEffectiveSplitCount(stack);
    const propStack = state.__propOps?.stack || [];
    const hasProps = propStack.length > 0;
    const { w, h } = getSvgSize(svg);

    // No transforms at all => true reset display
    if (!stack.length && !hasProps) {
      resetToInitial();
      return;
    }

    if (splitCount <= 1) {
      // Transform the live source group directly (keeps DOM stable)
      layerG.replaceChildren();
      sourceG.style.display = "";

      const t = tileTransformFromStack({ stack, tile: 0, w, h });
      if (t) sourceG.setAttribute("transform", t);
      else resetToInitial();
      return;
    }

    // split > 1: build clones into layer, keep source hidden but live
    sourceG.style.display = "none";
    layerG.replaceChildren();

    const grid = Math.ceil(Math.sqrt(splitCount));
    const scale = 1 / grid;

    const sourceKids = Array.from(sourceG.children);
    const N = sourceKids.length;

    for (let i = 0; i < splitCount; i++) {
      const col = i % grid;
      const row = Math.floor(i / grid);

      const gTile = document.createElementNS("http://www.w3.org/2000/svg", "g");
      gTile.setAttribute("data-xf-tile", String(i));
      gTile.setAttribute(
        "transform",
        `translate(${col * w * scale},${row * h * scale}) scale(${scale})`
      );

      const gXf = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const perTile = tileTransformFromStack({ stack, tile: i, w, h });
      if (perTile) gXf.setAttribute("transform", perTile);

      // Clone each top-level element so we can “mode index” them:
      // 0..N-1 for tile0, N..2N-1 for tile1, etc (via data-xf-global-index)
      for (let k = 0; k < N; k++) {
        const cloned = sourceKids[k].cloneNode(true);
        tagCloneForMode(cloned, i, k, N);
        dedupeIdsInSubtree(cloned, `__xf${i}`);
        applyPropOpsToSubtree(cloned, propStack);
        gXf.appendChild(cloned);
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
  // Prefer viewBox, else width/height attrs, else bounding rect
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
        parts.push(`translate(${cx} ${cy}) scale(${f}) translate(${-cx} ${-cy})`);
      }
    }
  }
  return parts.join(" ");
}


export function tagCloneForMode(node, tile, localIdx, N) {
  if (!(node instanceof Element)) return;
  node.setAttribute("data-xf-mode", String(tile));
  node.setAttribute("data-xf-source-index", String(localIdx));
  node.setAttribute("data-xf-global-index", String(tile * N + localIdx));

  // also tag subtree so you can address ranges if needed
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
