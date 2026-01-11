// ScriptOps utilities intended to be used from user scripts via `ctx.utils`.

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOut(t) {
  t = clamp(t, 0, 1);
  return t * t * (3 - 2 * t); // smoothstep
}

function parsePoints(pointsStr) {
  const s = String(pointsStr || "").trim();
  if (!s) return [];
  const nums = s
    .replace(/,/g, " ")
    .split(/\s+/)
    .map(Number)
    .filter(n => Number.isFinite(n));
  const pts = [];
  for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
  return pts;
}

function formatPoints(pts) {
  return pts.map(([x, y]) => `${x},${y}`).join(" ");
}

function centroid(pts) {
  if (!pts.length) return [0, 0];
  let sx = 0;
  let sy = 0;
  for (const [x, y] of pts) {
    sx += x;
    sy += y;
  }
  return [sx / pts.length, sy / pts.length];
}

function scaleAbout(pts, cx, cy, s) {
  return pts.map(([x, y]) => [cx + (x - cx) * s, cy + (y - cy) * s]);
}

function copyAttributes(fromEl, toEl, { skip = [] } = {}) {
  const skipSet = new Set(["id", ...skip]);
  for (const { name, value } of Array.from(fromEl.attributes)) {
    if (skipSet.has(name)) continue;
    if (name.startsWith("data-scale-")) continue;
    toEl.setAttribute(name, value);
  }
}

function getScaleAtIndex(i, count, minS, maxS, { spacing = "linear", spacingFn = null } = {}) {
  if (count <= 1) return minS;
  let t = i / (count - 1);
  if (typeof spacingFn === "function") t = clamp(Number(spacingFn(t)), 0, 1);
  else if (spacing === "easeInOut") t = easeInOut(t);
  return lerp(minS, maxS, t);
}

export function scalePolygonsInSubtree(ctx, opts = {}) {
  const {
    root = ctx?.root,
    create = ctx?.create,
    selector = "polygon",
    range = [0.5, 1.5, 10],
    spacing = "linear",
    spacingFn = null,
    opacity = null, // null => auto, false => no opacity change, number|[min,max] => explicit
  } = opts;

  if (!root || root.nodeType !== 1) throw new Error("scalePolygonsInSubtree: missing ctx.root/root");
  if (typeof create !== "function") throw new Error("scalePolygonsInSubtree: missing ctx.create/create(tag)");

  const [minScaleRaw, maxScaleRaw, countRaw] = range;
  const minScale = Number(minScaleRaw);
  const maxScale = Number(maxScaleRaw);
  const count = Math.max(1, Math.trunc(Number(countRaw)));
  if (!Number.isFinite(minScale) || !Number.isFinite(maxScale) || !Number.isFinite(count)) {
    throw new Error(`scalePolygonsInSubtree: invalid range: ${JSON.stringify(range)}`);
  }

  const polys = Array.from(root.querySelectorAll(selector))
    .filter(p => !p.closest('g[data-scale-stack="1"]'))
    .filter(p => !p.hasAttribute("data-scale-clone"));

  for (const poly of polys) {
    if (String(poly.tagName || "").toLowerCase() !== "polygon") {
      throw new Error(`scalePolygonsInSubtree: selector must match <polygon> (got: ${selector})`);
    }

    const pts = parsePoints(poly.getAttribute("points"));
    if (pts.length < 3) continue;
    const [cx, cy] = centroid(pts);

    const g = create("g");
    g.setAttribute("data-scale-stack", "1");

    for (let i = 0; i < count; i++) {
      const s = getScaleAtIndex(i, count, minScale, maxScale, { spacing, spacingFn });
      const nextPts = scaleAbout(pts, cx, cy, s);

      const p = create("polygon");
      p.setAttribute("data-scale-clone", "1");
      p.setAttribute("data-scale-factor", String(s));
      p.setAttribute("points", formatPoints(nextPts));
      copyAttributes(poly, p, { skip: ["points"] });

      const style = p.getAttribute("style") || "";
      const hasOpacityStyle = /(^|;)\s*opacity\s*:/.test(style);
      const hasOpacityAttr = p.hasAttribute("opacity");
      const canSetOpacity = !hasOpacityStyle && !hasOpacityAttr;

      if (opacity === false) {
        // no-op
      } else if (opacity != null && canSetOpacity) {
        const alpha = Array.isArray(opacity)
          ? lerp(Number(opacity[0]), Number(opacity[1]), count <= 1 ? 1 : i / (count - 1))
          : Number(opacity);
        if (Number.isFinite(alpha)) {
          p.setAttribute("style", (style ? style + ";" : "") + `opacity:${clamp(alpha, 0, 1)}`);
        }
      } else if (opacity == null && canSetOpacity) {
        const alpha = lerp(0.25, 1, count <= 1 ? 1 : i / (count - 1));
        p.setAttribute("style", (style ? style + ";" : "") + `opacity:${alpha.toFixed(3)}`);
      }

      g.appendChild(p);
    }

    poly.replaceWith(g);
  }
}

