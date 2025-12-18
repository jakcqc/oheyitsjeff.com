// visual_registry.js
// A tiny framework for:
// - registering visuals in a record
// - describing editable params (with optional min/max/step + cssClass)
// - auto-building a UI to edit them

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
  return state;
}

/** Mount auto-UI for a spec. Returns { state, rerenderUI }. */
export function mountAutoUI({
  container,
  spec,
  state,
  onChange,
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
    //transforms: buildTransformPanel,
    // animation: buildAnimationPanel,
    // export: buildExportPanel,
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
}){
  const spec = VISUALS[visualId];
  if (!spec) throw new Error(`Unknown visualId "${visualId}"`);

  const state = providedState || makeDefaultState(spec);

  // Create instance
  let instance = spec.create({ mountEl }, state);

  // Auto UI
  mountAutoUI({
    container: uiEl,
    spec,
    state,
    onChange: () => {
      // if the visual exposes render, call it; otherwise no-op
      if (instance && typeof instance.render === "function") instance.render();
    },
  });
  document.getElementById("button-info").onclick = () => {
  document.getElementById("config").classList.toggle("open");
};

  makeSaveSVG(uiEl,mountEl,visualId);
  return {
    spec,
    state,
    instance,
    setVisual(nextId) {
      if (instance && typeof instance.destroy === "function") instance.destroy();
      uiEl.innerHTML = "";
      mountEl.innerHTML = "";
      return runVisualApp({ visualId: nextId, mountEl, uiEl });
    }
  };
}

/* --------------------------- UI building --------------------------- */

function buildControl({ param, state, onChange }) {
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
      box.addEventListener("input", () => sync(parseFloat(box.value)));

      row.appendChild(slider);
      row.appendChild(box);
      input = row;
    } else {
      input = el("input", { type: "number", step: String(param.step ?? 1) });
      input.value = String(value ?? param.default ?? 0);
      input.addEventListener("input", () => {
        setByPath(state, param.key, parseFloat(input.value));
        onChange?.(param.key, getByPath(state, param.key), state);
      });
    }

  } else {
    // text
    input = el("input", { type: "text" });
    input.value = String(value ?? param.default ?? "");
    input.addEventListener("input", () => {
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
function makeSaveSVG(uiEl,mountEl,visualId){
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save SVG";
  saveBtn.type = "button";
  saveBtn.style.marginTop = "5px";
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
function el(tag, props = {}, children = []) {
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

function getByPath(obj, path) {
  const parts = String(path).split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setByPath(obj, path, value) {
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
