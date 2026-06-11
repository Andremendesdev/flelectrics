"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronDown } from "lucide-react";
import HeroFeatureBadges from "./HeroFeatureBadges";
import FloatingParticles from "./effects/FloatingParticles";
import { useLoading } from "./LoadingProvider";

const WHATSAPP_URL = "https://wa.me/1234567890";

const SCROLL_RUNWAY_VH = 230;

const Hero = () => {
  const { heroReady } = useLoading();
  const runwayRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  const scooterX = useTransform(scrollYProgress, [0, 1], ["0vw", "-62vw"]);
  const scooterOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55, 0.9], [1, 0.85, 0.4]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15, 0.45], [1, 0.6, 0]);

  return (
    <section
      ref={runwayRef}
      className="relative -mt-20"
      style={{ height: `${SCROLL_RUNWAY_VH}vh` }}
    >
      <div className="sticky top-0 min-h-[85svh] md:min-h-[921px] h-[100svh] md:h-[921px] flex items-center pt-28 pb-16 md:pt-margin-desktop md:pb-margin-desktop px-gutter md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-container-lowest">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={
              heroReady
                ? {
                    scale: [1.0, 1.03, 1.0],
                    opacity: 1,
                  }
                : { scale: 1.1, opacity: 0 }
            }
            transition={{
              opacity: { duration: 1.2, ease: "easeOut" },
              scale: {
                duration: 12,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            src="/fundo1.png"
            alt=""
            className="w-full h-full object-cover object-center md:object-[center_62%]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent z-[1]" />
          <motion.div
            style={{ x: scooterX, opacity: scooterOpacity }}
            className="absolute right-[-64%] max-[480px]:right-[-70%] sm:right-[-14%] md:right-[-14%] bottom-[2%] sm:bottom-[8%] w-[166vw] max-[480px]:w-[176vw] sm:w-[115vw] md:w-auto md:h-[95%] md:max-w-[100%] md:scale-[1.3] pointer-events-none z-[2] will-change-transform origin-bottom-right"
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, x: "42vw" }}
              animate={
                heroReady ? { opacity: 1, x: 0 } : { opacity: 0, x: "42vw" }
              }
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
            >
              <img
                src="/scooter.png"
                alt=""
                className="w-full h-auto max-h-[81svh] max-[480px]:max-h-[88svh] sm:max-h-[75svh] md:h-full md:max-h-none object-contain object-bottom brightness-[0.76] contrast-[1.06]"
              />
            </motion.div>
          </motion.div>
          <FloatingParticles count={10} opacityScale={0.55} className="z-[3]" />
        </div>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-margin-desktop items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={heroReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[10px] font-medium tracking-[0.12em] uppercase text-sky-400 bg-gradient-to-r from-blue-600/20 to-sky-400/10 px-2 py-0.5 rounded-full border border-blue-600/50"
            >
              Economia, tecnologia e mobilidade
            </motion.span>

            <h1 className="mt-8 md:mt-12 font-headline-xl text-on-surface leading-tight">
              <div className="text-headline-md">
                Scooters Elétricas.
                <br />
              </div>
              <span className="text-5xl md:text-6xl font-black text-neon-sky-soft">
                FL Electrics
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-12 md:mt-16 font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed"
            >
              O Futuro da Mobilidade Elétrica começa hoje em Piraju
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto items-center sm:items-start"
            >
              <a
                href={WHATSAPP_URL}
                className="neon-blue-btn inline-flex items-center justify-center gap-base font-label-md text-label-md bg-gradient-to-b from-sky-400 to-blue-700 text-white px-8 py-4 rounded-full w-full sm:w-auto hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Solicitar Orçamento
                <ArrowRight size={18} />
              </a>
              <a
                href="#models"
                className="btn-border-trail-light group w-full sm:w-auto flex justify-center hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
              >
                <span className="relative z-10 inline-flex items-center justify-center gap-base font-label-md text-label-md bg-transparent text-white rounded-full px-8 py-4 w-full sm:w-auto group-hover:text-sky-200 transition-colors duration-300">
                  Ver Modelos
                  <ChevronRight size={18} />
                </span>
              </a>
            </motion.div>

            <HeroFeatureBadges />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-sky-400/70 pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.2em] uppercase">Role para mover</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