export function scaleCirclesInSubtree(ctx, opts = {}) {
  const {
    root = ctx?.root,
    create = ctx?.create,
    selector = "circle",
    range = [0.5, 1.5, 10],
    spacing = "linear",
    spacingFn = null,
    opacity = null, // null => auto, false => no opacity change, number|[min,max] => explicit
    debug = false,
  } = opts;

  if (!root || root.nodeType !== 1) throw new Error("scaleCirclesInSubtree: missing ctx.root/root");
  if (typeof create !== "function") throw new Error("scaleCirclesInSubtree: missing ctx.create/create(tag)");

  const [minScaleRaw, maxScaleRaw, countRaw] = range;
  const minScale = Number(minScaleRaw);
  const maxScale = Number(maxScaleRaw);
  const count = Math.max(1, Math.trunc(Number(countRaw)));
  if (!Number.isFinite(minScale) || !Number.isFinite(maxScale) || !Number.isFinite(count)) {
    throw new Error(`scaleCirclesInSubtree: invalid range: ${JSON.stringify(range)}`);
  }

  const circles = Array.from(root.querySelectorAll(selector))
    .filter(c => !c.closest('g[data-scale-stack="1"]'))
    .filter(c => !c.hasAttribute("data-scale-clone"));

  const stats = {
    selector,
    matched: circles.length,
    replaced: 0,
    skippedBadTag: 0,
    skippedBadGeom: 0,
    clonesMade: 0,
  };

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][scaleCirclesInSubtree] matched:", stats.matched, "selector:", selector, "range:", range);
  }

  for (const circle of circles) {
    if (String(circle.tagName || "").toLowerCase() !== "circle") {
      stats.skippedBadTag++;
      continue;
    }

    const cx = Number(circle.getAttribute("cx") || 0);
    const cy = Number(circle.getAttribute("cy") || 0);
    const r0 = Number(circle.getAttribute("r") || 0);
    if (!Number.isFinite(cx) || !Number.isFinite(cy) || !Number.isFinite(r0) || r0 <= 0) {
      stats.skippedBadGeom++;
      continue;
    }

    const g = create("g");
    g.setAttribute("data-scale-stack", "1");

    for (let i = 0; i < count; i++) {
      const s = getScaleAtIndex(i, count, minScale, maxScale, { spacing, spacingFn });
      const r = r0 * s;
      if (!Number.isFinite(r) || r <= 0) continue;

      const c = create("circle");
      c.setAttribute("data-scale-clone", "1");
      c.setAttribute("data-scale-factor", String(s));
      c.setAttribute("cx", String(cx));
      c.setAttribute("cy", String(cy));
      c.setAttribute("r", String(r));
      copyAttributes(circle, c, { skip: ["cx", "cy", "r"] });

      const style = c.getAttribute("style") || "";
      const hasOpacityStyle = /(^|;)\s*opacity\s*:/.test(style);
      const hasOpacityAttr = c.hasAttribute("opacity");
      const canSetOpacity = !hasOpacityStyle && !hasOpacityAttr;

      if (opacity === false) {
        // no-op
      } else if (opacity != null && canSetOpacity) {
        const alpha = Array.isArray(opacity)
          ? lerp(Number(opacity[0]), Number(opacity[1]), count <= 1 ? 1 : i / (count - 1))
          : Number(opacity);
        if (Number.isFinite(alpha)) {
          c.setAttribute("style", (style ? style + ";" : "") + `opacity:${clamp(alpha, 0, 1)}`);
        }
      } else if (opacity == null && canSetOpacity) {
        const alpha = lerp(0.25, 1, count <= 1 ? 1 : i / (count - 1));
        c.setAttribute("style", (style ? style + ";" : "") + `opacity:${alpha.toFixed(3)}`);
      }

      g.appendChild(c);
      stats.clonesMade++;
    }

    circle.replaceWith(g);
    stats.replaced++;
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][scaleCirclesInSubtree] replaced:", stats.replaced, "clonesMade:", stats.clonesMade, "skippedBadGeom:", stats.skippedBadGeom);
  }

  return stats;
}

