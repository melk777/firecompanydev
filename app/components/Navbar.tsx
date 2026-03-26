"use client";

export default function Navbar() {
  return (
    <header className="relative fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-sm font-bold tracking-tighter text-zinc-50"
        >
          Firecompanydev
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-zinc-50/70 transition-colors hover:text-zinc-50"
          >
            Home
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium text-zinc-50/70 transition-colors hover:text-zinc-50"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-zinc-50/70 transition-colors hover:text-zinc-50"
          >
            Contato
          </a>
        </nav>
      </div>

      <div className="absolute inset-0 -z-10 bg-black/70 backdrop-blur border-b border-white/10" />
    </header>
  );
}

