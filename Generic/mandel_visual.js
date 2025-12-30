// mandel_visual.js
import { registerVisual } from "../helper/visualHelp.js";
// (x, y, maxIter, state) -> iteration count


registerVisual("mandelTilingZoomable", {
  title: "Mandel Tiling (Zoomable)",
  description: "Adaptive tiled Mandelbrot renderer with animated zoom.",

  params: [
    {
      type: "button",
      key: "resetView",
      label: "Reset View",
      onClick: ({ state, setByPath }) => {
        setByPath(state, "view.centerRe", -0.5);
        setByPath(state, "view.centerIm", 0);
        setByPath(state, "view.spanRe", 2.5);
      }
    },
    {
      key: "fractal",
      type: "select",
      default: "mandelbrot",
      options: [
        "mandelbrot",
        "julia",
        "burningShip",
        "tricorn",
        "multibrot"
      ],
      description: "Which fractal formula to use for iteration."
    },
    {
      key: "maxIterBase",
      type: "number",
      default: 50,
      min: 10,
      max: 5000,
      step: 10,
      description: "Base iteration count; higher values reveal more detail but cost performance."
    },
    {
      key: "minCellPx",
      type: "number",
      default: 6,
      min: 1,
      max: 64,
      step: 1,
      description: "Smallest subdivision size in pixels before stopping recursion."
    },
    {
      key: "startCellPx",
      type: "number",
      default: 180,
      min: 32,
      max: 800,
      step: 10,
      description: "Initial tiling cell size used for adaptive subdivision."
    },
    {
      key: "showBoundaryPixels",
      type: "boolean",
      default: true,
      description: "Render boundary cells at minimum resolution for detail near edges."
    },

    {
      key: "shapeType",
      type: "select",
      default: "circle",
      options: ["square", "circle", "ngon"],
      description: "Geometric primitive used to render each fractal cell."
    },

    {
      key: "nSides",
      type: "number",
      default: 6,
      min: 3,
      max: 12,
      step: 1,
      description: "Number of sides for ngon rendering mode."
    },
    {
      key: "maxCircles",
      type: "number",
      default: 40000,
      min: 100,
      max: 200000,
      step: 200,
      description: "Maximum number of shapes rendered per frame."
    },

    {
      key: "view.centerRe",
      type: "number",
      default: -0.5,
      min: -3,
      max: 3,
      step: 0.001,
      description: "Real component of the viewport center."
    },
    {
      key: "view.centerIm",
      type: "number",
      default: 0.0,
      min: -3,
      max: 3,
      step: 0.001,
      description: "Imaginary component of the viewport center."
    },
    {
      key: "view.spanRe",
      type: "number",
      default: 2.5,
      min: 0.00001,
      max: 6,
      step: 0.001,
      description: "Width of the complex-plane view in the real axis."
    },

    {
      key: "julia.Re",
      type: "number",
      default: -0.8,
      min: -1.5,
      max: 1.5,
      step: 0.001,
      description: "Real component of constant c used in the Julia set."
    },
    {
      key: "julia.Im",
      type: "number",
      default: 0.156,
      min: -1.5,
      max: 1.5,
      step: 0.001,
      description: "Imaginary component of constant c used in the Julia set."
    },

    {
      key: "multibrot.Power",
      type: "number",
      default: 3,
      min: 2,
      max: 8,
      step: 0.25,
      description: "Exponent used in the Multibrot iteration (power > 2)."
    },
  ],


  create({ mountEl }, state) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const escapeR = 2;

    const svg = d3.select(mountEl)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background", "white");

    const g = svg.append("g");
    const color = d3.scaleSequential(d3.interpolateTurbo);
    const FRACTAL_ITERS = Object.create(null);
    FRACTAL_ITERS.mandelbrot = function (cr, ci, maxIter, state) {
      let zr = 0, zi = 0;
      for (let i = 0; i < maxIter; i++) {
        const zr2 = zr * zr - zi * zi + cr;
        zi = 2 * zr * zi + ci;
        zr = zr2;
        if (zr * zr + zi * zi > 4) return i;
      }
      return maxIter;
    };
     function mandelbrotIter(cr, ci, maxIter) {
      let zr = 0, zi = 0;
      const esc2 = escapeR * escapeR;
      for (let i = 0; i < maxIter; i++) {
        const zr2 = zr * zr - zi * zi + cr;
        zi = 2 * zr * zi + ci;
        zr = zr2;
        if (zr * zr + zi * zi > esc2) return i;
      }
      return maxIter;
    }
  FRACTAL_ITERS.julia = function (zr, zi, maxIter, state) {
    const cr = state.julia.Re;
    const ci = state.julia.Im;

    for (let i = 0; i < maxIter; i++) {
      const zr2 = zr * zr - zi * zi + cr;
      zi = 2 * zr * zi + ci;
      zr = zr2;
      if (zr * zr + zi * zi > 4) return i;
    }
    return maxIter;
  };
  FRACTAL_ITERS.burningShip = function (cr, ci, maxIter, state) {
    let zr = 0, zi = 0;
    for (let i = 0; i < maxIter; i++) {
      const azr = Math.abs(zr);
      const azi = Math.abs(zi);
      const zr2 = azr * azr - azi * azi + cr;
      zi = 2 * azr * azi + ci;
      zr = zr2;
      if (zr * zr + zi * zi > 4) return i;
    }
    return maxIter;
  };
  FRACTAL_ITERS.tricorn = function (cr, ci, maxIter, state) {
    let zr = 0, zi = 0;
    for (let i = 0; i < maxIter; i++) {
      const zr2 = zr * zr - zi * zi + cr;
      zi = -2 * zr * zi + ci;
      zr = zr2;
      if (zr * zr + zi * zi > 4) return i;
    }
    return maxIter;
  };
  FRACTAL_ITERS.multibrot = function (cr, ci, maxIter, state) {
    let zr = 0, zi = 0;
    const p = state.multibrot.Power || 3;

    for (let i = 0; i < maxIter; i++) {
      let r = Math.hypot(zr, zi);
      let a = Math.atan2(zi, zr);
      r = Math.pow(r, p);
      a *= p;

      zr = r * Math.cos(a) + cr;
      zi = r * Math.sin(a) + ci;

      if (zr * zr + zi * zi > 4) return i;
    }
    return maxIter;
  };
  let activeIter = FRACTAL_ITERS[state.fractal];

  // function setFractal(name) {
  //   activeIter = FRACTAL_ITERS[name] || FRACTAL_ITERS.mandelbrot;
  // }
    function boundsFromView() {
      const { centerRe, centerIm, spanRe } = state.view;
      const reMin = centerRe - spanRe / 2;
      const reMax = centerRe + spanRe / 2;
      const imSpan = spanRe * (height / width);
      return {
        reMin,
        reMax,
        imMin: centerIm - imSpan / 2,
        imMax: centerIm + imSpan / 2
      };
    }

    function pxToComplex(x, y) {
      const { reMin, reMax, imMin, imMax } = boundsFromView();
      return [
        reMin + (x / width) * (reMax - reMin),
        imMax - (y / height) * (imMax - imMin)
      ];
    }

   

    function classifyCell(x, y, s, maxIter) {
      const pts = [
        [x, y], [x + s, y], [x, y + s],
        [x + s, y + s], [x + s / 2, y + s / 2]
      ];

      let inside = 0, maxEsc = 0;
      for (const [px, py] of pts) {
        const [cr, ci] = pxToComplex(px, py);
        //const it = mandelbrotIter(cr, ci, maxIter);
        const it = activeIter(cr, ci, maxIter, state);
        if (it === maxIter) inside++;
        maxEsc = Math.max(maxEsc, it);
      }

      if (inside === pts.length) return { kind: "in", it: maxIter };
      if (inside === 0) return { kind: "out", it: maxEsc };
      return { kind: "mixed", it: maxEsc };
    }

    function drawShape(x, y, s, stroke) {
      const cx = x + s / 2, cy = y + s / 2;

      if (state.shapeType === "square") {
        g.append("rect")
          .attr("x", x).attr("y", y)
          .attr("width", s).attr("height", s)
          .attr("fill", "none")
          .attr("stroke", stroke);
        return;
      }

      if (state.shapeType === "circle") {
        g.append("circle")
          .attr("cx", cx).attr("cy", cy)
          .attr("r", s * 0.5)
          .attr("fill", "none")
          .attr("stroke", stroke);
        return;
      }

      const r = s * 0.5;
      const pts = d3.range(state.nSides).map(k => {
        const a = (2 * Math.PI * k) / state.nSides - Math.PI / 2;
        return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
      });

      g.append("path")
        .attr("d", d3.line().curve(d3.curveLinearClosed)(pts))
        .attr("fill", "none")
        .attr("stroke", stroke);
    }

    function render({ fast = false } = {}) {
      g.selectAll("*").remove();
    activeIter = FRACTAL_ITERS[state.fractal];

      const zoomLevel = 2.5 / state.view.spanRe;
      const maxIter = Math.round(
        state.maxIterBase + 40 * Math.log10(Math.max(1, zoomLevel))
      );

      color.domain([0, maxIter]);

      const start = fast ? Math.max(250, state.startCellPx) : state.startCellPx;
      const stack = [];
      for (let y = 0; y < height; y += start)
        for (let x = 0; x < width; x += start)
          stack.push({ x, y, s: start });

      let shapes = 0;
      const maxShapes = fast ? 180 : state.maxCircles;

      while (stack.length && shapes < maxShapes) {
        const { x, y, s } = stack.pop();
        const cls = classifyCell(x, y, s, maxIter);

        if (cls.kind === "in") {
          drawShape(x, y, s, "black");
          shapes++;
        } else if (cls.kind === "mixed" && s > state.minCellPx) {
          const h = s / 2;
          stack.push({ x, y, s: h }, { x: x + h, y, s: h },
                     { x, y: y + h, s: h }, { x: x + h, y: y + h, s: h });
        } else if (state.showBoundaryPixels && s <= state.minCellPx) {
          drawShape(x, y, s, color(cls.it));
          shapes++;
        }
      }
    }

    function animateZoomTo(cr, ci, factor, ms = 700) {
      const start = { ...state.view };
      const endSpan = start.spanRe / factor;
      const t0 = performance.now();

      function frame(now) {
        const u = Math.min(1, (now - t0) / ms);
        const e = d3.easeCubicInOut(u);

        state.view.centerRe = start.centerRe + (cr - start.centerRe) * e;
        state.view.centerIm = start.centerIm + (ci - start.centerIm) * e;
        state.view.spanRe   = start.spanRe * Math.pow(endSpan / start.spanRe, e);

        render({ fast: u < 1 });
        if (u < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    svg.on("click", (event) => {
      const [mx, my] = d3.pointer(event);
      const [cr, ci] = pxToComplex(mx, my);
      animateZoomTo(cr, ci, event.shiftKey ? 0.5 : 2);
    });

    svg.on("wheel", (event) => {
      event.preventDefault();
      const [mx, my] = d3.pointer(event);
      const [cr, ci] = pxToComplex(mx, my);
      animateZoomTo(cr, ci, event.deltaY < 0 ? 1.6 : 1 / 1.6, 450);
    }, { passive: false });

    render();

    return { render, destroy: () => svg.remove() };
  }
});