export function scaleRectsInSubtree(ctx, opts = {}) {
  const {
    root = ctx?.root,
    create = ctx?.create,
    selector = "rect",
    range = [0.5, 1.5, 10],
    spacing = "linear",
    spacingFn = null,
    opacity = null,
    debug = false,
  } = opts;

  if (!root || root.nodeType !== 1) throw new Error("scaleRectsInSubtree: missing ctx.root/root");
  if (typeof create !== "function") throw new Error("scaleRectsInSubtree: missing ctx.create/create(tag)");

  const [minScaleRaw, maxScaleRaw, countRaw] = range;
  const minScale = Number(minScaleRaw);
  const maxScale = Number(maxScaleRaw);
  const count = Math.max(1, Math.trunc(Number(countRaw)));
  if (!Number.isFinite(minScale) || !Number.isFinite(maxScale) || !Number.isFinite(count)) {
    throw new Error(`scaleRectsInSubtree: invalid range: ${JSON.stringify(range)}`);
  }

  const rects = Array.from(root.querySelectorAll(selector))
    .filter(r => !r.closest('g[data-scale-stack="1"]'))
    .filter(r => !r.hasAttribute("data-scale-clone"));

  const stats = { selector, matched: rects.length, replaced: 0, skippedBadTag: 0, skippedBadGeom: 0, clonesMade: 0 };
  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][scaleRectsInSubtree] matched:", stats.matched, "selector:", selector, "range:", range);
  }

  for (const rect of rects) {
    if (String(rect.tagName || "").toLowerCase() !== "rect") {
      stats.skippedBadTag++;
      continue;
    }

    const x0 = Number(rect.getAttribute("x") || 0);
    const y0 = Number(rect.getAttribute("y") || 0);
    const w0 = Number(rect.getAttribute("width") || 0);
    const h0 = Number(rect.getAttribute("height") || 0);
    if (!Number.isFinite(x0) || !Number.isFinite(y0) || !Number.isFinite(w0) || !Number.isFinite(h0) || w0 <= 0 || h0 <= 0) {
      stats.skippedBadGeom++;
      continue;
    }

    const cx = x0 + w0 / 2;
    const cy = y0 + h0 / 2;
    const rx0 = rect.hasAttribute("rx") ? Number(rect.getAttribute("rx")) : null;
    const ry0 = rect.hasAttribute("ry") ? Number(rect.getAttribute("ry")) : null;

    const g = create("g");
    g.setAttribute("data-scale-stack", "1");

    for (let i = 0; i < count; i++) {
      const s = getScaleAtIndex(i, count, minScale, maxScale, { spacing, spacingFn });
      const w = w0 * s;
      const h = h0 * s;
      if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) continue;

      const x = cx - w / 2;
      const y = cy - h / 2;

      const r = create("rect");
      r.setAttribute("data-scale-clone", "1");
      r.setAttribute("data-scale-factor", String(s));
      r.setAttribute("x", String(x));
      r.setAttribute("y", String(y));
      r.setAttribute("width", String(w));
      r.setAttribute("height", String(h));

      if (rx0 != null && Number.isFinite(rx0)) r.setAttribute("rx", String(rx0 * s));
      if (ry0 != null && Number.isFinite(ry0)) r.setAttribute("ry", String(ry0 * s));

      copyAttributes(rect, r, { skip: ["x", "y", "width", "height", "rx", "ry"] });

      const style = r.getAttribute("style") || "";
      const hasOpacityStyle = /(^|;)\s*opacity\s*:/.test(style);
      const hasOpacityAttr = r.hasAttribute("opacity");
      const canSetOpacity = !hasOpacityStyle && !hasOpacityAttr;

      if (opacity === false) {
        // no-op
      } else if (opacity != null && canSetOpacity) {
        const alpha = Array.isArray(opacity)
          ? lerp(Number(opacity[0]), Number(opacity[1]), count <= 1 ? 1 : i / (count - 1))
          : Number(opacity);
        if (Number.isFinite(alpha)) r.setAttribute("style", (style ? style + ";" : "") + `opacity:${clamp(alpha, 0, 1)}`);
      } else if (opacity == null && canSetOpacity) {
        const alpha = lerp(0.25, 1, count <= 1 ? 1 : i / (count - 1));
        r.setAttribute("style", (style ? style + ";" : "") + `opacity:${alpha.toFixed(3)}`);
      }

      g.appendChild(r);
      stats.clonesMade++;
    }

    rect.replaceWith(g);
    stats.replaced++;
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][scaleRectsInSubtree] replaced:", stats.replaced, "clonesMade:", stats.clonesMade, "skippedBadGeom:", stats.skippedBadGeom);
  }
  return stats;
}

