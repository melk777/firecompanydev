"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Flame,
  Layers,
  PenTool,
} from "lucide-react";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Navbar from "./components/Navbar";

function ProjectCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rxSpring = useSpring(rx, { stiffness: 260, damping: 26, mass: 0.2 });
  const rySpring = useSpring(ry, { stiffness: 260, damping: 26, mass: 0.2 });

  return (
    <motion.article
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        // Pequena inclinação em 3D mantendo o minimalismo.
        ry.set((px - 0.5) * 10);
        rx.set((0.5 - py) * 10);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={
        {
          rotateX: rxSpring,
          rotateY: rySpring,
          transformPerspective: 900,
          willChange: "transform",
        } as CSSProperties
      }
      className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors"
    >
      <div className="flex items-start gap-3">
        <Icon size={20} className="mt-1 text-white/85" strokeWidth={1.5} />
        <div>
          <h3 className="text-sm font-bold tracking-tighter text-white/90">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glowEl = glowRef.current;
    if (!glowEl) return;

    glowEl.style.setProperty("--mx", "50%");
    glowEl.style.setProperty("--my", "30%");

    let raf = 0;
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        glowEl.style.setProperty("--mx", `${x}%`);
        glowEl.style.setProperty("--my", `${y}%`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const projects = [
    {
      title: "Experiências",
      description: "Interfaces rápidas com atenção aos detalhes.",
      Icon: Flame,
    },
    {
      title: "Sistemas",
      description: "Componentes consistentes, do design ao produto.",
      Icon: Layers,
    },
    {
      title: "Construção",
      description: "Do mínimo ao refinado, sem excesso visual.",
      Icon: PenTool,
    },
  ] as const;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-zinc-50">
      <Navbar />
      <div aria-hidden className="absolute inset-0 bg-black" />

      {/* Atmosphere: gradiente radial de brasa seguindo o mouse. */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 blur-[120px] opacity-[0.28] bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(26,4,4,1),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 text-center sm:pt-24">
        <section
          id="home"
          className="flex min-h-[70vh] flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-4xl leading-[1.05] tracking-tighter md:text-7xl"
          >
            FireCompanyDev
          </motion.h1>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group mt-10 inline-flex items-center gap-2 rounded-full border-[1px] border-solid border-white/30 px-6 py-3 text-sm font-medium tracking-wide text-white/90 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#450a0a] hover:bg-[#450a0a]/10 hover:shadow-[0_0_0_1px_rgba(69,10,10,0.65),0_0_18px_rgba(69,10,10,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            <span>Começar</span>
            <ArrowRight
              size={16}
              className="opacity-80 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </motion.button>
        </section>

        <section id="projetos" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
          <h2 className="text-sm font-bold tracking-tighter text-white/90">
            Projetos
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-24 pb-20 pt-6 sm:pb-24 sm:pt-8"
        >
          <h2 className="text-sm font-bold tracking-tighter text-white/90">
            Contato
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Use este espaço para links sociais, e-mail ou um formulário.
          </p>
        </section>
      </div>
    </main>
  );
}
