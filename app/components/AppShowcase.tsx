"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AppShowcase() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-12 lg:gap-24">
          
          {/* Left Column: Mockup Image with Motion */}
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
              className="relative w-full aspect-[4/3] drop-shadow-[0_20px_100px_rgba(255,69,0,0.2)]"
            >
              <Image
                src="/mockup-final.png"
                alt="Mockup Foz Express Delivery"
                fill
                className="object-contain"
                priority
              />
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
                Infraestrutura de <br />
                <span className="text-ember">Delivery & Gestão</span>
              </h2>
              
              <p className="text-[#8a8a8a] text-base md:text-lg font-light leading-relaxed max-w-xl">
                Desenvolvemos o ecossistema completo de vendas para operações de Food Service, 
                eliminando taxas de marketplaces e centralizando o controle na marca 
                <span className="text-ember font-bold"> FireFozDev</span>.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { 
                  emoji: "⚡", 
                  title: "Performance High-End", 
                  desc: "Carregamento instantâneo via Vercel Edge." 
                },
                { 
                  emoji: "📲", 
                  title: "App Mobile Nativo", 
                  desc: "Experiência fluida para o cliente final (iOS/Android)." 
                },
                { 
                  emoji: "📊", 
                  title: "Dashboard Admin", 
                  desc: "Gestão em tempo real de pedidos e faturamento." 
                },
                { 
                  emoji: "💳", 
                  title: "Checkout Integrado", 
                  desc: "Pagamentos seguros via Stripe, Mercado Pago e Pix nativo." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="text-2xl mt-1 grayscale group-hover:grayscale-0 transition-all duration-300">
                    {item.emoji}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white/90 mb-1">{item.title}</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">{item.desc}</p>
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
