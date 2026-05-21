import React from 'react';
import { Battery, Gauge } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ModelCard = ({
  badge,
  imageSrc,
  imageAlt,
  name,
  description,
  range,
  topSpeed,
  ctaText,
  ctaStyle,
  cardHighlight
}) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 h-full",
        cardHighlight
      )}
    >
      <div className="absolute top-6 right-6 z-10">
        <span className={cn("font-label-md text-label-md px-3 py-1 rounded-full", badge.style)}>
          {badge.text}
        </span>
      </div>
      
      <div className="h-64 relative bg-surface-container-lowest rounded-lg flex items-center justify-center p-4">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="max-h-full object-contain mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-headline-md text-headline-md text-on-surface">{name}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">{description}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mt-auto">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
            <Battery size={14} />
            AUTONOMIA
          </span>
          <span className="font-body-md text-body-md text-on-surface font-semibold">{range}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
            <Gauge size={14} />
            VELOCIDADE
          </span>
          <span className="font-body-md text-body-md text-on-surface font-semibold">{topSpeed}</span>
        </div>
      </div>
      
      <a 
        href="#enquire"
        className={cn(
          "w-full text-center font-label-md text-label-md py-3 rounded-full transition-all mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-primary-fixed",
          ctaStyle
        )}
        aria-label={`Consultar sobre ${name}`}
      >
        {ctaText || "Saiba Mais"}
      </a>
    </div>
  );
};

export default ModelCard;
