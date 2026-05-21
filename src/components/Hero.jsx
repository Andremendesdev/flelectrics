import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[921px] flex items-center pt-margin-desktop pb-margin-desktop px-gutter md:px-margin-desktop overflow-hidden -mt-20">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-surface-container-lowest">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: [1.0, 1.05, 1.0],
            x: [0, -8, 0],
            y: [0, -4, 0],
            opacity: 0.4,
          }}
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },

            scale: {
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },

            x: {
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },

            y: {
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgaO14nXfX9BrlfGJaiY21Ek5kKr3tTDxIpAq7CA_3_H3N_HOA4moK6t6HtncTKYtHaPRZXVbvHzw7I-CKAzPPKv9jNTX1BoVlVtwm6vGsoebeds7fdjhzYVyFk_aqVWdgBbQN88Ls03h7cOxoBfjYa-5AMfDSeIKs96RFetVnZUSXIr35f73RcjmpM2usVsuN9ISWy3C0DePK_srU_MY89aUmU4aX0P3QadCSQ2GRUyPJc9Gf354bYMk21xAcfrAou05JIhUQWgPK"
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-margin-desktop items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-gutter"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-label-md text-label text-primary-fixed tracking-[0.2em] bg-primary-fixed/10 px-3 py-2 rounded-full border border-primary-fixed/20"
          >
            Potência e Economia
          </motion.span>

          <h1 className="font-headline-xl  text-on-surface">
            <div className="text-headline-md">
              Scooters Elétricas.
              <br />
            </div>
            <span className="text-transparent text-headline-xl bg-clip-text bg-gradient-to-r from-primary-fixed to-primary-fixed-dim">
              Smart Mobility
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Chega de perder tempo no tráfego. Nossas scooters elétricas oferecem
            agilidade, autonomia confiável e tecnologia avançada que simplifica
            o seu deslocamento.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-gutter flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/1234567890"
              className="inline-flex items-center justify-center gap-base font-label-md text-label-md bg-primary-container text-on-primary-container px-8 py-4 rounded-full hover:glow-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Descubra a Liberdade
              <ArrowRight size={18} />
            </a>
            <a
              href="#models"
              className="inline-flex items-center justify-center gap-base font-label-md text-label-md bg-transparent border border-primary-fixed text-primary-fixed px-8 py-4 rounded-full hover:bg-primary-fixed hover:text-on-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore Modelos
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