function combineTransform(existing, next) {
  const a = String(existing || "").trim();
  const b = String(next || "").trim();
  if (!a) return b;
  if (!b) return a;
  return `${a} ${b}`;
}

export function scalePathsInSubtree(ctx, opts = {}) {
  const {
    root = ctx?.root,
    create = ctx?.create,
    selector = "path",
    range = [0.5, 1.5, 10],
    spacing = "linear",
    spacingFn = null,
    opacity = null,
    debug = false,
  } = opts;

  if (!root || root.nodeType !== 1) throw new Error("scalePathsInSubtree: missing ctx.root/root");
  if (typeof create !== "function") throw new Error("scalePathsInSubtree: missing ctx.create/create(tag)");

  const [minScaleRaw, maxScaleRaw, countRaw] = range;
  const minScale = Number(minScaleRaw);
  const maxScale = Number(maxScaleRaw);
  const count = Math.max(1, Math.trunc(Number(countRaw)));
  if (!Number.isFinite(minScale) || !Number.isFinite(maxScale) || !Number.isFinite(count)) {
    throw new Error(`scalePathsInSubtree: invalid range: ${JSON.stringify(range)}`);
  }

  const paths = Array.from(root.querySelectorAll(selector))
    .filter(p => !p.closest('g[data-scale-stack="1"]'))
    .filter(p => !p.hasAttribute("data-scale-clone"));

  const stats = { selector, matched: paths.length, replaced: 0, skippedBadTag: 0, skippedNoBBox: 0, clonesMade: 0 };
  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][scalePathsInSubtree] matched:", stats.matched, "selector:", selector, "range:", range);
  }

  for (const path of paths) {
    if (String(path.tagName || "").toLowerCase() !== "path") {
      stats.skippedBadTag++;
      continue;
    }

    let bbox;
    try {
      bbox = path.getBBox();
    } catch {
      stats.skippedNoBBox++;
      continue;
    }
    if (!bbox || !Number.isFinite(bbox.width) || !Number.isFinite(bbox.height)) {
      stats.skippedNoBBox++;
      continue;
    }

    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;

    const g = create("g");
    g.setAttribute("data-scale-stack", "1");

    for (let i = 0; i < count; i++) {
      const s = getScaleAtIndex(i, count, minScale, maxScale, { spacing, spacingFn });
      const clone = create("path");
      clone.setAttribute("data-scale-clone", "1");
      clone.setAttribute("data-scale-factor", String(s));

      copyAttributes(path, clone, { skip: ["transform", "id"] });

      const scaleT = `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`;
      const existingT = path.getAttribute("transform");
      const combined = combineTransform(existingT, scaleT);
      if (combined) clone.setAttribute("transform", combined);

      const style = clone.getAttribute("style") || "";
      const hasOpacityStyle = /(^|;)\s*opacity\s*:/.test(style);
      const hasOpacityAttr = clone.hasAttribute("opacity");
      const canSetOpacity = !hasOpacityStyle && !hasOpacityAttr;

      if (opacity === false) {
        // no-op
      } else if (opacity != null && canSetOpacity) {
        const alpha = Array.isArray(opacity)
          ? lerp(Number(opacity[0]), Number(opacity[1]), count <= 1 ? 1 : i / (count - 1))
          : Number(opacity);
        if (Number.isFinite(alpha)) clone.setAttribute("style", (style ? style + ";" : "") + `opacity:${clamp(alpha, 0, 1)}`);
      } else if (opacity == null && canSetOpacity) {
        const alpha = lerp(0.25, 1, count <= 1 ? 1 : i / (count - 1));
        clone.setAttribute("style", (style ? style + ";" : "") + `opacity:${alpha.toFixed(3)}`);
      }

      g.appendChild(clone);
      stats.clonesMade++;
    }

    path.replaceWith(g);
    stats.replaced++;
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][scalePathsInSubtree] replaced:", stats.replaced, "clonesMade:", stats.clonesMade, "skippedNoBBox:", stats.skippedNoBBox);
  }
  return stats;
}

