"use client";

import React, { useState, useCallback, useMemo } from "react";
import { 
  Monitor, 
  Layout, 
  Sparkles, 
  Users, 
  X,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Clock,
  Target,
  MessageSquare,
  CheckCircle2,
  Zap,
  Bot,
  Brain
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

interface StepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sub-componente memoizado para máxima performance
const OptionCard = React.memo(({ option, onSelect, delay }: any) => (
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
    onClick={() => onSelect(option.id)}
    className="step-card group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 text-center transition-all duration-300 hover:border-[#FF4500]/30 hover:bg-white/[0.03] active:scale-[0.98]"
  >
    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none" 
         style={{ background: `radial-gradient(circle at center, ${option.color}, transparent 70%)` }} 
    />

    <div 
      className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/[0.03] border border-white/5 transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/[0.06] group-hover:border-[#FF4500]/20"
      style={{ color: option.color }}
    >
      <option.icon size={28} strokeWidth={1.5} />
    </div>

    <div className="space-y-2">
      <h3 className="text-lg font-bold text-white tracking-tight">
        {option.title}
      </h3>
      <p className="text-xs text-white/40 leading-relaxed max-w-[160px]">
        {option.description}
      </p>
    </div>
  </motion.button>
));

OptionCard.displayName = "OptionCard";

const steps = [
  {
    id: 1,
    title: "O que você precisa?",
    subtitle: "Clique para avançar de etapa",
    options: [
      { id: "mobile-web", title: "Desenvolvimento Mobile ou Web", description: "Apps e websites de alta performance", icon: Monitor, color: "#4F46E5" },
      { id: "discovery", title: "Discovery (Prototipação)", description: "Mapeamento e protótipo do projeto", icon: Layout, color: "#10B981" },
      { id: "ai-automation", title: "IA ou Automação", description: "Fluxos inteligentes e análise de dados", icon: Sparkles, color: "#F59E0B" },
      { id: "outsourcing", title: "Terceirização (Outsourcing)", description: "Apoio em projetos existentes", icon: Users, color: "#EC4899" }
    ]
  },
  {
    id: 2,
    title: "Conectividade",
    subtitle: "Seu sistema precisa se conectar com outros existentes?",
    options: [
      { id: "api", title: "Sim, com API externa", description: "Integração via serviços de terceiros", icon: CheckCircle2, color: "#10B981" },
      { id: "db", title: "Sim, com banco de dados", description: "Conexão direta com base legada", icon: Target, color: "#4F46E5" },
      { id: "none", title: "Não / Não tenho certeza", description: "Novas funcionalidades isoladas", icon: MessageSquare, color: "#7a7a7a" }
    ]
  },
  {
    id: 7,
    title: "Que tipo de sistema você gostaria de desenvolver?",
    subtitle: "Soluções de IA sob medida para sua operação",
    options: [
      { id: "auto-process", title: "Automações de processos", description: "Integração e automação com n8n, Zapier e outras ferramentas", icon: Zap, color: "#F59E0B" },
      { id: "ai-agent", title: "Agente de IA", description: "Assistentes inteligentes com IA conversacional", icon: Bot, color: "#10B981" },
      { id: "custom-llm", title: "Criar um LLM", description: "Modelo de linguagem personalizado para seu negócio", icon: Brain, color: "#4F46E5" }
    ]
  },
  {
    id: 3,
    title: "Progresso da Ideia",
    subtitle: "Como está o desenvolvimento da sua visão?",
    options: [
      { id: "idea-start", title: "Não tenho a ideia formada", description: "Preciso de ajuda no planejamento", icon: Layout, color: "#F59E0B" },
      { id: "idea-ready", title: "Ideia formada e escrita", description: "O escopo está documentado e pronto", icon: CheckCircle2, color: "#10B981" },
      { id: "idea-running", title: "Projeto em andamento", description: "Quero parceria para finalizar", icon: Sparkles, color: "#4F46E5" }
    ]
  },
  {
    id: 4,
    title: "Plataforma Alvo",
    subtitle: "Em qual plataforma você precisa do seu projeto?",
    options: [
      { id: "ios", title: "iOS", description: "Apple App Store", icon: Monitor, color: "#FFFFFF" },
      { id: "android", title: "Android", description: "Google Play Store", icon: CheckCircle2, color: "#A4C639" },
      { id: "both", title: "Ambos (iOS e Android)", description: "Desenvolvimento híbrido premium", icon: Sparkles, color: "#FF4500" }
    ]
  },
  {
    id: 5,
    title: "Sua Empresa",
    subtitle: "Quantos colaboradores tem na sua empresa?",
    options: [
      { id: "emp-small", title: "Entre 1 e 4", description: "Foco total na execução rápida", icon: Users, color: "#10B981" },
      { id: "emp-mid", title: "Entre 4 e 10", description: "Escalando para novos mercados", icon: Users, color: "#4F46E5" },
      { id: "emp-large", title: "Entre 10 e 30", description: "Sólida e em expansão", icon: Users, color: "#F59E0B" },
      { id: "emp-corp", title: "Acima de 30", description: "Soluções corporativas robustas", icon: Target, color: "#EC4899" }
    ]
  },
  {
    id: 6,
    title: "Quase lá! Preencha seus dados",
    subtitle: "Precisamos dessas informações para um especialista contatar você.",
    options: [] // Placeholder for final step
  }
];

export default function StepForm({ isOpen, onClose }: StepFormProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
    deadline: "",
    message: ""
  });

  // Dynamic Step List based on service
  // Default Path: [1, 2, 3, 4, 5, 6]
  // Discovery Path: [1, 2, 3, 5, 6]
  // AI/Automation Path: [1, 2, 7, 3, 5, 6]
  const activeSteps = 
    selectedService === "discovery" ? [1, 2, 3, 5, 6] :
    selectedService === "ai-automation" ? [1, 2, 7, 3, 5, 6] :
    [1, 2, 3, 4, 5, 6];

  const currentStepId = activeSteps[stepIndex];
  const currentStepData = steps.find(s => s.id === currentStepId) || steps[0];
  const totalSteps = activeSteps.length;
  const progressPercent = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const handleSelect = useCallback((optionId: string) => {
    setSelections(prev => ({ ...prev, [currentStepId]: optionId }));
    
    if (currentStepId === 1) {
       setSelectedService(optionId);
    }

    if (stepIndex < activeSteps.length - 1) {
      setTimeout(() => setStepIndex(prev => prev + 1), 300);
    }
  }, [currentStepId, stepIndex, activeSteps.length]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
       const x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
       if (x) {
          const newVal = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
          setFormData(prev => ({ ...prev, [name]: newVal }));
          return;
       }
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setIsSubmitted(false);
        setStepIndex(0);
        setSelections({});
        setSelectedService(null);
        setFormData({ name: "", email: "", phone: "", referral: "", deadline: "", message: "" });
      }, 500);
    }, 2500);
  }, [onClose, selectedService, activeSteps, selections, formData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-[#020202]/95 backdrop-blur-md px-4 py-12 overflow-y-auto overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-[760px] my-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/80 p-8 sm:p-12 shadow-3xl backdrop-blur-3xl"
      >
        {!isSubmitted && (
          <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-10">
            {stepIndex > 0 ? (
              <button 
                onClick={() => setStepIndex(stepIndex - 1)}
                className="group flex items-center gap-2 rounded-full bg-white/5 py-2 px-4 text-[10px] font-bold uppercase tracking-widest text-white/40 transition-all hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                Voltar
              </button>
            ) : <div />}
            
            <button 
              onClick={onClose}
              className="group rounded-full bg-white/5 p-2 text-white/30 transition-all hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        )}

        <div className="mt-6 mb-12 flex flex-col items-center">
           <div className="relative h-7 w-36">
             <NextImage 
               src="/logo.svg" 
               alt="FireFozDev"
               fill
               priority
               className="object-contain"
             />
           </div>
           <div className="mt-3 flex gap-1">
              <div className="h-1 w-1 rounded-full bg-[#FF4500]" />
              <div className="h-1 w-6 rounded-full bg-gradient-to-r from-[#FF4500] to-transparent opacity-50" />
           </div>
        </div>

        <div className="mb-14 flex flex-col items-center w-full max-w-[400px] mx-auto">
           <div className="mb-4 flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF4500]">
                 Etapa {stepIndex + 1} de {totalSteps}
              </span>
           </div>
           
           <div className={`grid gap-2 w-full h-[6px]`} 
                style={{ gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))` }}>
              {activeSteps.map((id, idx) => (
                <div 
                  key={id}
                  className={`relative rounded-full transition-all duration-700 overflow-hidden ${
                    idx < stepIndex 
                      ? "bg-[#FF4500]" 
                      : idx === stepIndex 
                        ? "bg-white/20" 
                        : "bg-white/5"
                  }`}
                >
                   {idx === stepIndex && (
                     <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                     />
                   )}
                   {idx < stepIndex && (
                     <div className="absolute inset-0 shadow-[0_0_15px_rgba(255,69,0,0.4)]" />
                   )}
                </div>
              ))}
           </div>
           
           <span className="mt-5 text-[10px] font-bold tracking-widest text-white/20 uppercase">
              {progressPercent}% Carregado
           </span>
        </div>

        {!isSubmitted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center w-full"
            >
              <div className="mb-12 text-center max-w-[500px]">
                <h2 className="text-2xl font-black text-white sm:text-3xl mb-2 tracking-tight leading-[1.1]">
                  {currentStepData.title}
                </h2>
                <p className="text-2xl font-medium text-white sm:text-3xl tracking-tight">
                  {currentStepData.subtitle}
                </p>
              </div>
            
              {currentStepId !== 6 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
                  {currentStepData.options.map((option, idx) => (
                    <OptionCard 
                      key={option.id}
                      option={option}
                      onSelect={handleSelect}
                      delay={idx * 0.03}
                    />
                  ))}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Nome Completo</label>
                       <input 
                         required
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleInputChange}
                         placeholder="Seu nome"
                         className="w-full rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder:text-white/10 focus:border-[#FF4500]/50 focus:bg-white/[0.05] outline-none transition-all"
                       />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">E-mail Corporativo</label>
                       <input 
                         required
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         placeholder="seu@empresa.com"
                         className="w-full rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder:text-white/10 focus:border-[#FF4500]/50 focus:bg-white/[0.05] outline-none transition-all"
                       />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Telefone / WhatsApp</label>
                       <input 
                         required
                         type="tel" 
                         name="phone"
                         value={formData.phone}
                         onChange={handleInputChange}
                         placeholder="(11) 99999-9999"
                         className="w-full rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder:text-white/10 focus:border-[#FF4500]/50 focus:bg-white/[0.05] outline-none transition-all"
                       />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Como nos conheceu?</label>
                       <select 
                         name="referral"
                         value={formData.referral}
                         onChange={handleInputChange}
                         className="w-full h-[58px] rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-white outline-none transition-all focus:border-[#FF4500]/50 focus:bg-white/[0.05] appearance-none"
                       >
                         <option value="" className="bg-[#0a0a0a]">Selecione...</option>
                         <option value="google" className="bg-[#0a0a0a]">Google</option>
                         <option value="linkedin" className="bg-[#0a0a0a]">LinkedIn</option>
                         <option value="instagram" className="bg-[#0a0a0a]">Instagram</option>
                         <option value="fb" className="bg-[#0a0a0a]">Facebook</option>
                         <option value="refer" className="bg-[#0a0a0a]">Indicação</option>
                         <option value="other" className="bg-[#0a0a0a]">Outro</option>
                       </select>
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Prazo Desejado</label>
                       <select 
                         name="deadline"
                         value={formData.deadline}
                         onChange={handleInputChange}
                         className="w-full h-[58px] rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-white outline-none transition-all focus:border-[#FF4500]/50 focus:bg-white/[0.05] appearance-none"
                       >
                         <option value="" className="bg-[#0a0a0a]">Opcional...</option>
                         <option value="1-3" className="bg-[#0a0a0a]">1-3 meses</option>
                         <option value="3-6" className="bg-[#0a0a0a]">3-6 meses</option>
                         <option value="6+" className="bg-[#0a0a0a]">6+ meses</option>
                         <option value="flex" className="bg-[#0a0a0a]">Flexível</option>
                       </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Conte-nos mais sobre seu projeto</label>
                     <textarea 
                       name="message"
                       value={formData.message}
                       onChange={handleInputChange}
                       placeholder="Descreva brevemente o que você busca..."
                       className="w-full h-32 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder:text-white/10 focus:border-[#FF4500]/50 focus:bg-white/[0.05] outline-none transition-all resize-none"
                     />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-[#FF4500] text-sm font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-[#FF8C00] hover:shadow-[0_0_50px_rgba(255,69,0,0.3)] hover:scale-[1.01] active:scale-[0.98]"
                  >
                    Enviar solicitação
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-20"
          >
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/[0.02] border border-[#10B981]/50 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
               <CheckCircle2 size={48} className="text-[#10B981]" />
            </div>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Solicitação Enviada!</h2>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest font-medium">
               Obrigado pelo interesse. Um especialista entrará em contato em breve.
            </p>
          </motion.div>
        )}

        <div className="mt-16 flex flex-col items-center border-t border-white/5 pt-10">
           <div className="flex items-center gap-3 opacity-10">
              <div className="h-1 w-10 bg-white" />
              <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white">
                 FireFoz Precision Delivery
              </p>
              <div className="h-1 w-10 bg-white" />
           </div>
        </div>
      </motion.div>
    </div>
  );
}
