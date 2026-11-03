// ============================================================
//            HEADER BACKGROUND: A LIVE ANALOG LAYOUT
//
// Draws a pale analog layout behind the header: device arrays in a
// common-centroid (ABBA / BAAB) pattern, poly gates, guard rings, metal
// rails and vias, mirrored about the page's centre axis the way matched
// devices are. Small current pulses travel along the metal.
// Purely decorative (aria-hidden); the page reads the same without it.
// ============================================================
(function() {
  var canvas = document.getElementById('analog-bg');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Layer colours, after the usual layout-viewer conventions.
  var LAYER = {
    diffA: '46,150,96',     // active, device A
    diffB: '44,118,196',    // active, device B
    poly: '206,72,64',
    metal1: '60,100,210',
    metal2: '196,150,40',
    ring: '46,150,96',
    pulse: '26,75,224'
  };

  var W = 0, H = 0, dpr = 1, cell = 24;
  var still = document.createElement('canvas');
  var routes = [], pulses = [];

  // Small deterministic PRNG so the layout is the same on every visit.
  function rng(seed) {
    return function() {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
  }

  function smooth(a, b, x) {
    var t = Math.max(0, Math.min(1, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  // Strength of the drawing at a point: faint behind the portrait and name,
  // full strength in the open space beside them, fading out towards the
  // bottom of the band.
  var clear = { l: 0, t: 0, r: 0, b: 0 };
  function strength(x, y) {
    var dx = Math.max(clear.l - x, 0, x - clear.r);
    var dy = Math.max(clear.t - y, 0, y - clear.b);
    var side = 0.3 + 1.1 * smooth(0, 140, Math.sqrt(dx * dx + dy * dy));
    var down = 1 - smooth(clear.b - 24, H, y);
    return side * down;
  }

  function rect(g, color, a, x, y, w, h) {
    g.fillStyle = 'rgba(' + color + ',' + a.toFixed(3) + ')';
    g.fillRect(x, y, w, h);
  }

  function line(g, color, a, width, x1, y1, x2, y2) {
    g.strokeStyle = 'rgba(' + color + ',' + a.toFixed(3) + ')';
    g.lineWidth = width;
    g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
  }

  function build() {
    var rect0 = canvas.parentNode.getBoundingClientRect();
    var header = document.querySelector('table.imgtable');
    W = Math.round(rect0.width);
    if (header) {
      var hr = header.getBoundingClientRect();
      clear = { l: hr.left - rect0.left, t: hr.top - rect0.top, r: hr.right - rect0.left, b: hr.bottom - rect0.top };
    }
    H = Math.round((header ? clear.b : 300) + 56);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cell = W < 600 ? 18 : 24;

    canvas.style.height = H + 'px';
    canvas.width = still.width = Math.round(W * dpr);
    canvas.height = still.height = Math.round(H * dpr);

    var g = still.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    g.lineCap = 'square';

    var rand = rng(20260211);
    var half = W / 2;
    var slotW = cell * 9, slotH = cell * 5;
    var rows = Math.ceil(H / slotH);
    var cols = Math.ceil(half / slotW);
    var leftRoutes = [];

    // Metal-2 rails run between the rows of devices.
    for (var r = 0; r <= rows; r++) {
      var ry = r * slotH + cell * 0.5;
      for (var x = 0; x < half; x += cell) {
        var a = 0.22 * strength(x, ry);
        line(g, LAYER.metal2, a, 3, x, ry, x + cell, ry);
        line(g, LAYER.metal2, a, 3, W - x, ry, W - x - cell, ry);
      }
    }

    // Device arrays, generated for the left half and mirrored to the right.
    for (var rr = 0; rr < rows; rr++) {
      for (var cc = 0; cc < cols; cc++) {
        if (rand() < 0.28) continue;
        var nx = 2 + Math.floor(rand() * 3) * 2;      // 2, 4 or 6 columns of units
        var ny = 1 + Math.floor(rand() * 2);          // 1 or 2 rows
        var bx = cc * slotW + cell * (1 + Math.floor(rand() * (8 - nx)));
        var by = rr * slotH + cell * 1.5 + Math.floor(rand() * (3 - ny)) * cell;
        var bw = nx * cell, bh = ny * cell;
        if (bx + bw > half - cell) continue;          // keep clear of the mirror axis
        var s =strength(bx + bw / 2, by + bh / 2);

        for (var side = 0; side < 2; side++) {
          var ox = side ? W - bx - bw : bx;
          // Guard ring.
          g.strokeStyle = 'rgba(' + LAYER.ring + ',' + (0.30 * s).toFixed(3) + ')';
          g.lineWidth = 2;
          g.strokeRect(ox - 6, by - 6, bw + 12, bh + 12);
          // Unit devices: A and B interleaved so their centroids coincide.
          for (var iy = 0; iy < ny; iy++) {
            for (var ix = 0; ix < nx; ix++) {
              var k = side ? nx - 1 - ix : ix;
              var isA = ((k % 4 === 0 || k % 4 === 3) !== (iy % 2 === 1));
              rect(g, isA ? LAYER.diffA : LAYER.diffB, 0.16 * s, ox + ix * cell + 3, by + iy * cell + 4, cell - 6, cell - 8);
              line(g, LAYER.poly, 0.34 * s, 2, ox + ix * cell + cell / 2, by + iy * cell - 2, ox + ix * cell + cell / 2, by + iy * cell + cell + 2);
            }
          }
          // Metal-1 strap from the array up to the rail above, with a via.
          var tx = ox + bw / 2, railY = rr * slotH + cell * 0.5;
          line(g, LAYER.metal1, 0.30 * s, 3, tx, by - 6, tx, railY);
          rect(g, LAYER.metal1, 0.45 * s, tx - 4, railY - 4, 8, 8);
          if (!side) leftRoutes.push({ x: tx, y0: by - 6, y1: railY, s: s });
        }
      }
    }

    // Current paths for the pulses: up a strap, then along the rail.
    routes = [];
    leftRoutes.forEach(function(p) {
      var run = cell * (3 + Math.floor(rand() * 6));
      var dir = rand() < 0.5 ? -1 : 1;
      var pts = [[p.x, p.y0], [p.x, p.y1], [p.x + dir * run, p.y1]];
      routes.push(pts);
      routes.push(pts.map(function(q) { return [W - q[0], q[1]]; }));
    });
    pulses = [];
    for (var i = 0; i < Math.min(14, routes.length); i++) pulses.push(newPulse(rand() * 1.2));
  }

  function newPulse(progress) {
    var pts = routes[Math.floor(Math.random() * routes.length)];
    var len = 0;
    for (var i = 1; i < pts.length; i++) len += Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]);
    return { pts: pts, len: len, t: (progress || 0) * len, speed: 34 + Math.random() * 30 };
  }

  function pointAt(p, d) {
    for (var i = 1; i < p.pts.length; i++) {
      var a = p.pts[i - 1], b = p.pts[i];
      var seg = Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);
      if (d <= seg) {
        var f = seg ? d / seg : 0;
        return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
      }
      d -= seg;
    }
    return p.pts[p.pts.length - 1];
  }

  function draw(dt) {
    if (!still.width || !still.height) return;      // nothing laid out yet (zero-width window)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(still, 0, 0);
    if (reduce) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (var i = 0; i < pulses.length && routes.length; i++) {
      var p = pulses[i];
      p.t += p.speed * dt;
      if (p.t > p.len + 30) { pulses[i] = newPulse(0); continue; }
      for (var k = 0; k < 6; k++) {        // a short tail behind the head
        var d = p.t - k * 5;
        if (d < 0 || d > p.len) continue;
        var q = pointAt(p, d);
        var a = 0.55 * strength(q[0], q[1]) * (1 - k / 6);
        ctx.fillStyle = 'rgba(' + LAYER.pulse + ',' + a.toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(q[0], q[1], 2.6 - k * 0.3, 0, Math.PI * 2); ctx.fill();
      }
    }
  }

  var last = 0, visible = true, running = false;
  function frame(now) {
    if (!visible) { running = false; return; }
    var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    draw(dt);
    requestAnimationFrame(frame);
  }
  function start() {
    if (reduce) { draw(0); return; }
    if (!running) { running = true; last = 0; requestAnimationFrame(frame); }
  }

  function init() {
    build();
    draw(0);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function(entries) {
        visible = entries[0].isIntersecting;
        if (visible) start();
      }).observe(canvas);
    }
    start();
    var timer;
    window.addEventListener('resize', function() {
      clearTimeout(timer);
      timer = setTimeout(function() { build(); draw(0); }, 150);
    });
    // Web fonts change the header height once they arrive.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function() { build(); draw(0); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
