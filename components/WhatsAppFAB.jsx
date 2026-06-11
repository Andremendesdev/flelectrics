"use client";

import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/1234567890";

const WhatsAppFAB = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      href={WHATSAPP_URL}
      className="neon-blue-btn fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-b from-sky-400 to-blue-700 text-white p-4 rounded-full hover:scale-110 hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/50"
      aria-label="Fale com a FL Electrics no WhatsApp e saia do trânsito"
    >
      <MessageCircleMore size={32} />
    </motion.a>
  );
};

export default WhatsAppFAB;
