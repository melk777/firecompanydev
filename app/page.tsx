"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import EmberCursor from "./components/EmberCursor";
import { Globe, Building2, PenTool, Smartphone } from "lucide-react";

const subtitleText = "Inteligência Artificial & Desenvolvimento de Elite";

const typingVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.5,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [responseText, setResponseText] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setShowResponse(false);
      setTimeout(() => {
        setResponseText(
          `Análise concluída. A FireFozDev está pronta para iniciar seu projeto de "${inputValue.trim()}". Como deseja prosseguir?`
        );
        setShowResponse(true);
      }, 50);
    }
  };

  const services = [
    {
      title: "Sistemas Web",
      icon: Globe,
      desc: "Plataformas robustas, escaláveis e ultrarrápidas, desenhadas para expansão contínua.",
    },
    {
      title: "Soluções Corporativas",
      icon: Building2,
      desc: "Arquiteturas sob medida, suportando alta carga e integridade absoluta na nuvem.",
    },
    {
      title: "Design Inteligente",
      icon: PenTool,
      desc: "Interfaces limpas e objetivas. Foco central na conversão e conveniência do usuário.",
    },
    {
      title: "Apps Mobile",
      icon: Smartphone,
      desc: "Aplicações de performance nativa construídas para fluidez e engajamento móvel.",
    },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#020202] text-white">
      {/* Cursor de brasas sutil */}
      <EmberCursor />
      <Navbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center pt-24"
      >
        {/* Título grande com Kerning Negativo e Gradiente */}
        <motion.h1
          initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            textShadow: [
              "0 0 20px rgba(255, 69, 0, 0.15)",
              "0 0 50px rgba(255, 69, 0, 0.4)",
              "0 0 20px rgba(255, 69, 0, 0.15)",
            ],
          }}
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            y: { duration: 1.2, ease: "easeOut" },
            filter: { duration: 1.2, ease: "easeOut" },
            textShadow: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
          className="mb-6 font-sans text-5xl font-black leading-[1.05] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl relative z-10"
          style={{
            backgroundImage: "linear-gradient(to right, #FF4500, #FFD700)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          FireFozDev
        </motion.h1>

        {/* Subtítulo Tecnológico (Typewriter) */}
        <motion.p
          variants={typingVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-xs sm:text-sm font-normal tracking-[0.2em] text-[#888888] uppercase mb-16"
        >
          {subtitleText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Chat IA Simulado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full max-w-xl"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Qual é o seu próximo grande projeto? (Pressione Enter)"
            className="w-full rounded-2xl border border-white/5 bg-white/[0.015] px-6 py-5 text-sm font-medium text-white placeholder-white/20 shadow-inner backdrop-blur-md outline-none transition-all focus:border-[#FF4500]/40 focus:bg-white/[0.03]"
            autoComplete="off"
            spellCheck="false"
          />
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-2xl border border-white/10 bg-[#060606]/80 p-6 text-left text-sm font-light text-[#d1d1d1] shadow-[0_4px_30px_rgba(255,69,0,0.06)] backdrop-blur-xl"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.01 },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="leading-relaxed"
              >
                {responseText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          )}

          {/* CTA Principal: Botão com metal quente derretido animado (Mercúrio em Brasa) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-14"
          >
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-semibold text-white shadow-[0_0_20px_rgba(255,69,0,0.1)] transition-transform duration-300 hover:scale-105 active:scale-95">
              {/* Spinning gradient border (Metal fluido) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,rgba(255,69,0,0.6)_50%,#000000_100%)] opacity-70 group-hover:opacity-100"
              />
              <div className="relative z-10 flex items-center gap-3 rounded-full bg-black/95 px-8 py-4 backdrop-blur-3xl transition-colors duration-500 group-hover:bg-[#0a0200]">
                <span className="text-xs uppercase tracking-[0.15em] text-white/90">
                  Iniciar Parceria
                </span>
                <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ SERVIÇOS DE ELITE (BENTO GRID COM SPOTLIGHT) ═══════════════ */}
      <section id="servicos" className="relative px-6 py-32 md:py-48">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center md:text-left"
          >
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              Serviços de Elite.
            </h2>
            <p className="mt-6 text-sm font-light uppercase tracking-widest text-[#a1a1a1]">
              Engenharia de ponta a ponta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <SpotlightCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-white/5 bg-[#020202] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-16 md:grid-cols-4"
          >
            <div className="flex flex-col items-start md:col-span-1">
              <span
                className="font-sans text-xl font-black tracking-[-0.05em]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF4500, #FFD700)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundClip: "text",
                }}
              >
                FireFozDev
              </span>
              <p className="mt-6 max-w-xs text-xs font-light tracking-wide text-white/30 leading-relaxed">
                Criando experiências audaciosas com tecnologia de ponta, design
                inteligente e alma de brasa.
              </p>
            </div>

            <div className="flex flex-col space-y-5">
              <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white/90">
                Empresa
              </h4>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                Sobre Nós
              </a>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                Carreiras
              </a>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                Contato
              </a>
            </div>

            <div className="flex flex-col space-y-5">
              <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white/90">
                Serviços
              </h4>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                Sistemas Web
              </a>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                Soluções Corporativas
              </a>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                Design Inteligente
              </a>
            </div>

            <div className="flex flex-col space-y-5">
              <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white/90">
                Redes
              </h4>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                X (Twitter)
              </a>
              <a
                href="#"
                className="text-sm font-light text-white/30 transition-colors hover:text-white"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}

// Sub-componente Spotlight Card para isolar a lógica do mouse e o visual premium
function SpotlightCard({ service, index }: { service: any; index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.015] p-8 shadow-inner backdrop-blur-md transition-colors hover:bg-white/[0.03]"
    >
      {/* Efeito Spotlight (Feixe de luz laranja movendo-se com o mouse) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,69,0,0.15), transparent 40%)`,
        }}
      />

      <div className="mb-8 mt-2 inline-flex text-white/30 transition-colors duration-500 group-hover:text-[#FF4500]">
        <Icon strokeWidth={1.5} size={36} />
      </div>

      <h3 className="mb-3 text-xl font-bold tracking-[-0.03em] text-white/90">
        {service.title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-[#8a8a8a]">
        {service.desc}
      </p>
    </motion.div>
  );
}
