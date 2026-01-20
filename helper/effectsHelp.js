// helper/effectsHelp.js
// Effects tab: UI-driven SVG scale/convert utilities + equation ops.

import { el, registerTab } from "./visualHelp.js";
import { selectElementsByPropSelector } from "./svgEditor.js";
import {
  scaleCirclesInSubtree,
  scaleRectsInSubtree,
  scalePolygonsInSubtree,
  scalePathsInSubtree,
  convertShapesInSubtree,
  mergeCirclesToPathsInSubtree,
  mergeRectsToPathsInSubtree,
} from "./scriptOpsUtils.js";

const EFFECT_TYPES = ["scale", "convert", "paint", "merge"];
const SHAPE_TYPES = ["circle", "rect", "polygon", "path"];

const ATTR_KEYWORDS = [
  { key: "opacity", desc: "Overall element opacity (0..1)" },
  { key: "fill-opacity", desc: "Fill opacity (0..1)" },
  { key: "stroke-opacity", desc: "Stroke opacity (0..1)" },
  { key: "stroke-width", desc: "Stroke width" },
  { key: "stroke-miterlimit", desc: "Stroke miter limit" },
  { key: "stroke-dashoffset", desc: "Stroke dash offset" },
  { key: "r", desc: "Circle radius" },
  { key: "cx", desc: "Circle center x" },
  { key: "cy", desc: "Circle center y" },
  { key: "x", desc: "Rect x" },
  { key: "y", desc: "Rect y" },
  { key: "width", desc: "Rect width" },
  { key: "height", desc: "Rect height" },
  { key: "rx", desc: "Rect corner radius x" },
  { key: "ry", desc: "Rect corner radius y" },
];

const ATTR_KEY_SET = new Set(ATTR_KEYWORDS.map((k) => k.key));

function ensureEffectsState(state) {
  if (!state.__effects || typeof state.__effects !== "object") state.__effects = {};
  if (!state.__effects.ui || typeof state.__effects.ui !== "object") {
    state.__effects.ui = {
      effectType: "scale",
      selector: "",
      elementType: "circle",
      rangeMin: 0.5,
      rangeMax: 1.5,
      count: 10,
      spacing: "linear",
      opacityMode: "auto",
      opacityFixed: 1,
      opacityMin: 0.25,
      opacityMax: 1,
      equation: "",
      convertFrom: "path",
      convertTo: "circle",
      pathSamplePoints: 64,
      convertScaleMode: "none",
      convertScaleFactor: 1,
      paintFill: "none",
      paintStroke: "#000000",
      mergeShape: "circle",
      mergeSelector: "",
      mergeSelectorRuleText: "",
      mergeRatio: 1.15,
      mergePadding: 2,
      mergeGridStep: 4,
      mergeSmoothPasses: 1,
      mergeStroke: "#000000",
      mergeStrokeWidth: 1.5,
      autoRun: false,
      debug: false,
    };
  }
  if (!state.__effects.ui.groupsOpen || typeof state.__effects.ui.groupsOpen !== "object") {
    state.__effects.ui.groupsOpen = {};
  }
}

function clampNum(x, fallback = 0) {
  const n = Number(x);
  return Number.isFinite(n) ? n : fallback;
}

function parseNumberLike(v, fallback = 0) {
  const s = String(v ?? "").trim();
  const m = s.match(/^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);
  const n = m ? Number(m[0]) : NaN;
  return Number.isFinite(n) ? n : fallback;
}

