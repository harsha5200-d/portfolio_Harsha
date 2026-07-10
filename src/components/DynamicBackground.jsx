import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SkyAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0;
    let H = 0;
    let DPR = 1;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const LIGHT = { x: -0.6, y: -0.75 };
    const lightLen = Math.hypot(LIGHT.x, LIGHT.y);
    const lightDir = { x: LIGHT.x / lightLen, y: LIGHT.y / lightLen };

    function buildPuffs(scale) {
      const puffCount = 5 + Math.floor(Math.random() * 3);
      const puffs = [];
      let cursor = 0;
      for (let i = 0; i < puffCount; i++) {
        const w = (34 + Math.random() * 28) * scale;
        const h = w * (0.5 + Math.random() * 0.1);
        const edgeFactor = 1 - Math.abs(i / (puffCount - 1) - 0.5) * 0.6;
        puffs.push({ dx: cursor, dy: 0, w: w * edgeFactor, h: h * edgeFactor, role: 'body' });
        cursor += w * 0.5;
      }
      const totalWidth = cursor;
      puffs.forEach((p) => (p.dx -= totalWidth / 2));

      const dominantCount = 2 + Math.floor(Math.random() * 2);
      const dominants = [];
      for (let i = 0; i < dominantCount; i++) {
        const base = puffs[Math.floor(Math.random() * puffs.length)];
        const w = base.w * (0.75 + Math.random() * 0.3);
        const d = {
          dx: base.dx + (Math.random() - 0.5) * base.w * 0.4,
          dy: -base.h * (0.65 + Math.random() * 0.35),
          w,
          h: w * (0.85 + Math.random() * 0.15),
          role: 'bump',
        };
        dominants.push(d);
        puffs.push(d);
      }

      const bumpCount = 9 + Math.floor(Math.random() * 5);
      const hosts = [...puffs.filter((p) => p.role === 'body'), ...dominants];
      for (let i = 0; i < bumpCount; i++) {
        const base = hosts[Math.floor(Math.random() * hosts.length)];
        const w = base.w * (0.25 + Math.random() * 0.25);
        puffs.push({
          dx: base.dx + (Math.random() - 0.5) * base.w * 0.8,
          dy: base.dy - base.h * (0.4 + Math.random() * 0.4),
          w,
          h: w * (0.7 + Math.random() * 0.2),
          role: 'bump',
        });
      }

      const midX = puffs.reduce((sum, p) => sum + p.dx, 0) / puffs.length;
      const lowestBody = puffs.filter((p) => p.role === 'body').reduce((a, b) => (a.h > b.h ? a : b));
      puffs.push({
        dx: midX,
        dy: lowestBody.h * 0.4,
        w: totalWidth * 0.46,
        h: lowestBody.h * 0.5,
        role: 'shadow',
      });

      const perimeterHosts = puffs.filter((p) => p.role !== 'shadow');
      const wispCount = 6 + Math.floor(Math.random() * 5);
      for (let i = 0; i < wispCount; i++) {
        const base = perimeterHosts[Math.floor(Math.random() * perimeterHosts.length)];
        const angle = -Math.random() * Math.PI;
        const dist = Math.max(base.w, base.h) * (0.75 + Math.random() * 0.35);
        const w = base.w * (0.15 + Math.random() * 0.2);
        puffs.push({
          dx: base.dx + Math.cos(angle) * dist,
          dy: base.dy + Math.sin(angle) * dist * 0.6,
          w,
          h: w * (0.6 + Math.random() * 0.3),
          role: 'wisp',
        });
      }

      return { puffs, totalWidth, dominants, baseLine: lowestBody.h * 0.72 };
    }

    function renderCloudSprite(scale, brightness) {
      const { puffs, dominants, baseLine } = buildPuffs(scale);
      const dxs = puffs.map((p) => p.dx * DPR);
      const dys = puffs.map((p) => p.dy * DPR);
      const ws = puffs.map((p) => p.w * DPR);
      const hs = puffs.map((p) => p.h * DPR);
      const pad = 50 * scale * DPR;

      const maxX = Math.max(...dxs.map((dx, i) => Math.abs(dx) + ws[i])) + pad;
      const maxY = Math.max(...dys.map((dy, i) => Math.abs(dy) + hs[i])) + pad;

      const buf = document.createElement('canvas');
      buf.width = maxX * 2;
      buf.height = maxY * 2;
      const bctx = buf.getContext('2d');
      const cx = buf.width / 2;
      const cy = buf.height / 2;

      const baseR = Math.round(232 + brightness * 20);
      const baseG = Math.round(232 + brightness * 18);
      const baseB = Math.round(228 + brightness * 22);

      bctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
      puffs.forEach((p, i) => {
        if (p.role === 'shadow' || p.role === 'wisp') return;
        bctx.beginPath();
        bctx.ellipse(cx + dxs[i], cy + dys[i], ws[i], hs[i], 0, 0, Math.PI * 2);
        bctx.fill();
      });

      bctx.globalCompositeOperation = 'destination-over';
      puffs.forEach((p, i) => {
        if (p.role !== 'shadow') return;
        bctx.fillStyle = 'rgb(146,162,190)';
        bctx.beginPath();
        bctx.ellipse(cx + dxs[i], cy + dys[i], ws[i], hs[i], 0, 0, Math.PI * 2);
        bctx.fill();
      });
      bctx.globalCompositeOperation = 'source-over';

      bctx.globalCompositeOperation = 'source-atop';
      puffs.forEach((p, i) => {
        if (p.role === 'shadow' || p.role === 'wisp') return;
        bctx.strokeStyle = 'rgba(120,138,166,0.16)';
        bctx.lineWidth = Math.max(ws[i], hs[i]) * 0.18;
        bctx.beginPath();
        bctx.ellipse(cx + dxs[i], cy + dys[i], ws[i] * 0.92, hs[i] * 0.92, 0, 0, Math.PI * 2);
        bctx.stroke();
      });

      puffs.forEach((p, i) => {
        if (p.role === 'shadow' || p.role === 'wisp') return;
        const r = Math.max(ws[i], hs[i]);
        const hlOffsetX = lightDir.x * r * 0.4;
        const hlOffsetY = lightDir.y * r * 0.4;

        const hl = bctx.createRadialGradient(
          cx + dxs[i] + hlOffsetX,
          cy + dys[i] + hlOffsetY,
          0,
          cx + dxs[i] + hlOffsetX,
          cy + dys[i] + hlOffsetY,
          r * 1.15
        );
        hl.addColorStop(0, 'rgba(255,255,252,0.7)');
        hl.addColorStop(0.55, 'rgba(255,255,252,0.18)');
        hl.addColorStop(1, 'rgba(255,255,252,0)');
        bctx.fillStyle = hl;
        bctx.beginPath();
        bctx.ellipse(cx + dxs[i], cy + dys[i], ws[i], hs[i], 0, 0, Math.PI * 2);
        bctx.fill();

        const shOffsetX = -lightDir.x * r * 0.45;
        const shOffsetY = -lightDir.y * r * 0.45;
        const sh = bctx.createRadialGradient(
          cx + dxs[i] + shOffsetX,
          cy + dys[i] + shOffsetY,
          0,
          cx + dxs[i] + shOffsetX,
          cy + dys[i] + shOffsetY,
          r * 1.1
        );
        sh.addColorStop(0, 'rgba(105,124,155,0.45)');
        sh.addColorStop(0.6, 'rgba(105,124,155,0.14)');
        sh.addColorStop(1, 'rgba(105,124,155,0)');
        bctx.fillStyle = sh;
        bctx.beginPath();
        bctx.ellipse(cx + dxs[i], cy + dys[i], ws[i], hs[i], 0, 0, Math.PI * 2);
        bctx.fill();
      });

      if (dominants.length) {
        const brightest = dominants.reduce((a, b) => {
          const scoreA = -a.dy;
          const scoreB = -b.dy;
          return scoreA > scoreB ? a : b;
        });
        const idx = puffs.indexOf(brightest);
        const r = Math.max(ws[idx], hs[idx]);
        const ox = lightDir.x * r * 0.35;
        const oy = lightDir.y * r * 0.35;
        const spec = bctx.createRadialGradient(
          cx + dxs[idx] + ox,
          cy + dys[idx] + oy,
          0,
          cx + dxs[idx] + ox,
          cy + dys[idx] + oy,
          r * 0.65
        );
        spec.addColorStop(0, 'rgba(255,255,255,0.65)');
        spec.addColorStop(1, 'rgba(255,255,255,0)');
        bctx.fillStyle = spec;
        bctx.beginPath();
        bctx.ellipse(cx + dxs[idx], cy + dys[idx], ws[idx], hs[idx], 0, 0, Math.PI * 2);
        bctx.fill();
      }

      const wash = bctx.createLinearGradient(0, 0, 0, buf.height);
      wash.addColorStop(0, 'rgba(255,255,248,0.22)');
      wash.addColorStop(0.45, 'rgba(255,255,255,0)');
      wash.addColorStop(1, 'rgba(100,120,150,0.3)');
      bctx.fillStyle = wash;
      bctx.fillRect(0, 0, buf.width, buf.height);
      bctx.globalCompositeOperation = 'source-over';

      puffs.forEach((p, i) => {
        if (p.role !== 'wisp') return;
        bctx.globalAlpha = 0.35 + Math.random() * 0.25;
        bctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
        bctx.beginPath();
        bctx.ellipse(cx + dxs[i], cy + dys[i], ws[i], hs[i], 0, 0, Math.PI * 2);
        bctx.fill();
        bctx.globalAlpha = 1;
      });

      bctx.globalCompositeOperation = 'destination-in';
      const baseLineY = cy + baseLine * DPR;
      const baseClip = bctx.createLinearGradient(0, baseLineY - 6 * DPR, 0, baseLineY + 4 * DPR);
      baseClip.addColorStop(0, 'rgba(0,0,0,1)');
      baseClip.addColorStop(1, 'rgba(0,0,0,0)');
      bctx.fillStyle = 'rgba(0,0,0,1)';
      bctx.fillRect(0, 0, buf.width, baseLineY - 6 * DPR);
      bctx.fillStyle = baseClip;
      bctx.fillRect(0, baseLineY - 6 * DPR, buf.width, 10 * DPR);
      bctx.globalCompositeOperation = 'source-over';

      bctx.globalCompositeOperation = 'destination-in';
      const featherR = Math.min(buf.width, buf.height);
      const feather = bctx.createRadialGradient(cx, cy - featherR * 0.08, featherR * 0.4, cx, cy - featherR * 0.08, featherR * 0.5);
      feather.addColorStop(0, 'rgba(0,0,0,1)');
      feather.addColorStop(1, 'rgba(0,0,0,0.7)');
      bctx.fillStyle = feather;
      bctx.fillRect(0, 0, buf.width, buf.height);
      bctx.globalCompositeOperation = 'source-over';

      return { canvas: buf, anchorX: cx, anchorY: cy };
    }

    function makeCloud(speed, scale, yFrac) {
      const brightness = 0.7 + Math.random() * 0.3;
      const sprite = renderCloudSprite(scale, brightness);
      return {
        x: Math.random() * W,
        y: yFrac * H,
        speed,
        sprite,
        alpha: 0.9 + Math.random() * 0.1,
      };
    }

    let clouds;
    function initClouds() {
      clouds = [
        ...Array.from({ length: 1 }, () => makeCloud(3 + Math.random() * 3, 1.8 + Math.random() * 0.6, 0.12 + Math.random() * 0.1)),
        ...Array.from({ length: 2 }, () => makeCloud(6 + Math.random() * 5, 1.1 + Math.random() * 0.4, 0.28 + Math.random() * 0.15)),
        ...Array.from({ length: 1 }, () => makeCloud(10 + Math.random() * 8, 0.7 + Math.random() * 0.3, 0.45 + Math.random() * 0.15)),
      ];
    }
    initClouds();

    function updateAndDrawClouds(dt) {
      clouds.forEach((c) => {
        c.x += c.speed * dt * DPR;
        const half = c.sprite.anchorX;
        if (c.x - half > W) {
          c.x = -half;
          c.y = (0.1 + Math.random() * 0.5) * H;
        }
        ctx.save();
        ctx.globalAlpha = c.alpha;
        ctx.filter = 'blur(0.5px)';
        ctx.drawImage(c.sprite.canvas, c.x - c.sprite.anchorX, c.y - c.sprite.anchorY);
        ctx.restore();
      });
    }

    let last = performance.now();
    let rafId;
    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, W, H);
      updateAndDrawClouds(reduceMotion ? 0 : dt);

      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,_#4fa8e8_0%,_#7ec4ef_45%,_#bfe3f7_100%)]">
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
};

const SpaceAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0;
    let H = 0;
    let DPR = 1;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    function makeStars(count, speedRange, sizeRange) {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
          speed: speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]),
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.3 + Math.random() * 0.8,
        });
      }
      return arr;
    }

    let layers;
    function initLayers() {
      layers = [
        makeStars(70, [1, 3], [0.4, 1.0]),
        makeStars(35, [4, 8], [0.8, 1.6]),
        makeStars(15, [10, 16], [1.4, 2.6]),
      ];
    }
    initLayers();

    function drawStars(dt) {
      layers.forEach((layer) => {
        layer.forEach((s) => {
          s.x -= s.speed * dt;
          if (s.x < -5) {
            s.x = W + 5;
            s.y = Math.random() * H;
          }
          s.twinklePhase += s.twinkleSpeed * dt;
          const tw = 0.5 + 0.5 * Math.sin(s.twinklePhase);
          const radius = s.r;
          const alpha = 0.4 + 0.6 * tw;

          if (radius > 1.1) {
            const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, radius * 4);
            glow.addColorStop(0, `rgba(238,242,255,${0.35 * tw})`);
            glow.addColorStop(1, 'rgba(238,242,255,0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(s.x, s.y, radius * 4, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
          ctx.fill();

          if (radius > 1.8 && tw > 0.75) {
            const len = radius * 5 * tw;
            ctx.strokeStyle = `rgba(255,255,255,${(tw - 0.75) * 2})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(s.x - len, s.y);
            ctx.lineTo(s.x + len, s.y);
            ctx.moveTo(s.x, s.y - len);
            ctx.lineTo(s.x, s.y + len);
            ctx.stroke();
          }
        });
      });
    }

    let shooters = [];
    function maybeSpawnShooter() {
      if (Math.random() < 0.003) {
        shooters.push({
          x: Math.random() * W * 0.6 + W * 0.3,
          y: Math.random() * H * 0.3,
          vx: -(300 + Math.random() * 200),
          vy: 150 + Math.random() * 100,
          life: 1,
        });
      }
    }

    function drawShooters(dt) {
      shooters.forEach((s) => {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.life -= dt * 1.2;
        ctx.save();
        ctx.strokeStyle = `rgba(180,220,255,${Math.max(s.life, 0)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 0.05, s.y - s.vy * 0.05);
        ctx.stroke();
        ctx.restore();
      });
      shooters = shooters.filter((s) => s.life > 0);
    }

    let last = performance.now();
    let rafId;

    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, W, H);
      drawStars(reduceMotion ? 0 : dt);
      maybeSpawnShooter();
      drawShooters(reduceMotion ? 0 : dt);

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
};

const DynamicBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-colors duration-700">
      {theme === 'dark' ? (
        <SpaceAnimation />
      ) : (
        <SkyAnimation />
      )}
    </div>
  );
};

export default DynamicBackground;
