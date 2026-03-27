"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowthShowcase() {
  const scrollToForm = () => {
    const section = document.getElementById("briefing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#000000] py-32 overflow-hidden flex items-center">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          
          {/* Left Column: Mockup Image Projection (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-[4/3] rounded-3xl border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden group shadow-2xl"
            >
              {/* Espaço reservado para a imagem */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-black via-black to-[#FF4500]/10">
                <div className="mb-4 h-16 w-16 rounded-full bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                  <Image src="/logo.svg" alt="FireFozDev" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Growth Platform</h3>
                <p className="text-white/20 text-xs max-w-[200px] uppercase font-bold leading-relaxed">
                   Espaço reservado para o mockup da Plataforma de Crescimento
                </p>
                
                {/* Simulated Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF4500]/5 rounded-full blur-[80px] pointer-events-none" />
              </div>
              
              {/* Nota para o usuário */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                  Insira o arquivo mockup-growth.png aqui
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Strategic Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-8 order-1 lg:order-2 text-left"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Plataforma de Crescimento & <br />
                <span className="text-ember font-black">CRM Automatizado</span>
              </h2>
              
              <p className="text-[#8a8a8a] text-base md:text-lg font-light leading-relaxed max-w-xl">
                Desenvolvemos o motor de aquisição de clientes para empresas de serviços, 
                unindo captação de leads com automação de ponta a ponta na marca 
                <span className="text-ember font-bold"> FireFozDev</span>.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { 
                  emoji: "🎯", 
                  title: "Captação de Leads", 
                  desc: "Landing pages de alta conversão para tráfego pago." 
                },
                { 
                  emoji: "🤖", 
                  title: "Automação Completa", 
                  desc: "Nutrição de leads via e-mail e WhatsApp automatizado." 
                },
                { 
                  emoji: "📊", 
                  title: "Dashboard de Performance", 
                  desc: "Visualização clara do ROI e conversão de vendas." 
                },
                { 
                  emoji: "🗓️", 
                  title: "Agendamento Online", 
                  desc: "Calendário integrado para agendamento de reuniões." 
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
                    Agendar Demonstração
                  </span>
                  <ArrowRight size={18} className="text-[#FF4500] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