function parseEquation(raw) {
  const text = String(raw || "").trim();
  if (!text) return { ok: true, empty: true, rule: null };

  const m = text.match(
    /^(foreach|sum(?:\((forward|backward)\))?)\s*:\s*([a-zA-Z][\w.-]*)\s*([+\-*/])\s*([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s*$/
  );
  if (!m) {
    return {
      ok: false,
      error: 'Syntax: foreach:opacity *1.2 OR sum(forward):opacity +0.1',
    };
  }

  const modeRaw = m[1];
  const mode = modeRaw.startsWith("sum") ? "sum" : "foreach";
  const direction = m[2] || "forward";
  const prop = m[3];
  const op = m[4];
  const value = Number(m[5]);
  if (!Number.isFinite(value)) return { ok: false, error: "Equation value must be numeric." };

  return { ok: true, rule: { mode, direction, prop, op, value } };
}

function resolvePropTarget(el, prop) {
  if (prop.startsWith("style.")) return { kind: "style", name: prop.slice(6) };
  if (el.hasAttribute(prop)) return { kind: "attr", name: prop };
  if (prop in el.style) return { kind: "style", name: prop };
  return { kind: "attr", name: prop };
}

function readNumericProp(el, prop) {
  const target = resolvePropTarget(el, prop);
  if (target.kind === "style") {
    const v = el.style?.[target.name];
    return parseNumberLike(v, NaN);
  }
  const v = el.getAttribute(target.name);
  return parseNumberLike(v, NaN);
}

function writeNumericProp(el, prop, value) {
  const target = resolvePropTarget(el, prop);
  const v = Number.isFinite(value) ? value : 0;
  if (target.kind === "style") {
    el.style[target.name] = String(v);
  } else {
    el.setAttribute(target.name, String(v));
  }
}

function applyOp(base, op, rhs) {
  switch (op) {
    case "+": return base + rhs;
    case "-": return base - rhs;
    case "*": return base * rhs;
    case "/": return rhs === 0 ? base : base / rhs;
    default: return base;
  }
}

function applyEquationToList(els, rule) {
  if (!rule || !els.length) return;
  const ordered = rule.direction === "backward" ? [...els].reverse() : els;

  if (rule.mode === "foreach") {
    for (const el of ordered) {
      const base = readNumericProp(el, rule.prop);
      const b = Number.isFinite(base) ? base : 0;
      const next = applyOp(b, rule.op, rule.value);
      writeNumericProp(el, rule.prop, next);
    }
    return;
  }

  let current = readNumericProp(ordered[0], rule.prop);
  if (!Number.isFinite(current)) current = 0;

  for (let i = 0; i < ordered.length; i++) {
    if (i === 0) {
      writeNumericProp(ordered[i], rule.prop, current);
    } else {
      current = applyOp(current, rule.op, rule.value);
      writeNumericProp(ordered[i], rule.prop, current);
    }
  }
}

function combineTransform(existing, next) {
  const a = String(existing || "").trim();
  const b = String(next || "").trim();
  if (!a) return b;
  if (!b) return a;
  return `${a} ${b}`;
}

function applyScaleTransform(el, scaleFactor, mode) {
  const s = Number(scaleFactor);
  if (!Number.isFinite(s) || s === 1) return;

  let transform = "";
  if (mode === "center") {
    let bb = null;
    try { bb = el.getBBox(); } catch {}
    if (bb && Number.isFinite(bb.width) && Number.isFinite(bb.height)) {
      const cx = bb.x + bb.width / 2;
      const cy = bb.y + bb.height / 2;
      transform = `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`;
    }
  }

  if (!transform) transform = `scale(${s})`;
  const existing = el.getAttribute("transform");
  const combined = combineTransform(existing, transform);
  if (combined) el.setAttribute("transform", combined);
}

export function registerEffectsTab() {
  registerTab("effects", ({ mountEl, state, xfRuntime, onStateChange }) =>
    buildEffectsPanel({ mountEl, state, xfRuntime, onStateChange })
  );
}

export function buildEffectsPanel({ mountEl, state, xfRuntime, onStateChange }) {
  ensureEffectsState(state);
  const ui = state.__effects.ui;
  const markDirty = () => onStateChange?.();

  const root = el("div", { className: "fx-panel" });

  const status = el("div", { className: "fx-msg", textContent: "" });
  const eqStatus = el("div", { className: "fx-msg", textContent: "" });

  const row = (label, node, help) => {
    const wrap = el("div", { className: "vr-row" });
    wrap.appendChild(el("div", { className: "vr-label", textContent: label }));
    if (help) wrap.appendChild(el("div", { className: "vr-help", textContent: help }));
    wrap.appendChild(el("div", { className: "vr-input" }, [node]));
    return wrap;
  };

  const group = (title, nodes) => {
    const storedOpen = ui.groupsOpen?.[title];
    const isOpen = typeof storedOpen === "boolean" ? storedOpen : false;
    const wrap = el("details", { className: "vr-paramGroup", open: isOpen });
    wrap.appendChild(el("summary", { className: "vr-paramGroupTitle", textContent: title }));
    wrap.appendChild(el("div", { className: "vr-paramGroupBody" }, nodes));
    wrap.addEventListener("toggle", () => {
      ui.groupsOpen[title] = wrap.open;
      markDirty();
    });
    return wrap;
  };

  const effectSel = el("select");
  EFFECT_TYPES.forEach((t) => effectSel.appendChild(el("option", { value: t, textContent: t })));
  effectSel.value = ui.effectType || "scale";
  effectSel.onchange = () => {
    ui.effectType = effectSel.value;
    markDirty();
    refresh();
  };

  const buildElementSelect = () => {
    const sel = el("select");
    SHAPE_TYPES.forEach((t) => sel.appendChild(el("option", { value: t, textContent: t })));
    sel.value = ui.elementType || "circle";
    return sel;
  };
  const elementSelScale = buildElementSelect();
  const elementSelPaint = buildElementSelect();
  elementSelScale.onchange = () => {
    ui.elementType = elementSelScale.value;
    elementSelPaint.value = elementSelScale.value;
    markDirty();
  };
  elementSelPaint.onchange = () => {
    ui.elementType = elementSelPaint.value;
    elementSelScale.value = elementSelPaint.value;
    markDirty();
  };

  const selectorScaleInput = el("input", {
    type: "text",
    value: ui.selector || "",
    placeholder: 'CSS selector override (blank = use element type)'
  });
  selectorScaleInput.oninput = () => {
    if (ui.effectType === "scale" || ui.effectType === "paint") {
      ui.selector = selectorScaleInput.value;
      markDirty();
    }
  };
  const selectorPaintInput = el("input", {
    type: "text",
    value: ui.selector || "",
    placeholder: 'CSS selector override (blank = use element type)'
  });
  selectorPaintInput.oninput = () => {
    if (ui.effectType === "paint") {
      ui.selector = selectorPaintInput.value;
      markDirty();
    }
  };
  const selectorConvertInput = el("input", {
    type: "text",
    value: ui.selector || "",
    placeholder: 'CSS selector override (blank = use "from shape")'
  });
  selectorConvertInput.oninput = () => {
    if (ui.effectType === "convert") {
      ui.selector = selectorConvertInput.value;
      markDirty();
    }
  };

  const minInput = el("input", { type: "number", step: "0.01", value: String(ui.rangeMin ?? 0.5) });
  const maxInput = el("input", { type: "number", step: "0.01", value: String(ui.rangeMax ?? 1.5) });
  const countInput = el("input", { type: "number", step: "1", min: "1", value: String(ui.count ?? 10) });

  const spacingSel = el("select");
  ["linear", "easeInOut"].forEach((t) => spacingSel.appendChild(el("option", { value: t, textContent: t })));
  spacingSel.value = ui.spacing || "linear";

  const opacityMode = el("select");
  ["auto", "none", "fixed", "ramp"].forEach((t) => opacityMode.appendChild(el("option", { value: t, textContent: t })));
  opacityMode.value = ui.opacityMode || "auto";

  const opacityFixed = el("input", { type: "number", step: "0.01", min: "0", max: "1", value: String(ui.opacityFixed ?? 1) });
  const opacityMin = el("input", { type: "number", step: "0.01", min: "0", max: "1", value: String(ui.opacityMin ?? 0.25) });
  const opacityMax = el("input", { type: "number", step: "0.01", min: "0", max: "1", value: String(ui.opacityMax ?? 1) });

  const eqInput = el("input", {
    type: "text",
    value: ui.equation || "",
    placeholder: "foreach:opacity *1.2  OR  sum(forward):opacity +0.1",
  });

  const eqList = el("datalist", { id: `fx-eq-keys-${Math.random().toString(16).slice(2)}` });
  ATTR_KEYWORDS.forEach((k) => eqList.appendChild(el("option", { value: k.key })));
  eqInput.setAttribute("list", eqList.id);

  const debugCb = el("input", { type: "checkbox" });
  debugCb.checked = !!ui.debug;
  const autoRunCb = el("input", { type: "checkbox" });
  autoRunCb.checked = !!ui.autoRun;
  autoRunCb.onchange = () => {
    ui.autoRun = !!autoRunCb.checked;
    markDirty();
  };

  const convertFrom = el("select");
  SHAPE_TYPES.forEach((t) => convertFrom.appendChild(el("option", { value: t, textContent: t })));
  convertFrom.value = ui.convertFrom || "path";

  const convertTo = el("select");
  SHAPE_TYPES.forEach((t) => convertTo.appendChild(el("option", { value: t, textContent: t })));
  convertTo.value = ui.convertTo || "circle";

  const samplePoints = el("input", {
    type: "number",
    min: "3",
    step: "1",
    value: String(ui.pathSamplePoints ?? 64),
  });

  const convertScaleMode = el("select");
  ["none", "center", "origin"].forEach((t) => convertScaleMode.appendChild(el("option", { value: t, textContent: t })));
  convertScaleMode.value = ui.convertScaleMode || "none";

  const convertScaleFactor = el("input", {
    type: "number",
    step: "0.01",
    value: String(ui.convertScaleFactor ?? 1),
  });

  const paintFill = el("input", { type: "text", value: ui.paintFill || "#ffffff", placeholder: "#ffffff or none" });
  const paintStroke = el("input", { type: "text", value: ui.paintStroke || "#000000", placeholder: "#000000 or none" });
  const paintList = el("datalist", { id: `fx-paint-${Math.random().toString(16).slice(2)}` });
  ["#000000", "#ffffff", "none"].forEach((v) => paintList.appendChild(el("option", { value: v })));
  paintFill.setAttribute("list", paintList.id);
  paintStroke.setAttribute("list", paintList.id);

  const mergeShapeSel = el("select");
  ["circle", "rect"].forEach((t) => mergeShapeSel.appendChild(el("option", { value: t, textContent: t })));
  mergeShapeSel.value = ui.mergeShape || "circle";

  const mergeSelectorInput = el("input", {
    type: "text",
    value: ui.mergeSelector || "",
    placeholder: 'CSS selector override (blank = use merge shape)'
  });
  const mergeRuleInput = el("textarea", {
    rows: "4",
    value: ui.mergeSelectorRuleText || "",
    placeholder: 'Prop selector JSON (see PROP_OPS_RULES.md)'
  });

  const mergeRatioInput = el("input", { type: "number", step: "0.01", value: String(ui.mergeRatio ?? 1.02) });
  const mergePaddingInput = el("input", { type: "number", step: "0.1", value: String(ui.mergePadding ?? 1) });
  const mergeGridStepInput = el("input", { type: "number", step: "1", value: String(ui.mergeGridStep ?? 6) });
  const mergeSmoothInput = el("input", { type: "number", step: "1", min: "0", value: String(ui.mergeSmoothPasses ?? 1) });
  const mergeStrokeInput = el("input", { type: "text", value: ui.mergeStroke || "#000000", placeholder: "#000000" });
  const mergeStrokeWidthInput = el("input", { type: "number", step: "0.1", min: "0", value: String(ui.mergeStrokeWidth ?? 1.5) });

  const keywordsHelp = el("div", { className: "fx-keywords" },
    ATTR_KEYWORDS.map((k) =>
      el("div", { className: "fx-keyword" }, [
        el("span", { className: "fx-key", textContent: k.key }),
        el("span", { className: "fx-desc", textContent: ` - ${k.desc}` }),
      ])
    )
  );

  const keywordGroup = group("Keyword Cheatsheet", [
    el("div", { className: "vr-help", textContent: "Numeric SVG attributes you can target in equations." }),
    keywordsHelp,
  ]);

  const runBtn = el("button", { type: "button", textContent: "apply effect" });
  runBtn.onclick = () => {
    ui.effectType = effectSel.value;
    ui.elementType = elementSelScale.value;
    if (ui.effectType === "scale") ui.selector = selectorScaleInput.value;
    else if (ui.effectType === "paint") ui.selector = selectorPaintInput.value;
    else ui.selector = selectorConvertInput.value;
    ui.rangeMin = clampNum(minInput.value, ui.rangeMin);
    ui.rangeMax = clampNum(maxInput.value, ui.rangeMax);
    ui.count = Math.max(1, Math.trunc(clampNum(countInput.value, ui.count)));
    ui.spacing = spacingSel.value;
    ui.opacityMode = opacityMode.value;
    ui.opacityFixed = clampNum(opacityFixed.value, ui.opacityFixed);
    ui.opacityMin = clampNum(opacityMin.value, ui.opacityMin);
    ui.opacityMax = clampNum(opacityMax.value, ui.opacityMax);
    ui.equation = eqInput.value;
    ui.debug = !!debugCb.checked;
    ui.convertFrom = convertFrom.value;
    ui.convertTo = convertTo.value;
    ui.pathSamplePoints = Math.max(3, Math.trunc(clampNum(samplePoints.value, ui.pathSamplePoints)));
    ui.convertScaleMode = convertScaleMode.value;
    ui.convertScaleFactor = clampNum(convertScaleFactor.value, ui.convertScaleFactor);
    ui.paintFill = paintFill.value;
    ui.paintStroke = paintStroke.value;
    ui.mergeShape = mergeShapeSel.value;
    ui.mergeSelector = mergeSelectorInput.value;
    ui.mergeSelectorRuleText = mergeRuleInput.value;
    ui.mergeRatio = clampNum(mergeRatioInput.value, ui.mergeRatio);
    ui.mergePadding = clampNum(mergePaddingInput.value, ui.mergePadding);
    ui.mergeGridStep = clampNum(mergeGridStepInput.value, ui.mergeGridStep);
    ui.mergeSmoothPasses = Math.max(0, Math.trunc(clampNum(mergeSmoothInput.value, ui.mergeSmoothPasses)));
    ui.mergeStroke = mergeStrokeInput.value;
    ui.mergeStrokeWidth = clampNum(mergeStrokeWidthInput.value, ui.mergeStrokeWidth);
    markDirty();

    status.classList.remove("error");

    runEffectsFromUI({ mountEl, state, xfRuntime, statusEl: status });
  };

  eqInput.oninput = () => {
    const parsed = parseEquation(eqInput.value);
    if (parsed.ok) {
      eqStatus.classList.remove("error");
      if (parsed.empty) {
        eqStatus.textContent = "Equation optional. Leave blank to skip.";
      } else if (ATTR_KEY_SET.has(parsed.rule.prop)) {
        eqStatus.textContent = `OK: ${parsed.rule.mode} ${parsed.rule.direction}, ${parsed.rule.prop} ${parsed.rule.op} ${parsed.rule.value}`;
      } else {
        eqStatus.textContent = `OK: ${parsed.rule.prop} is custom (not in cheatsheet).`;
      }
    } else {
      eqStatus.textContent = parsed.error;
      eqStatus.classList.add("error");
    }
  };
  eqInput.oninput();

  const scaleBlock = el("div", { className: "fx-block" }, [
    row("element type", elementSelScale, "Choose circle, rect, polygon, or path."),
    row("selector", selectorScaleInput, "Optional CSS selector override."),
    row("scale min", minInput, "Minimum scale factor."),
    row("scale max", maxInput, "Maximum scale factor."),
    row("count", countInput, "Number of scaled copies."),
    row("spacing", spacingSel, "Scale spacing: linear or smooth."),
    row("opacity mode", opacityMode, "Auto ramps opacity unless disabled."),
    row("opacity fixed", opacityFixed, "Used when opacity mode = fixed."),
    row("opacity min", opacityMin, "Used when opacity mode = ramp."),
    row("opacity max", opacityMax, "Used when opacity mode = ramp."),
    row("equation", el("div", {}, [eqInput, eqList]), "Applies to each scaled clone."),
    eqStatus,
  ]);

  const convertBlock = el("div", { className: "fx-block" }, [
    row("from shape", convertFrom, "Input SVG element type."),
    row("to shape", convertTo, "Output SVG element type."),
    row("selector", selectorConvertInput, "Optional CSS selector override."),
    row("path samples", samplePoints, "Used when converting path -> polygon."),
    row("scale mode", convertScaleMode, "Scale converted output around center or origin."),
    row("scale factor", convertScaleFactor, "Scale applied to converted output."),
  ]);

  const paintBlock = el("div", { className: "fx-block" }, [
    row("element type", elementSelPaint, "Choose circle, rect, polygon, or path."),
    row("selector", selectorPaintInput, "Optional CSS selector override."),
    row("fill", el("div", {}, [paintFill, paintList]), "Fill color or 'none'."),
    row("stroke", el("div", {}, [paintStroke]), "Stroke color or 'none'."),
  ]);

  const mergeBlock = el("div", { className: "fx-block" }, [
    row("shape", mergeShapeSel, "Choose circle or rect for merging."),
    row("selector", mergeSelectorInput, "Optional CSS selector override."),
    row("selector rule", mergeRuleInput, "Prop-ops selector JSON to match elements."),
    row("merge ratio", mergeRatioInput, "Connectivity threshold for circles."),
    row("merge padding", mergePaddingInput, "Grow shapes slightly before merging."),
    row("grid step", mergeGridStepInput, "Contour sampling step (px)."),
    row("smooth passes", mergeSmoothInput, "Chaikin smoothing iterations."),
    row("stroke", mergeStrokeInput, "Stroke color for merged paths."),
    row("stroke width", mergeStrokeWidthInput, "Stroke width for merged paths."),
  ]);

  const topGroup = group("Effect", [
    row("type", effectSel, "Choose scale, convert, paint, or merge effects."),
  ]);

  const scaleGroup = group("Scale Effect", [scaleBlock]);
  const convertGroup = group("Convert Effect", [convertBlock]);
  const paintGroup = group("Paint Effect", [paintBlock]);
  const mergeGroup = group("Merge Effect", [mergeBlock]);
  const applyGroup = group("Apply", [
    row("debug", debugCb, "Enable console logging in effect helpers."),
    row("auto run", autoRunCb, "Run effect after every render call."),
    el("div", { className: "vr-input" }, [runBtn]),
    status,
  ]);

  const refresh = () => {
    const isScale = ui.effectType === "scale";
    const isConvert = ui.effectType === "convert";
    const isPaint = ui.effectType === "paint";
    const isMerge = ui.effectType === "merge";
    scaleGroup.style.display = isScale ? "" : "none";
    convertGroup.style.display = isConvert ? "" : "none";
    paintGroup.style.display = isPaint ? "" : "none";
    mergeGroup.style.display = isMerge ? "" : "none";
    const selVal = String(ui.selector || "");
    selectorScaleInput.value = selVal;
    selectorPaintInput.value = selVal;
    selectorConvertInput.value = selVal;
    mergeSelectorInput.value = String(ui.mergeSelector || "");
    mergeRuleInput.value = String(ui.mergeSelectorRuleText || "");
    mergeShapeSel.value = ui.mergeShape || "circle";
    autoRunCb.checked = !!ui.autoRun;
    elementSelScale.value = ui.elementType || "circle";
    elementSelPaint.value = ui.elementType || "circle";
  };

  root.appendChild(topGroup);
  root.appendChild(scaleGroup);
  root.appendChild(convertGroup);
  root.appendChild(paintGroup);
  root.appendChild(mergeGroup);
  root.appendChild(applyGroup);
  root.appendChild(keywordGroup);
  refresh();
  return root;
}

function getSvgContexts(mountEl) {
  const svgs = Array.from(mountEl?.querySelectorAll?.("svg") || []);
  return svgs.map((svg) => {
    const rootEl = svg;
    const create = (tag) => document.createElementNS(svg.namespaceURI, String(tag));
    return { svg, rootEl, create };
  });
}

export function runEffectsFromUI({ mountEl, state, xfRuntime, statusEl } = {}) {
  ensureEffectsState(state);
  const ui = state.__effects.ui;
  const contexts = getSvgContexts(mountEl);
  if (!contexts.length) {
    if (statusEl) {
      statusEl.textContent = "No SVG found in this visual.";
      statusEl.classList.add("error");
    }
    return { ok: false };
  }

  const runId = `fx-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  if (statusEl) statusEl.classList.remove("error");

  if (ui.effectType === "scale") {
    const parsedEq = parseEquation(ui.equation);
    if (!parsedEq.ok) {
      if (statusEl) {
        statusEl.textContent = parsedEq.error;
        statusEl.classList.add("error");
      }
      return { ok: false };
    }

    const range = [ui.rangeMin, ui.rangeMax, ui.count];
    const selector = String(ui.selector || "").trim() || ui.elementType;

    let opacity = null;
    if (ui.opacityMode === "none") opacity = false;
    else if (ui.opacityMode === "fixed") opacity = ui.opacityFixed;
    else if (ui.opacityMode === "ramp") opacity = [ui.opacityMin, ui.opacityMax];

    let totalReplaced = 0;
    let totalClones = 0;
    const opts = { selector, range, spacing: ui.spacing, opacity, runId, debug: ui.debug };
    for (const { rootEl, create } of contexts) {
      let stats = null;
      const ctxObj = { root: rootEl, create };

      if (ui.elementType === "circle") stats = scaleCirclesInSubtree(ctxObj, opts);
      else if (ui.elementType === "rect") stats = scaleRectsInSubtree(ctxObj, opts);
      else if (ui.elementType === "polygon") stats = scalePolygonsInSubtree(ctxObj, opts);
      else stats = scalePathsInSubtree(ctxObj, opts);

      totalReplaced += stats?.replaced ?? 0;
      totalClones += stats?.clonesMade ?? 0;

      if (parsedEq.rule) {
        const groups = Array.from(rootEl.querySelectorAll(`g[data-scale-run="${runId}"]`));
        for (const g of groups) {
          const clones = Array.from(g.querySelectorAll('[data-scale-clone="1"]'));
          applyEquationToList(clones, parsedEq.rule);
        }
      }
    }

    if (statusEl) {
      statusEl.textContent = `scale applied: ${totalReplaced} groups, ${totalClones} clones.`;
    }
  } else if (ui.effectType === "convert") {
    let totalConverted = 0;
    let totalSkipped = 0;
    for (const { rootEl, create } of contexts) {
      const stats = convertShapesInSubtree(
        { root: rootEl, create },
        {
          fromTag: ui.convertFrom,
          toTag: ui.convertTo,
          selector: String(ui.selector || "").trim() || null,
          pathSamplePoints: ui.pathSamplePoints,
          runId,
          debug: ui.debug,
        }
      );

      totalConverted += stats?.converted ?? 0;
      totalSkipped += stats?.skipped ?? 0;

      if (ui.convertScaleMode !== "none" && ui.convertScaleFactor !== 1) {
        const converted = Array.from(rootEl.querySelectorAll(`[data-convert-run="${runId}"]`));
        for (const el of converted) {
          applyScaleTransform(el, ui.convertScaleFactor, ui.convertScaleMode);
        }
      }
    }

    if (statusEl) {
      statusEl.textContent = `convert applied: ${totalConverted} converted, ${totalSkipped} skipped.`;
    }
  } else if (ui.effectType === "merge") {
    let totalMerged = 0;
    let totalPaths = 0;
    for (const { rootEl, create } of contexts) {
      const selector = String(ui.mergeSelector || "").trim() || ui.mergeShape;
      let elements = null;
      const ruleText = String(ui.mergeSelectorRuleText || "").trim();
      if (ruleText) {
        try {
          const rule = JSON.parse(ruleText);
          elements = selectElementsByPropSelector(rootEl, rule);
        } catch (err) {
          if (statusEl) {
            statusEl.textContent = `merge selector JSON error: ${err?.message || err}`;
            statusEl.classList.add("error");
          } else {
            // eslint-disable-next-line no-console
            console.warn("merge selector JSON error:", err);
          }
          return { ok: false };
        }
      }
      const opts = {
        selector,
        elements,
        padding: ui.mergePadding,
        gridStep: ui.mergeGridStep,
        smoothPasses: ui.mergeSmoothPasses,
        stroke: ui.mergeStroke || "#000000",
        strokeWidth: ui.mergeStrokeWidth,
        runId,
        debug: ui.debug,
      };
      let stats = null;
      if (ui.mergeShape === "circle") {
        stats = mergeCirclesToPathsInSubtree({ root: rootEl, create }, { ...opts, mergeRatio: ui.mergeRatio });
      } else {
        stats = mergeRectsToPathsInSubtree({ root: rootEl, create }, opts);
      }
      totalMerged += stats?.merged ?? 0;
      totalPaths += stats?.paths ?? 0;
    }
    if (statusEl) {
      statusEl.textContent = `merge applied: ${totalMerged} merged into ${totalPaths} paths.`;
    }
  } else {
    const selector = String(ui.selector || "").trim() || ui.elementType;
    const fillVal = String(ui.paintFill || "").trim();
    const strokeVal = String(ui.paintStroke || "").trim();
    let touched = 0;

    for (const { rootEl } of contexts) {
      const nodes = Array.from(rootEl.querySelectorAll(selector));
      for (const elNode of nodes) {
        if (!(elNode instanceof Element)) continue;
        if (fillVal) {
          elNode.setAttribute("fill", fillVal);
          elNode.style.fill = fillVal;
        }
        if (strokeVal) {
          elNode.setAttribute("stroke", strokeVal);
          elNode.style.stroke = strokeVal;
        }
        touched += 1;
      }
    }

    if (statusEl) {
      statusEl.textContent = `paint applied: ${touched} elements.`;
    }
  }

  xfRuntime?.rebuildNow?.();
  return { ok: true };
}

export function applyEffectsToSubtree({ mountEl, state, xfRuntime } = {}) {
  if (!state?.__effects?.ui?.autoRun) return;
  runEffectsFromUI({ mountEl, state, xfRuntime });
}
