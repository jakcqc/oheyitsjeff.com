// visual_registry.js
// A tiny framework for:
// - registering visuals in a record
// - describing editable params (with optional min/max/step + cssClass)
// - auto-building a UI to edit them
import { ensureTransformState,initTransformRuntime,buildTransformPanel} from "../helper/transformHelp.js";
import { registerTransformTab } from "../helper/transformHelp.js";
import { applyPropOpsToSubtree } from "../helper/svgEditor.js";
import { registerPropOpsTab } from "../helper/svgEditor.js";
import { registerAnimateTab, maybeAutoplayAnimation } from "../helper/animationHelp.js";
import { registerLLMTab } from "../helper/llmTab.js";

const TAB_BUILDERS = new Map();

/**
 * Register a tab builder that will appear alongside the built-in "params" tab.
 * @param {string} tabName
 * @param {(ctx: { mountEl: HTMLElement, spec: any, state: any, xfRuntime: any, onChange?: Function }) => HTMLElement} build
 */
export function registerTab(tabName, build) {
  if (!tabName) throw new Error("registerTab: tabName is required");
  if (typeof build !== "function") throw new Error("registerTab: build must be a function");
  if (TAB_BUILDERS.has(tabName)) throw new Error(`registerTab: duplicate tab "${tabName}"`);
  TAB_BUILDERS.set(tabName, build);
}

function buildRegisteredTabs(ctx) {
  /** @type {Record<string, () => HTMLElement>} */
  const extraTabs = {};
  for (const [tabName, build] of TAB_BUILDERS.entries()) {
    extraTabs[tabName] = () => build(ctx);
  }
  return extraTabs;
}

registerTransformTab();
registerPropOpsTab();
registerAnimateTab();
registerLLMTab();

export function exportStateToJSON(state) {
  return JSON.stringify(state, null, 2);
}
export function getVisualParamsTree(spec, state) {
  const out = {};

  for (const p of spec.params || []) {
    setByPath(out, p.key, getByPath(state, p.key));
  }

  return out;
}

export function importStateFromJSON(json, state) {
  const parsed = JSON.parse(json);
  mergeInto(state, parsed);
}

function mergeInto(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      if (
        !target[key] ||
        typeof target[key] !== "object" ||
        Array.isArray(target[key])
      ) {
        target[key] = {};
      }
      mergeInto(target[key], value);
    } else {
      // primitives + arrays replace directly
      target[key] = value;
    }
  }
}

