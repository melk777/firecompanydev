"use client";

import Spline from '@splinetool/react-spline/next';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] w-full flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/JNMRI6HEE2TEQcnE/scene.splinecode"
        />
      </div>
      <div className="relative z-10 pointer-events-none">
        <h1
          className="font-sans font-bold text-5xl leading-[1.05] tracking-tighter md:text-8xl drop-shadow-md"
          style={{
            background:
              "linear-gradient(135deg, #fff 0%, #ffcba4 30%, #ff7b3a 55%, #e84520 80%, #fff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          FireFozDev
        </h1>
      </div>
    </section>
  );
}
