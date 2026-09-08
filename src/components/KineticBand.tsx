import React from "react";
import { motion, useReducedMotion } from "motion/react";

const COPY = "GERAK · BELAJAR · BERTUMBUH · BERDAMPAK · ";

export const KineticBand: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative z-20 overflow-hidden border-y border-[#36BBD3]/20 bg-[#041217] py-4" aria-hidden="true">
      <motion.div
        className="flex w-max whitespace-nowrap font-sans text-4xl font-black tracking-[-0.055em] text-transparent sm:text-6xl"
        style={{ WebkitTextStroke: "1px rgba(54,187,211,.34)" }}
        animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span className="pr-5">{COPY.repeat(3)}</span>
        <span className="pr-5">{COPY.repeat(3)}</span>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#041217] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#041217] to-transparent" />
    </div>
  );
};