function parseNumberLike(v, fallback = 0) {
  const s = String(v ?? "").trim();
  const m = s.match(/^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);
  const n = m ? Number(m[0]) : NaN;
  return Number.isFinite(n) ? n : fallback;
}

function copyAttrs(fromEl, toEl, { skip = [] } = {}) {
  const skipSet = new Set(["id", ...skip]);
  for (const { name, value } of Array.from(fromEl.attributes)) {
    if (skipSet.has(name)) continue;
    if (name.startsWith("data-convert-")) continue;
    toEl.setAttribute(name, value);
  }
}

function dFromPolygonPoints(pts) {
  if (!pts.length) return "";
  const [x0, y0] = pts[0];
  let d = `M ${x0} ${y0}`;
  for (let i = 1; i < pts.length; i++) {
    const [x, y] = pts[i];
    d += ` L ${x} ${y}`;
  }
  return d + " Z";
}

function dFromRect(x, y, w, h) {
  return `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`;
}

function dFromCircle(cx, cy, r) {
  const x0 = cx + r;
  const x1 = cx - r;
  return `M ${x0} ${cy} A ${r} ${r} 0 1 0 ${x1} ${cy} A ${r} ${r} 0 1 0 ${x0} ${cy} Z`;
}

function bboxOf(el) {
  try {
    return el.getBBox();
  } catch {
    return null;
  }
}

function centerFromBBox(bb) {
  return { cx: bb.x + bb.width / 2, cy: bb.y + bb.height / 2 };
}

