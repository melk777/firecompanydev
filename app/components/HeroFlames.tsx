"use client";

import { useEffect, useRef } from "react";

interface FlameParticle {
  x: number;
  y: number;
  vy: number;
  vx: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

export default function HeroFlames() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef(0);
  const particlesRef = useRef<FlameParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const spawnFlame = () => {
      // Spawn na parte inferior com distribuição horizontal
      const x = Math.random() * w;
      const y = h + 10;
      particlesRef.current.push({
        x,
        y,
        vy: -(1.2 + Math.random() * 2.2),
        vx: (Math.random() - 0.5) * 0.8,
        life: 1,
        maxLife: 1.5 + Math.random() * 2.5,
        size: 20 + Math.random() * 45,
        hue: 5 + Math.random() * 35, // vermelho ao laranja
      });
    };

    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      frameCount++;

      // Spawn periódico
      if (frameCount % 3 === 0) {
        const count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) spawnFlame();
      }

      const particles = particlesRef.current;

      // Limita partículas
      if (particles.length > 80) {
        particlesRef.current = particles.slice(-60);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const dt = 0.016;
        p.life -= dt / p.maxLife;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        p.y += p.vy;
        p.x += p.vx + Math.sin(p.y * 0.02) * 0.3; // ondulação
        p.vy *= 0.995;

        const alpha = p.life * 0.12; // Bem sutil
        const size = p.size * (0.3 + p.life * 0.7);

        // Glow grande e difuso
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(
          0,
          `hsla(${p.hue}, 100%, 55%, ${alpha * 1.5})`
        );
        gradient.addColorStop(
          0.4,
          `hsla(${p.hue + 10}, 90%, 40%, ${alpha * 0.8})`
        );
        gradient.addColorStop(1, `hsla(${p.hue + 20}, 80%, 25%, 0)`);

        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
