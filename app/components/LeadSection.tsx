"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  Send, 
  Loader2, 
  ArrowRight,
  Briefcase,
  Mail,
  User,
  MessageSquare
} from "lucide-react";

export default function LeadSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    branch: "",
    email: "",
    details: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappValid, setWhatsappValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  // WhatsApp Mask: +55 (99) 99999-9999
  const handleWhatsappChange = (value: string) => {
    const digits = value.replace(/\D/g, "");
    let masked = digits;
    if (digits.length > 0) masked = "+" + digits.substring(0, 2);
    if (digits.length > 2) masked += " (" + digits.substring(2, 4) + ")";
    if (digits.length > 4) masked += " " + digits.substring(4, 9);
    if (digits.length > 9) masked += "-" + digits.substring(9, 13);
    
    setFormData({ ...formData, whatsapp: masked.substring(0, 19) });
    setWhatsappValid(digits.length >= 12);
  };

  // Corporate Email Validation
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isCorporate = !/gmail|hotmail|outlook|yahoo|icloud|live/i.test(email);
    setFormData({ ...formData, email });
    setEmailValid(regex.test(email) && isCorporate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="briefing" className="relative isolate overflow-hidden bg-[#020202] px-6 py-32 md:py-48">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4500]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          
          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl text-white">
              Pronto para <span className="text-ember">Inovar e Escalar?</span>
            </h2>
            <p className="max-w-md text-lg font-light leading-relaxed text-[#8a8a8a]">
              Nossa equipe técnica de elite analisará seu projeto detalhadamente para criar uma solução sob medida. 
              Receba um diagnóstico técnico completo em até 24 horas.
            </p>
            
            <div className="mt-8 flex flex-col space-y-6">
               <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] text-[#FF4500]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/90">Análise de IA Gratuita</h4>
                    <p className="text-xs text-[#666666]">Mapeamos as melhores oportunidades de automação para o seu negócio.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] text-[#FF4500]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/90">Tech Stack Moderna</h4>
                    <p className="text-xs text-[#666666]">Utilizamos ferramentas de vanguarda como Retell, OpenAI e Next.js.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-3xl md:p-12"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Nome */}
                    <div className="group flex flex-col space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#666666] group-focus-within:text-[#FF4500]">
                        Nome Completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          required
                          type="text"
                          placeholder="Ex: João Silva"
                          className="w-full rounded-2xl border border-white/5 bg-white/[0.03] py-4 pl-12 pr-4 text-sm text-white placeholder-white/10 transition-all focus:border-[#FF4500]/50 focus:bg-white/[0.05] focus:outline-none focus:ring-[1px] focus:ring-[#FF4500]/20"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="group flex flex-col space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#666666] group-focus-within:text-[#FF4500]">
                        WhatsApp
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          required
                          type="text"
                          placeholder="+55 (11) 99999-9999"
                          className="w-full rounded-2xl border border-white/5 bg-white/[0.03] py-4 pl-12 pr-12 text-sm text-white placeholder-white/10 transition-all focus:border-[#FF4500]/50 focus:bg-white/[0.05] focus:outline-none focus:ring-[1px] focus:ring-[#FF4500]/20"
                          value={formData.whatsapp}
                          onChange={(e) => handleWhatsappChange(e.target.value)}
                        />
                        {whatsappValid && (
                          <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FF4500]" size={18} />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Ramo */}
                    <div className="group flex flex-col space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#666666] group-focus-within:text-[#FF4500]">
                        Ramo da Empresa
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          required
                          type="text"
                          placeholder="Ex: E-commerce, Saúde, etc."
                          className="w-full rounded-2xl border border-white/5 bg-white/[0.03] py-4 pl-12 pr-4 text-sm text-white placeholder-white/10 transition-all focus:border-[#FF4500]/50 focus:bg-white/[0.05] focus:outline-none focus:ring-[1px] focus:ring-[#FF4500]/20"
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group flex flex-col space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#666666] group-focus-within:text-[#FF4500]">
                        E-mail Corporativo
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          required
                          type="email"
                          placeholder="seu@empresa.com"
                          className={`w-full rounded-2xl border bg-white/[0.03] py-4 pl-12 pr-4 text-sm text-white placeholder-white/10 transition-all focus:bg-white/[0.05] focus:outline-none focus:ring-[1px] ${
                            formData.email && !emailValid 
                            ? "border-red-500/50 focus:border-red-500" 
                            : "border-white/5 focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20"
                          }`}
                          value={formData.email}
                          onChange={(e) => validateEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Detalhes do Projeto */}
                  <div className="group flex flex-col space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#666666] group-focus-within:text-[#FF4500]">
                      Detalhes do Projeto
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva seu projeto. Qual problema você quer resolver com IA ou Automação?"
                      className="w-full resize-none rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-white placeholder-white/10 transition-all focus:border-[#FF4500]/50 focus:bg-white/[0.05] focus:outline-none focus:ring-[1px] focus:ring-[#FF4500]/20"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={`pulsing-glow mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF4500] to-[#FF8C00] py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-2xl transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Briefing do Projeto
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Message */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center space-y-6 py-12 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FF4500]/10 text-[#FF4500] shadow-[0_0_40px_rgba(255,69,0,0.2)]">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Projeto Recebido!</h3>
                    <p className="max-w-xs text-sm font-light text-[#8a8a8a]">
                      Analizaremos os detalhes técnicos e entraremos em contato em até <span className="text-[#FF4500] font-bold">24h</span>.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#FF4500] hover:underline"
                  >
                    Enviar outro projeto
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