export function convertShapesInSubtree(ctx, opts = {}) {
  const {
    root = ctx?.root,
    create = ctx?.create,
    fromTag = "path",
    toTag = "circle",
    selector = null,
    pathSamplePoints = 64,
    debug = false,
  } = opts;

  if (!root || root.nodeType !== 1) throw new Error("convertShapesInSubtree: missing ctx.root/root");
  if (typeof create !== "function") throw new Error("convertShapesInSubtree: missing ctx.create/create(tag)");

  const from = String(fromTag).toLowerCase();
  const to = String(toTag).toLowerCase();
  const query = selector ? String(selector) : from;

  const els = Array.from(root.querySelectorAll(query))
    .filter(el => String(el.tagName || "").toLowerCase() === from)
    .filter(el => !el.closest('g[data-convert-stack="1"]'))
    .filter(el => !el.hasAttribute("data-convert-clone"));

  const stats = { from, to, selector: query, matched: els.length, converted: 0, skipped: 0 };

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][convertShapesInSubtree] from:", from, "to:", to, "matched:", stats.matched, "selector:", query);
  }

  for (const el of els) {
    let out = null;

    if (from === "circle" && to === "rect") {
      const cx = parseNumberLike(el.getAttribute("cx"), 0);
      const cy = parseNumberLike(el.getAttribute("cy"), 0);
      const r = parseNumberLike(el.getAttribute("r"), 0);
      if (!(r > 0)) { stats.skipped++; continue; }
      const rect = create("rect");
      rect.setAttribute("x", String(cx - r));
      rect.setAttribute("y", String(cy - r));
      rect.setAttribute("width", String(r * 2));
      rect.setAttribute("height", String(r * 2));
      copyAttrs(el, rect, { skip: ["cx", "cy", "r"] });
      out = rect;
    } else if (from === "rect" && to === "circle") {
      const x = parseNumberLike(el.getAttribute("x"), 0);
      const y = parseNumberLike(el.getAttribute("y"), 0);
      const w = parseNumberLike(el.getAttribute("width"), 0);
      const h = parseNumberLike(el.getAttribute("height"), 0);
      if (!(w > 0 && h > 0)) { stats.skipped++; continue; }
      const r = Math.min(w, h) / 2;
      const circle = create("circle");
      circle.setAttribute("cx", String(x + w / 2));
      circle.setAttribute("cy", String(y + h / 2));
      circle.setAttribute("r", String(r));
      copyAttrs(el, circle, { skip: ["x", "y", "width", "height", "rx", "ry"] });
      out = circle;
    } else if (to === "path") {
      const path = create("path");
      let d = "";

      if (from === "polygon") {
        const pts = parsePoints(el.getAttribute("points"));
        d = dFromPolygonPoints(pts);
        copyAttrs(el, path, { skip: ["points"] });
      } else if (from === "rect") {
        const x = parseNumberLike(el.getAttribute("x"), 0);
        const y = parseNumberLike(el.getAttribute("y"), 0);
        const w = parseNumberLike(el.getAttribute("width"), 0);
        const h = parseNumberLike(el.getAttribute("height"), 0);
        if (!(w > 0 && h > 0)) { stats.skipped++; continue; }
        d = dFromRect(x, y, w, h);
        copyAttrs(el, path, { skip: ["x", "y", "width", "height", "rx", "ry"] });
      } else if (from === "circle") {
        const cx = parseNumberLike(el.getAttribute("cx"), 0);
        const cy = parseNumberLike(el.getAttribute("cy"), 0);
        const r = parseNumberLike(el.getAttribute("r"), 0);
        if (!(r > 0)) { stats.skipped++; continue; }
        d = dFromCircle(cx, cy, r);
        copyAttrs(el, path, { skip: ["cx", "cy", "r"] });
      } else if (from === "path") {
        d = String(el.getAttribute("d") || "");
        copyAttrs(el, path, { skip: [] });
      } else {
        stats.skipped++;
        continue;
      }

      if (!d.trim()) { stats.skipped++; continue; }
      path.setAttribute("d", d);
      out = path;
    } else if (from === "path" && (to === "rect" || to === "circle")) {
      const bb = bboxOf(el);
      if (!bb || !(bb.width > 0 && bb.height > 0)) { stats.skipped++; continue; }
      const { cx, cy } = centerFromBBox(bb);

      if (to === "rect") {
        const r = create("rect");
        r.setAttribute("x", String(bb.x));
        r.setAttribute("y", String(bb.y));
        r.setAttribute("width", String(bb.width));
        r.setAttribute("height", String(bb.height));
        copyAttrs(el, r, { skip: ["d"] });
        out = r;
      } else {
        const c = create("circle");
        const rr = Math.min(bb.width, bb.height) / 2;
        c.setAttribute("cx", String(cx));
        c.setAttribute("cy", String(cy));
        c.setAttribute("r", String(rr));
        copyAttrs(el, c, { skip: ["d"] });
        out = c;
      }
    } else if (from === "path" && to === "polygon") {
      const pathEl = /** @type {any} */ (el);
      if (typeof pathEl.getTotalLength !== "function" || typeof pathEl.getPointAtLength !== "function") {
        stats.skipped++;
        continue;
      }
      const total = pathEl.getTotalLength();
      if (!Number.isFinite(total) || total <= 0) { stats.skipped++; continue; }
      const n = Math.max(3, Math.trunc(pathSamplePoints));
      const pts = [];
      for (let i = 0; i < n; i++) {
        const t = n <= 1 ? 0 : i / (n - 1);
        const p = pathEl.getPointAtLength(total * t);
        pts.push([p.x, p.y]);
      }
      const poly = create("polygon");
      poly.setAttribute("points", formatPoints(pts));
      copyAttrs(el, poly, { skip: ["d"] });
      out = poly;
    } else {
      stats.skipped++;
      continue;
    }

    out.setAttribute("data-convert-clone", "1");
    el.replaceWith(out);
    stats.converted++;
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[scriptOps][convertShapesInSubtree] done:", stats);
  }
  return stats;
}
