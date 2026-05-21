import React, { useState, useEffect } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Modelos", href: "#models" },
    { name: "Impacto Verde", href: "#eco" },
    { name: "Dúvidas", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(160,251,0,0.1)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="flex justify-between items-center px-gutter md:px-margin-desktop w-full max-w-container-max mx-auto">
          {/* Brand Logo */}
          <a
            href="#"
            className="font-headline-md text-headline-md tracking-tighter text-primary-fixed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed rounded"
            aria-label="Smart Mobility Home"
          >
            SMART MOBILITY
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-gutter items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed rounded px-2 py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-fixed transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Action */}
          <a
            href="https://wa.me/1234567890"
            className="hidden md:flex items-center gap-base font-label-md text-label-md bg-primary-container text-on-primary-container px-6 py-3 rounded-full hover:glow-secondary hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            aria-label="Fale conosco no WhatsApp e descubra liberdade"
          >
            <MessageCircle size={18} />
            <span>Descubra sua Liberdade</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary-fixed p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed rounded"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-2xl flex flex-col p-gutter"
          >
            <div className="flex justify-between items-center mb-margin-desktop">
              <span className="font-headline-md text-headline-md tracking-tighter text-primary-fixed">
                SMART MOBILITY
              </span>
              <button
                className="text-primary-fixed p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed rounded"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu de navegação"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-margin-mobile items-start">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-primary-fixed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed rounded w-full"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/1234567890"
                className="mt-margin-desktop w-full flex items-center justify-center gap-base font-label-md text-label-md bg-primary-container text-on-primary-container px-8 py-4 rounded-full hover:glow-secondary transition-all"
              >
                <MessageCircle size={20} />
                Fale conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