export function makeSaveSettingsButton(state, visualId) {
  const btn = document.createElement("button");
  btn.textContent = "Save Settings";
  btn.type = "button";
  btn.classList.add("btn-inline");

  btn.onclick = () => {
    const blob = new Blob(
      [exportStateToJSON(state)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${visualId}.settings.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return btn;
}
export function makeLoadSettingsButton(state, onChange) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";
  input.style.display = "none";

  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;

    const text = await file.text();
    importStateFromJSON(text, state);
    onChange?.(); // force rerender + UI sync
  };

  const btn = document.createElement("button");
  btn.textContent = "Load Settings";
  btn.type = "button";
  btn.classList.add("btn-inline");

  btn.onclick = () => input.click();
  
  return el("", {}, [btn, input]);
}

export function mountUserTabs({
  container,
  spec,
  state,
  onChange,
  buildParamsPanel,   // () => HTMLElement
  extraTabs = {},     // { tabName: () => HTMLElement }
}) {
  const tabs = ["params", ...Object.keys(extraTabs)];
  let activeTab = "params";

  const tabBar = el("div", { className: "vr-tabs" });
  const body = el("div", { className: "vr-tabBody" });

  const render = () => {
    tabBar.innerHTML = "";
    body.innerHTML = "";

    for (const name of tabs) {
      const btn = el("button", {
        className: `vr-tab ${name === activeTab ? "active" : ""}`,
        textContent: name,
      });
      btn.onclick = () => {
        activeTab = name;
        render();
      };
      tabBar.appendChild(btn);
    }

    if (activeTab === "params") {
      body.appendChild(buildParamsPanel());
    } else {
      body.appendChild(extraTabs[activeTab]());
    }
  };

  container.appendChild(tabBar);
  container.appendChild(body);
  render();
}

/** Mount auto-UI for a spec. Returns { state, rerenderUI }. */
export function mountAutoUI({
  container,
  spec,
  state,
  onChange,
  mountEl,
  xfRuntime,
}) {
  container.innerHTML = "";

  const header = el("div", { className: "vr-header" }, [
    el("div", { className: "vr-title", textContent: spec.title }),
    el("div", { className: "vr-desc", textContent: spec.description }),
  ]);
  container.appendChild(header);

  const form = el("div", { className: "vr-form" });
  container.appendChild(form);

  mountUserTabs({
    container,
    spec,
    state,
    onChange,
    buildParamsPanel: () => buildParamsPanel({ spec, state, onChange }),
    extraTabs: buildRegisteredTabs({ mountEl, spec, state, xfRuntime, onChange }),
  });

  return {
    state,
    rerenderUI: () => mountAutoUI({ container, spec, state, onChange, mountEl, xfRuntime }),
  };
}

function buildParamsPanel({ spec, state, onChange }) {
  const panel = document.createElement("div");
  for (const param of spec.params || []) {
    panel.appendChild(buildControl({ param, state, onChange }));
  }
  return panel;
}

/**
 * @typedef {"number"|"boolean"|"select"|"text"|"vector2D"|"vector3D"|"button"} ParamType
 */

/**
 * @typedef {Object} ParamSpec
 * @property {string} key                  - Param key (supports dot paths like "view.centerRe")
 * @property {string} [label]              - UI label (defaults to key)
 * @property {ParamType} type
 * @property {any} default
 * @property {string} [description]        - Small helper text under control
 * @property {string} [cssClass]           - Optional CSS class added to wrapper + input
 * @property {number} [min]                - Optional range constraints (number)
 * @property {number} [max]
 * @property {number} [step]
 * @property {string[]} [options]          - For type="select"
 */

/**
 * @typedef {Object} VisualSpec
 * @property {string} title
 * @property {string} description
 * @property {ParamSpec[]} params
 * @property {(ctx: { mountEl: HTMLElement }, state: any) => VisualInstance} create
 * @property {any} [data]                  - Whatever “data object” you want to store alongside params
 */

/**
 * @typedef {Object} VisualInstance
 * @property {() => void} [destroy]
 * @property {() => void} [render]         - Called after param changes (if provided)
 */

export const VISUALS = /** @type {Record<string, VisualSpec>} */ ({});

export function exportVisualUIJsonSpec(visualId) {
  const spec = VISUALS[visualId];
  if (!spec) throw new Error(`exportVisualUIJsonSpec: unknown visualId "${visualId}"`);

  return {
    visualId,
    title: spec.title,
    description: spec.description,
    params: (spec.params || []).map((p) => ({
      key: p.key,
      label: p.label ?? null,
      type: p.type,
      default: p.default,
      description: p.description ?? null,
      cssClass: p.cssClass ?? null,
      min: typeof p.min === "number" ? p.min : null,
      max: typeof p.max === "number" ? p.max : null,
      step: typeof p.step === "number" ? p.step : null,
      options: Array.isArray(p.options) ? p.options : null,
    })),
  };
}

export function downloadVisualUIJson(visualId) {
  const specJson = exportVisualUIJsonSpec(visualId);
  const blob = new Blob([JSON.stringify(specJson, null, 2) + "\n"], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${visualId}.ui.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Register a visual into the record.
 * @param {string} id
 * @param {VisualSpec} spec
 * @param {{ exportUIJson?: false | "download" }} [options]
 */
export function registerVisual(id, spec, options) {
  if (!id) throw new Error("registerVisual: id is required");
  if (VISUALS[id]) throw new Error(`registerVisual: duplicate id "${id}"`);
  VISUALS[id] = spec;
  console.table(spec.params);
  if (options?.exportUIJson === "download") {
    try {
      downloadVisualUIJson(id);
    } catch (err) {
      console.warn(`registerVisual: failed to download UI json for "${id}"`, err);
    }
  }
}

/** Create a fresh state object from a spec’s defaults. */
export function makeDefaultState(spec) {
  const state = {};
  for (const p of spec.params || []) setByPath(state, p.key, clone(p.default));
  // attach arbitrary spec.data under a stable place if you want:
  if (spec.data !== undefined) state.__data = spec.data;
    // --- transforms state (UI + stack) ---
  state.__xf = {
    ui: {
      splitCount: 1,     // 2 => side-by-side, 4 => 2x2 grid, etc
      activeTile: "0",   // select stores strings
      rotateDeg: 90,
    },
    stack: [],           // [{ kind, ...payload }]
  };

  return state;
}
/* --------------------------- UI building --------------------------- */
export function mountVisualUI({
  uiEl,
  spec,
  state,
  mountEl,
  xfRuntime,
  instance,
  visualId,
}) {
  uiEl.innerHTML = "";

  const autoUiEl = el("div", { className: "vr-autoUI" });
  const ioEl = el("div", { className: "vr-settingsIO" });

  uiEl.append(autoUiEl, ioEl);

  const rerender = () => {
  instance?.render?.();
  xfRuntime?.rebuildNow?.();
  const svg = mountEl.firstElementChild;
  if (svg) {
    applyPropOpsToSubtree(svg, state.__propOps?.stack);
  }
};


  const rebuildAutoUI = () => {
    mountAutoUI({
      container: autoUiEl,
      spec,
      state,
      mountEl,
      xfRuntime,
      onChange: rerender,
    });
  };

  // initial mount
  rebuildAutoUI();

  // persistent controls
  ioEl.append(
    makeSaveSettingsButton(state, visualId),
    makeLoadSettingsButton(state, () => {
      rerender();
      rebuildAutoUI();
    })
  );

makeSaveSVG(ioEl, mountEl, visualId);
makeLoadSVG(ioEl, mountEl, (svgEl, rawText) => {
  // Optional: keep your SVG textarea/editor in sync
  // svgTa.value = rawText;
  // runUserCode();
});

  // If a visual sets `state.__anim.ui.autoPlay = true`, start playing immediately (even if tab never opened).
  maybeAutoplayAnimation({ mountEl, state, onChange: rerender });
  return { rebuildAutoUI };
}

/** Run a visual by id; wires UI->state->render(). */
export function runVisualApp({
  visualId,
  mountEl,
  uiEl,
  state: providedState,
}) {
  const spec = VISUALS[visualId];
  if (!spec) throw new Error(`Unknown visualId "${visualId}"`);

  //const state = providedState || makeDefaultState(spec);
const state = makeDefaultState(spec);
if (providedState && typeof providedState === "object") {
  mergeInto(state, providedState);
}

  let instance = spec.create({ mountEl }, state);

  ensureTransformState(state);
  const xfRuntime = initTransformRuntime({ mountEl, state });

  mountVisualUI({
    uiEl,
    spec,
    state,
    mountEl,
    xfRuntime,
    instance,
    visualId,
  });

  document.getElementById("button-info").onclick = () => {
    document.getElementById("config").classList.toggle("open");
  };

  return {
    spec,
    state,
    instance,
    getParamsJSON: () => getVisualParamsTree(spec, state),
    setVisual(nextId) {
      instance?.destroy?.();
      uiEl.innerHTML = "";
      mountEl.innerHTML = "";
      return runVisualApp({ visualId: nextId, mountEl, uiEl });
    },
  };
}

export function buildControl({ param, state, onChange }) {
  const labelText = param.label ?? param.key;
  const wrap = el("div", { className: ["vr-row", param.cssClass].filter(Boolean).join(" ") });
  wrap.appendChild(el("label", { className: "vr-label", textContent: labelText }));

  if (param.description) {
    wrap.appendChild(el("div", { className: "vr-help", textContent: param.description }));
  }

  const value = getByPath(state, param.key);
  const builder = CONTROL_BUILDERS[param.type] || buildTextControl;
  const input = builder({ param, state, value, onChange });

  if (param.cssClass && input instanceof HTMLElement) input.classList.add(param.cssClass);

  const inputWrap = el("div", { className: "vr-input" });
  inputWrap.appendChild(input);
  wrap.appendChild(inputWrap);

  return wrap;
}

const CONTROL_BUILDERS = {
  boolean: buildBooleanControl,
  select: buildSelectControl,
  button: buildButtonControl,
  number: buildNumberControl,
  vector2D: (ctx) => buildVectorControl({ ...ctx, dims: 2 }),
  vector3D: (ctx) => buildVectorControl({ ...ctx, dims: 3 }),
  text: buildTextControl,
};

function buildBooleanControl({ param, state, onChange, value }) {
  const input = el("input", { type: "checkbox" });
  input.checked = !!value;
  input.addEventListener("change", () => {
    setByPath(state, param.key, !!input.checked);
    onChange?.(param.key, getByPath(state, param.key), state);
  });
  return input;
}

function buildSelectControl({ param, state, onChange, value }) {
  const input = el("select");
  for (const opt of param.options || []) {
    input.appendChild(el("option", { value: opt, textContent: opt }));
  }
  input.value = value ?? (param.options?.[0] ?? "");
  input.addEventListener("change", () => {
    setByPath(state, param.key, input.value);
    onChange?.(param.key, getByPath(state, param.key), state);
  });
  return input;
}

function buildButtonControl({ param, state, onChange }) {
  const input = el("button", {
    type: "button",
    textContent: param.label ?? param.key,
  });
  if (param.class) input.className = param.class;

  input.addEventListener("click", () => {
    param.onClick?.({ key: param.key, state, setByPath, getByPath });
    onChange?.(param.key, undefined, state);
  });
  return input;
}

function buildNumberControl({ param, state, onChange, value }) {
  const hasRange = isFiniteNumber(param.min) && isFiniteNumber(param.max);
  const startingValue = value ?? param.default ?? 0;

  if (!hasRange) {
    const input = el("input", { type: "number", step: String(param.step ?? 1) });
    input.value = String(startingValue);
    const commit = () => {
      setByPath(state, param.key, toNumber(input.value));
      onChange?.(param.key, getByPath(state, param.key), state);
    };
    input.addEventListener("change", commit);
    input.addEventListener("blur", commit);
    return input;
  }

  const row = el("div", { className: "vr-rangeRow" });
  const slider = el("input", {
    type: "range",
    min: String(param.min),
    max: String(param.max),
    step: String(param.step ?? 1),
    value: String(startingValue),
  });
  const box = el("input", {
    type: "number",
    min: String(param.min),
    max: String(param.max),
    step: String(param.step ?? 1),
    value: String(startingValue),
  });

  const sync = (next) => {
    const val = next;
    setByPath(state, param.key, val);
    slider.value = String(val);
    box.value = String(val);
    onChange?.(param.key, val, state);
  };

  slider.addEventListener("input", () => sync(slider.value));
  box.addEventListener("change", () => sync(box.value));
  box.addEventListener("blur", () => sync(box.value));

  row.appendChild(slider);
  row.appendChild(box);
  return row;
}

function buildVectorControl({ param, state, onChange, value, dims }) {
  const def = param.default ?? (dims === 3 ? { x: 0, y: 0, z: 0 } : { x: 0, y: 0 });
  let vec = normalizeVector(value ?? def, def, dims);
  const row = el("div", { className: "vr-rangeRow" });

  const axes = dims === 3 ? ["x", "y", "z"] : ["x", "y"];
  for (const axis of axes) {
    const box = el("input", {
      type: "number",
      step: String(param.step ?? 1),
      value: String(vec[axis] ?? 0),
    });

    const sync = () => {
      const nextVal = clampNumber(
        toNumber(box.value),
        typeof param.min === "number" ? param.min : -Infinity,
        typeof param.max === "number" ? param.max : Infinity
      );
      vec = { ...vec, [axis]: nextVal };
      setByPath(state, param.key, vec);
      onChange?.(param.key, vec, state);
    };

    box.addEventListener("change", sync);
    box.addEventListener("blur", sync);

    const wrap = el("div", { className: "vr-vecField" });
    wrap.appendChild(el("div", { className: "vr-vecLabel", textContent: axis }));
    wrap.appendChild(box);
    row.appendChild(wrap);
  }

  return row;
}

function buildTextControl({ param, state, onChange, value }) {
  const input = el("input", { type: "text" });
  input.value = String(value ?? param.default ?? "");
  const commit = () => {
    setByPath(state, param.key, input.value);
    onChange?.(param.key, getByPath(state, param.key), state);
  };
  input.addEventListener("change", commit);
  input.addEventListener("blur", commit);
  return input;
}
export function makeSaveSVG(uiEl,mountEl,visualId){
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save SVG";
  saveBtn.type = "button";
  saveBtn.style.marginTop = "5px";
  saveBtn.classList.add("btn-inline");

  saveBtn.onclick = () => {
    const svg = mountEl.firstElementChild;
    if (!(svg instanceof SVGSVGElement)) return;

    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svg);

    if (!source.includes('xmlns="http://www.w3.org/2000/svg"')) {
      source = source.replace(
        "<svg",
        '<svg xmlns="http://www.w3.org/2000/svg"'
      );
    }

    const blob = new Blob(
      [`<?xml version="1.0" encoding="UTF-8"?>\n${source}`],
      { type: "image/svg+xml;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${visualId}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };
  uiEl.appendChild(saveBtn);
}
export function makeLoadSVG(uiEl, mountEl, onLoaded) {
  // onLoaded(svgEl, rawText) is optional; lets you sync editor textareas, etc.

  const loadBtn = document.createElement("button");
  loadBtn.textContent = "Load SVG";
  loadBtn.type = "button";
  loadBtn.style.marginTop = "5px";
  loadBtn.classList.add("btn-inline");

  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".svg,image/svg+xml";
  input.style.display = "none";

  function replaceMountWithSvg(svgEl) {
    mountEl.innerHTML = "";
    mountEl.appendChild(svgEl);
  }

  loadBtn.onclick = () => input.click();

  input.onchange = async () => {
    const file = input.files?.[0];
    input.value = ""; // allow picking same file again
    if (!file) return;

    try {
      const text = await file.text();

      // Parse SVG safely-ish
      const doc = new DOMParser().parseFromString(text, "image/svg+xml");
      const parseErr = doc.querySelector("parsererror");
      if (parseErr) {
        throw new Error("SVG parse error: " + parseErr.textContent);
      }

      const svg = doc.documentElement;
      if (!svg || svg.tagName.toLowerCase() !== "svg") {
        throw new Error("Selected file does not contain a single <svg> root.");
      }

      // Ensure xmlns
      if (!svg.getAttribute("xmlns")) {
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      }

      // Import into current document before mounting
      const imported = document.importNode(svg, true);

      replaceMountWithSvg(imported);

      if (typeof onLoaded === "function") onLoaded(imported, text);
    } catch (e) {
      console.error(e);
      alert(String(e?.message || e));
    }
  };

  uiEl.appendChild(loadBtn);
  uiEl.appendChild(input);

  return { loadBtn, input };
}
// export function el(tag, props = {}, children = []) {
//   const node = document.createElement(tag);
//   for (const [k, v] of Object.entries(props)) {
//     if (k === "className") node.className = v;
//     else if (k === "textContent") node.textContent = v;
//     else node.setAttribute(k, String(v));
//   }
//   for (const c of children) node.appendChild(c);
//   return node;
// }
// export function el(tag, props = {}, children = []) {
//   // no tag → just return children
//   if (!tag) {
//     const frag = document.createDocumentFragment();
//     for (const c of children) frag.appendChild(c);
//     return frag;
//   }

//   const node = document.createElement(tag);

//   for (const [k, v] of Object.entries(props)) {
//     if (k === "className") node.className = v;
//     else if (k === "textContent") node.textContent = v;
//     else node.setAttribute(k, String(v));
//   }

//   for (const c of children) node.appendChild(c);
//   return node;
// }
export function el(tag, props = {}, children = []) {
  // fragment support
  if (!tag) {
    const frag = document.createDocumentFragment();
    [].concat(children).forEach(c => c && frag.appendChild(c));
    return frag;
  }

  const node = document.createElement(tag);

  for (const [k, v] of Object.entries(props)) {
    if (v == null) continue;

    // class / text
    if (k === "className") {
      node.className = v;
    } else if (k === "textContent") {
      node.textContent = v;

    // style object or string
    } else if (k === "style") {
      if (typeof v === "object") Object.assign(node.style, v);
      else node.style.cssText = v;

    // event handlers: onclick, oninput, etc
    } else if (k.startsWith("on") && typeof v === "function") {
      node.addEventListener(k.slice(2).toLowerCase(), v);

    // boolean props
    } else if (typeof v === "boolean") {
      if (v) node.setAttribute(k, "");
      else node.removeAttribute(k);

    // dataset shorthand
    } else if (k === "dataset" && typeof v === "object") {
      Object.assign(node.dataset, v);

    // everything else
    } else {
      node.setAttribute(k, String(v));
    }
  }

  // normalize children
  [].concat(children).forEach(c => {
    if (c == null) return;
    node.appendChild(
      typeof c === "string" ? document.createTextNode(c) : c
    );
  });

  return node;
}

/* --------------------------- path helpers --------------------------- */

export function getByPath(obj, path) {
  const parts = String(path).split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

export function setByPath(obj, path, value) {
  const parts = String(path).split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] == null || typeof cur[p] !== "object") cur[p] = {};
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

function clone(v) {
  // good enough for numbers/strings/booleans/plain objects you’ll use for params
  if (v == null || typeof v !== "object") return v;
  return JSON.parse(JSON.stringify(v));
}

function isFiniteNumber(x) {
  return typeof x === "number" && Number.isFinite(x);
}
