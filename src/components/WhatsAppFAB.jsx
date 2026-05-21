import React from "react";
import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";

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
      href="https://wa.me/1234567890"
      className="fixed bottom-margin-desktop right-margin-desktop z-50 bg-primary-container text-on-primary-container p-4 rounded-full pulse-whatsapp hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-fixed/50"
      aria-label="Fale com a Smart Mobility no WhatsApp e saia do trânsito"
    >
      <MessageCircleMore size={32} />
    </motion.a>
  );
};

export default WhatsAppFAB;
