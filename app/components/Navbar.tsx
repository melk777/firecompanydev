"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/10 bg-[#080808]/40 px-6 py-3 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <a
          href="#home"
          className="text-sm font-black tracking-[-0.05em] text-white/90"
        >
          FireFozDev
        </a>

        <nav className="flex items-center gap-7">
          <a
            href="#home"
            className="text-[11px] font-medium uppercase tracking-widest text-white/40 transition-colors duration-300 hover:text-white"
          >
            Home
          </a>
          <a
            href="#servicos"
            className="text-[11px] font-medium uppercase tracking-widest text-white/40 transition-colors duration-300 hover:text-white"
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="text-[11px] font-medium uppercase tracking-widest text-white/40 transition-colors duration-300 hover:text-white"
          >
            Contato
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
