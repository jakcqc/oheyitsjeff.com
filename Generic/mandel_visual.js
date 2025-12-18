// mandel_visual.js
import { registerVisual } from "../helper/visualHelp.js";

registerVisual("mandelTilingZoomable", {
  title: "Mandel Tiling (Zoomable)",
  description: "Adaptive tiled Mandelbrot renderer with animated zoom.",

  params: [
    { key: "maxIterBase", type: "number", default: 200, min: 50, max: 2000, step: 10 },
    { key: "minCellPx",   type: "number", default: 8,   min: 1,  max: 64, step: 1 },
    { key: "startCellPx", type: "number", default: 200, min: 50, max: 600, step: 10 },
    { key: "showBoundaryPixels", type: "boolean", default: true },

    { key: "shapeType", type: "select", default: "circle",
      options: ["square", "circle", "ngon"] },

    { key: "nSides", type: "number", default: 6, min: 3, max: 12, step: 1 },
    { key: "maxCircles", type: "number", default: 2000, min: 20, max: 100000, step: 100 },

    { key: "view.centerRe", type: "number", default: -0.5, step: 0.001 },
    { key: "view.centerIm", type: "number", default: 0.0,  step: 0.001 },
    { key: "view.spanRe",   type: "number", default: 2.5,  step: 0.001 },
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

    function classifyCell(x, y, s, maxIter) {
      const pts = [
        [x, y], [x + s, y], [x, y + s],
        [x + s, y + s], [x + s / 2, y + s / 2]
      ];

      let inside = 0, maxEsc = 0;
      for (const [px, py] of pts) {
        const [cr, ci] = pxToComplex(px, py);
        const it = mandelbrotIter(cr, ci, maxIter);
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
