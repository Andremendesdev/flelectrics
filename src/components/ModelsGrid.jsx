import React from "react";
import { motion } from "framer-motion";
import ModelCard from "./ModelCard";

const modelsData = [
  {
    id: "sm-1",
    badge: {
      text: "URBANA",
      style: "bg-surface-container-high text-primary-fixed",
    },
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA02-LT4T_Zex1bYYZcE4M0bY2coDULfARsf7B-HGMrkZJK14H53zw4N4OCxBE9YFXKsEkE4vLMsdYrZ8NZ5kZCF2b2vEK5txY3czdf4WRPEtMqvFH14GckJqB_BTSG8VEAOvT8Jte3sKCXJ0Fj8OMyIJNCw5PbB7RRrGN_TXoV6J_9zL9fhSG2SLzoHRxC4HrXlvqEm4aadHN6z_7-7ymVuFnMrnRSaWEe4g7PjrR0j3KXvxQQM3zyZbHyyqUCwGfANOBKux8j1e3J",
    imageAlt: "Patinete Elétrica SM-1 City, design minimalista preto fosco",
    name: "SM-1 CITY",
    description:
      "Para quem cansou de ser humilhado no transporte público todos os dias. Leve, ágil e letal contra o trânsito.",
    range: "40 km",
    topSpeed: "25 km/h",
    ctaText: "Compre Agora",
    ctaStyle:
      "border border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-container",
  },
  {
    id: "sm-pro",
    badge: {
      text: "PRO",
      style: "bg-primary-container text-on-primary-container",
    },
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnEXiUMx9WZmcn95P0c4ma0Oc2NkDgnOsQV0J8MFaciYpqwq_30NNZ63GdJ8UXEH6uWwbZNXO7M9yTQaRgDQLZCW5Qfw85zcU6tQXcTrMyoqCwIB9mVuWnuGJyoCk6GK_BqKczyxJkfZSXVhxLq8jm_uXutZ0NNgrTa-AWXgtuWu3A-T7Jap3ZkhZpyJBTwcliz97qWRu1gzHFLqmEzuYvBWMjgGpSuII7YZFoSLmKeKaJIaXIcohLQ1Swiv-kUgwgaijt39DxfqRR",
    imageAlt:
      "Patinete Elétrica SM-PRO Apex, chassi reforçado com suspensão dupla",
    name: "SM-PRO APEX",
    description:
      "Potência brutal. Se você quer apenas brincar, compre um patinete infantil. Isso aqui é para quem quer mandar nas ruas.",
    range: "75 km",
    topSpeed: "45 km/h",
    ctaText: "Compre Agora",
    ctaStyle:
      "bg-primary-container text-on-primary-container hover:glow-primary",
    cardHighlight:
      "border-primary-fixed/30 shadow-[0_0_15px_rgba(160,251,0,0.05)]",
  },
  {
    id: "sm-eco",
    badge: {
      text: "ECO",
      style: "bg-secondary-container text-on-secondary-container",
    },
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfQ91698Helazc9jxUztsxBOR2omLiv_ZtN96rE1TWGI3EWxPUUMB_YcIpqDRBwWebSubK3c2i-0yLZ1N8xrA4cpBX2gX0_p4Y_WVihee_QqDPN0hINRDiNzUGMo5mugfPyL0fipA5Le33xRWT16M3DRjZUL1vNoHG2PgkA-D7N6kwrmSB2YOpawB1RuM63TV2Arn5JGaLATQk7raMbKTXT3tMuDfHqRff-iiLwvERm4C2jK8r3_VVBF7g1TQPGaNmwygwJmyM_gFz",
    imageAlt:
      "Patinete Elétrica SM-ECO Lite, chassi cinza escuro com detalhes em verde neon",
    name: "SM-ECO LITE",
    description:
      "Mortal para o trânsito, impecável para o planeta. Sustentabilidade de verdade para quem quer chegar antes.",
    range: "50 km",
    topSpeed: "30 km/h",
    ctaText: "Compre Agora",
    ctaStyle:
      "border border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-container",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ModelsGrid = () => {
  return (
    <section
      id="models"
      className="py-margin-desktop px-gutter md:px-margin-desktop max-w-container-max mx-auto relative z-10"
    >
      <div className="mb-margin-desktop flex flex-col md:flex-row justify-between items-end gap-gutter border-b border-white/10 pb-gutter">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            ESCOLHA SUA ARMA
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Chega de desculpas. Escolha a máquina que vai atropelar o trânsito
            da sua rotina.
          </p>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
      >
        {modelsData.map((model) => (
          <motion.div key={model.id} variants={itemVariants} className="h-full">
            <ModelCard {...model} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ModelsGrid;
