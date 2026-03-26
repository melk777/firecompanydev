"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

export default function EmberCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(0);
  const lastSpawnRef = useRef(0);

  const spawnParticles = useCallback((x: number, y: number) => {
    const now = performance.now();
    // Alta frequência de spawn, mas partículas efêmeras
    if (now - lastSpawnRef.current < 16) return;
    lastSpawnRef.current = now;

    // Aumentar levemente o count para um rastro mais denso
    const count = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 3 + 1), // Move um pouco mais rápido para cima
        life: 1,
        maxLife: 0.4 + Math.random() * 0.6, // Vida levemente mais longa
        size: 0.8 + Math.random() * 2, // Partículas variadas
        hue: 15 + Math.random() * 25, // Laranja mais focado
      });
    }

    if (particlesRef.current.length > 200) {
      particlesRef.current = particlesRef.current.slice(-180);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      spawnParticles(e.clientX, e.clientY);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const decay = 2.0; // Decaimento mais orgânico

    const animate = () => {
      const dt = 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= (dt * decay) / p.maxLife;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.05; // Vai perdendo velocidade vertical
        p.vx *= 0.95; // Vai perdendo direção horizontal

        const alpha = Math.max(0, p.life);
        const size = p.size * (0.5 + alpha * 0.5);

        // Glow com blur
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 50%, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Núcleo um pouco mais quente
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsla(${p.hue + 10}, 100%, 75%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [spawnParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
}
