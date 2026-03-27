"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Database } from "lucide-react";

export default function AIShowcase() {
  const scrollToForm = () => {
    const section = document.getElementById("briefing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#000000] py-32 overflow-hidden flex items-center">
      {/* Background Decorative Glow (Neural Network Style) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          
          {/* Left Column: Strategic Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-8 order-1 lg:order-1 text-left"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] text-white mb-4">
                FireFozDev AI Core: <br />
                <span className="text-ember">Inteligência Analítica</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium mb-6">
                O cérebro da sua empresa analisando dados em tempo real.
              </p>
              
              <p className="text-[#8a8a8a] text-base md:text-lg font-light leading-relaxed max-w-xl">
                Não tome decisões baseadas em "achismos". Implementamos uma camada de Inteligência Artificial 
                que se integra aos seus sistemas (ERP/CRM/Delivery) para extrair insights acionáveis, 
                prevendo comportamentos e sugerindo ações imediatas para 
                <span className="text-ember font-bold"> aumentar seu lucro</span>.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { 
                  emoji: "📊", 
                  title: "BI Conversacional", 
                  desc: "Pergunte à IA 'Quais meus melhores clientes?' e receba a resposta em segundos." 
                },
                { 
                  emoji: "🎯", 
                  title: "Recuperação Inteligente", 
                  desc: "Identifique automaticamente clientes em risco de churn e crie campanhas." 
                },
                { 
                  emoji: "🚀", 
                  title: "Sugestões de Melhoria", 
                  desc: "Receba dicas geradas por IA para otimizar vendas e estoque." 
                },
                { 
                  emoji: "📈", 
                  title: "Previsão de Demanda", 
                  desc: "Antecipe tendências de compra e ajuste seu estoque com antecedência." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <span className="text-2xl mt-1 grayscale group-hover:grayscale-0 transition-all duration-300">
                    {item.emoji}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white/90 mb-1 leading-tight">{item.title}</h4>
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Specs Small Section */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <Cpu size={16} className="text-[#FF4500] shrink-0" />
                <div>
                  <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Motor</h5>
                  <p className="text-[11px] text-[#555]">OpenAI / Anthropic via API avançada.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldCheck size={16} className="text-[#FF4500] shrink-0" />
                <div>
                  <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Segurança</h5>
                  <p className="text-[11px] text-[#555]">Ambiente privado e dados isolados.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Database size={16} className="text-[#FF4500] shrink-0" />
                <div>
                  <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Integração</h5>
                  <p className="text-[11px] text-[#555]">Conexão direta com seus sistemas e bases de dados.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-semibold text-white shadow-[0_0_20px_rgba(255,69,0,0.1)] transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,rgba(255,69,0,0.6)_50%,#000000_100%)] opacity-70 group-hover:opacity-100"
                />
                <div className="relative z-10 flex items-center gap-3 rounded-full bg-black/95 px-10 py-5 backdrop-blur-3xl transition-colors duration-500 group-hover:bg-[#0a0200]">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-bold">
                    Agendar Demonstração da IA
                  </span>
                  <ArrowRight size={18} className="text-[#FF4500] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Column: AI Core Mockup Projection (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-2"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-[4/3] rounded-3xl border border-[#FF4500]/10 bg-black flex items-center justify-center overflow-hidden group shadow-[0_0_100px_rgba(255,69,0,0.05)]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-tl from-black via-[#080808] to-[#FF4500]/5">
                {/* AI Brain Simulation */}
                <div className="relative h-48 w-48 mb-8">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-[#FF4500]/20 rounded-full blur-[40px]" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 border border-[#FF4500]/30 rounded-full flex items-center justify-center relative overflow-hidden">
                       {/* Floating Points */}
                       {[...Array(8)].map((_, i) => (
                         <motion.div
                           key={i}
                           animate={{ 
                             y: [0, -100, 0], 
                             x: [0, Math.sin(i) * 50, 0],
                             opacity: [0, 1, 0] 
                           }}
                           transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                           className="absolute h-1 w-1 bg-[#FF4500] rounded-full"
                         />
                       ))}
                       <p className="text-white text-xs font-black uppercase tracking-[0.3em] font-sans">AI CORE</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-4 font-sans">
                  Intelligence Layer
                </h3>
              </div>
              
              <div className="absolute bottom-4 right-8 opacity-40">
                 <Image src="/logo.svg" alt="FireFozDev" width={24} height={24} />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
