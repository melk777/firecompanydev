"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";

interface Company {
  name: string;
  src: string;
  color: string;
  heightClasses: string;
}

const companies: Company[] = [
  {
    name: "OpenAI",
    src: "https://svgl.app/library/openai-wordmark.svg",
    color: "#ffffff",
    heightClasses: "h-7 sm:h-9"
  },
  {
    name: "DeepSeek",
    src: "https://raw.githubusercontent.com/deepseek-ai/DeepSeek-V3/main/figures/logo.svg",
    color: "#4d71f1",
    heightClasses: "h-8 sm:h-10"
  },
  {
    name: "Stripe",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    color: "#635BFF",
    heightClasses: "h-8 sm:h-10"
  },
  {
    name: "AWS",
    src: "https://svgl.app/library/aws_dark.svg",
    color: "#FF9900",
    heightClasses: "h-8 sm:h-10"
  },
  {
    name: "Firebase",
    src: "https://svgl.app/library/firebase_wordmark.svg",
    color: "#FFA611",
    heightClasses: "h-10 sm:h-12"
  },
  {
    name: "Mercado Pago",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Mercado_Pago_logo.svg",
    color: "#009EE3",
    heightClasses: "h-8 sm:h-10"
  },
  {
    name: "Binance",
    src: "https://raw.githubusercontent.com/WalkxCode/dashboard-icons/refs/heads/main/svg/binance.svg",
    color: "#F3BA2F",
    heightClasses: "h-7 sm:h-9"
  },
  {
    name: "GitHub",
    src: "https://svgl.app/library/github_dark.svg",
    color: "#ffffff",
    heightClasses: "h-7 sm:h-9"
  },
  {
    name: "Google Cloud",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    color: "#4285F4",
    heightClasses: "h-8 sm:h-10"
  },
];

const infiniteCompanies = [...companies, ...companies];

export default function TrustedBy() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-black/50 py-16 backdrop-blur-sm">
      <div className="mb-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          Tecnologias & Parceiros
        </span>
      </div>

      <div className="flex select-none overflow-hidden group relative">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {infiniteCompanies.map((company, index) => (
            <div 
              key={`${company.name}-${index}`} 
              className="mx-12 sm:mx-16 flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110"
            >
              <div className={`relative ${company.heightClasses} aspect-[4/1] w-auto inline-flex items-center justify-center`}>
                <NextImage
                  src={company.src}
                  alt={company.name}
                  width={140}
                  height={40}
                  priority={index < 4}
                  className="object-contain h-full w-auto"
                  draggable={false}
                />
              </div>
              <span className="sr-only">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#020202] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#020202] to-transparent z-10" />
    </div>
  );
}

