"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { 
  Smartphone, 
  LayoutDashboard, 
  Sparkles, 
  MessageSquare,
  ArrowUpRight
} from "lucide-react";

const portfolioServices = [
  {
    title: "Desenvolvimento Core",
    desc: "Aplicativos Mobile e Web Progressivos de alta performance.",
    caseStudy: "Experiência nativa fluida com 60fps constantes.",
    icon: Smartphone,
    stack: ["React Native", "Next.js", "PWA"],
    color: "rgba(255, 69, 0, 0.15)"
  },
  {
    title: "Sistemas & CRM",
    desc: "Soluções de gestão customizadas com dashboards inteligentes.",
    caseStudy: "Automação de fluxos que economiza 20h/semana.",
    icon: LayoutDashboard,
    stack: ["TypeScript", "Node.js", "PostgreSQL"],
    color: "rgba(255, 215, 0, 0.1)"
  },
  {
    title: "IA Interna",
    desc: "Implementação de LLMs e modelos de dados para eficiência.",
    caseStudy: "Redução de 70% no tempo de busca documental.",
    icon: Sparkles,
    stack: ["OpenAI", "LangChain", "Vector DB"],
    color: "rgba(255, 69, 0, 0.2)"
  },
  {
    title: "Automação & Chatbots",
    desc: "Agentes de atendimento humanizados e fluxos de WhatsApp.",
    caseStudy: "Redução de 40% no tempo de espera (Estilo Retell).",
    icon: MessageSquare,
    stack: ["Retell AI", "Stripe", "Vercel"],
    color: "rgba(255, 140, 0, 0.15)"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative isolate px-6 py-32 md:py-48 bg-[#020202]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col items-center text-center space-y-4"
        >
          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-7xl text-ember">
            Serviços e Portfólio
          </h2>
          <p className="max-w-2xl text-sm font-light uppercase tracking-[0.3em] text-[#888888]">
            Vanguarda tecnológica para empresas de elite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {portfolioServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <button className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-[#FF4500]/50 hover:bg-[#FF4500]/5 hover:shadow-[0_0_30px_rgba(255,69,0,0.2)]">
            Solicitar Demonstração
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 shadow-2xl backdrop-blur-3xl transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05]"
    >
      {/* Interactive Spotlight Background */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${service.color}, transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] text-white/40 transition-all duration-500 group-hover:bg-[#FF4500]/10 group-hover:text-[#FF4500] group-hover:shadow-[0_0_20px_rgba(255,69,0,0.2)]">
          <Icon strokeWidth={1.5} size={28} />
        </div>

        <h3 className="mb-4 text-2xl font-bold tracking-tight text-white/95">
          {service.title}
        </h3>
        <p className="mb-6 text-sm font-light leading-relaxed text-[#999999]">
          {service.desc}
        </p>

        {/* Case Study Box */}
        <div className="mb-8 rounded-2xl bg-white/5 p-4 border border-white/5">
           <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#FF4500]/80 mb-1">
             Impacto Real
           </p>
           <p className="text-xs font-medium text-white/80">
             {service.caseStudy}
           </p>
        </div>
      </div>

      <div className="relative z-10 mt-auto flex flex-wrap gap-2">
        {service.stack.map((item: string) => (
          <span 
            key={item} 
            className="rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-tighter text-white/40 border border-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
