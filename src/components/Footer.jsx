import React from "react";

const Footer = () => {
  const links = [
    { label: "Piraju/SP", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Envio p/ Região", href: "#" },
    { label: "Garantia", href: "#" },
  ];

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-margin-desktop mt-margin-desktop relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-gutter px-gutter md:px-margin-desktop max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md text-primary-fixed opacity-80 hover:opacity-100 transition-opacity">
          SMART MOBILITY
        </div>

        <div className="flex flex-wrap justify-center gap-gutter font-body-md text-body-md">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label="Fale com a Smart Mobility no WhatsApp"
              className="text-on-surface-variant hover:text-primary-fixed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="font-body-md text-body-md text-on-surface-variant text-sm">
          © {new Date().getFullYear()} SMART MOBILITY. Todos os direitos
          reservados. Conduza com liberdade.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
