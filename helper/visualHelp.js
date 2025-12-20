// visual_registry.js
// A tiny framework for:
// - registering visuals in a record
// - describing editable params (with optional min/max/step + cssClass)
// - auto-building a UI to edit them
import { ensureTransformState,initTransformRuntime,buildTransformPanel} from "../helper/transformHelp.js";
import {buildPropOpsPanel,applyPropOpsToSubtree} from "../helper/svgEditor.js"
export function exportStateToJSON(state) {
  return JSON.stringify(state, null, 2);
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
function isUserTyping() {
  const el = document.activeElement;
  return el && (
    el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA" ||
    el.tagName === "SELECT"
  );
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

/**
 * @typedef {"number"|"boolean"|"select"|"text"} ParamType
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

/** Register a visual into the record. */
export function registerVisual(id, spec) {
  if (!id) throw new Error("registerVisual: id is required");
  if (VISUALS[id]) throw new Error(`registerVisual: duplicate id "${id}"`);
  VISUALS[id] = spec;
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

/** Mount auto-UI for a spec. Returns { state, rerenderUI }. */
export function mountAutoUI({
  container,
  spec,
  state,
  onChange,
  mountEl,
  xfRuntime
}){
  container.innerHTML = "";

  const header = el("div", { className: "vr-header" }, [
    el("div", { className: "vr-title", textContent: spec.title }),
    el("div", { className: "vr-desc", textContent: spec.description }),
  ]);
  container.appendChild(header);

  const form = el("div", { className: "vr-form" });
  container.appendChild(form);

  // for (const p of spec.params || []) {
  //   form.appendChild(buildControl({ param: p, state, onChange }));
  // }
const paramsPanel = () => {
  const el = document.createElement("div");
  for (const p of spec.params || []) {
    el.appendChild(buildControl({ param: p, state, onChange }));
  }
  return el;
};

  mountUserTabs({
    container,
    spec,
    state,
    onChange,
    buildParamsPanel: paramsPanel,
    extraTabs: {
      transforms: () => buildTransformPanel({ mountEl, state, xfRuntime }),
     propOps: () =>
      buildPropOpsPanel({
        mountEl,
        state,
        xfRuntime
            }),

    },

  });

  return { state, rerenderUI: () => mountAutoUI({ container, spec, state, onChange }) };
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

  const state = providedState || makeDefaultState(spec);

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
    setVisual(nextId) {
      instance?.destroy?.();
      uiEl.innerHTML = "";
      mountEl.innerHTML = "";
      return runVisualApp({ visualId: nextId, mountEl, uiEl });
    },
  };
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

  return { rebuildAutoUI };
}

export function buildControl({ param, state, onChange }) {
  const labelText = param.label ?? param.key;

  const wrap = el("div", { className: ["vr-row", param.cssClass].filter(Boolean).join(" ") });
  const label = el("label", { className: "vr-label", textContent: labelText });
  wrap.appendChild(label);

  const value = getByPath(state, param.key);

  let input;
  if (param.description) {
    wrap.appendChild(el("div", { className: "vr-help", textContent: param.description }));
  }
  if (param.type === "boolean") {
    input = el("input", { type: "checkbox" });
    input.checked = !!value;
    input.addEventListener("change", () => {
      setByPath(state, param.key, !!input.checked);
      onChange?.(param.key, getByPath(state, param.key), state);
    });

  } else if (param.type === "select") {
    input = el("select");
    for (const opt of (param.options || [])) {
      input.appendChild(el("option", { value: opt, textContent: opt }));
    }
    input.value = value ?? (param.options?.[0] ?? "");
    input.addEventListener("change", () => {
      setByPath(state, param.key, input.value);
      onChange?.(param.key, getByPath(state, param.key), state);
    });

  } else if (param.type === "number") {
    // If min/max exist, make a slider + numeric box.
    const hasRange = isFiniteNumber(param.min) && isFiniteNumber(param.max);
    if (hasRange) {
      const row = el("div", { className: "vr-rangeRow" });

      const slider = el("input", {
        type: "range",
        min: String(param.min),
        max: String(param.max),
        step: String(param.step ?? 1),
        value: String(value ?? param.default ?? 0),
      });

      const box = el("input", {
        type: "number",
        min: String(param.min),
        max: String(param.max),
        step: String(param.step ?? 1),
        value: String(value ?? param.default ?? 0),
      });

      const sync = (next) => {
        setByPath(state, param.key, next);
        slider.value = String(next);
        box.value = String(next);
        onChange?.(param.key, next, state);
      };

      slider.addEventListener("input", () => sync(parseFloat(slider.value)));
      box.addEventListener("blur", () => sync(parseFloat(box.value)));

      row.appendChild(slider);
      row.appendChild(box);
      input = row;
    } else {
      input = el("input", { type: "number", step: String(param.step ?? 1) });
      input.value = String(value ?? param.default ?? 0);
      input.addEventListener("blur", () => {
        setByPath(state, param.key, parseFloat(input.value));
        onChange?.(param.key, getByPath(state, param.key), state);
      });
    }

  } else {
    // text
    input = el("input", { type: "text" });
    input.value = String(value ?? param.default ?? "");
    input.addEventListener("blur", () => {
      setByPath(state, param.key, input.value);
      onChange?.(param.key, getByPath(state, param.key), state);
    });
  }

  // apply cssClass to the actual input too (if it’s a single element)
  if (param.cssClass && input instanceof HTMLElement) input.classList.add(param.cssClass);

  const inputWrap = el("div", { className: "vr-input" });
  inputWrap.appendChild(input);
  wrap.appendChild(inputWrap);

  

  return wrap;
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
export function el(tag, props = {}, children = []) {
  // no tag → just return children
  if (!tag) {
    const frag = document.createDocumentFragment();
    for (const c of children) frag.appendChild(c);
    return frag;
  }

  const node = document.createElement(tag);

  for (const [k, v] of Object.entries(props)) {
    if (k === "className") node.className = v;
    else if (k === "textContent") node.textContent = v;
    else node.setAttribute(k, String(v));
  }

  for (const c of children) node.appendChild(c);
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
