"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Battery, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/1234567890";

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
  cardHighlight,
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ x: rotateX, y: rotateY });
    el.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="card-3d h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className={cn(
          "card-3d-inner glass-panel rounded-xl p-7 md:p-8 flex flex-col gap-6 relative overflow-hidden group h-full",
          cardHighlight
        )}
      >
        <div className="card-3d-shine" />

        <div className="absolute top-6 right-6 z-10">
          <span
            className={cn(
              "font-label-md text-label-md px-3 py-1 rounded-full",
              badge.style
            )}
          >
            {badge.text}
          </span>
        </div>

        <div className="h-64 relative bg-surface-container-lowest rounded-xl ring-1 ring-white/5 flex items-center justify-center p-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={256}
            className="max-h-full w-auto object-contain mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <div className="flex-grow">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {name}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/10 mt-auto">
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
              <Battery size={14} />
              AUTONOMIA
            </span>
            <span className="font-body-md text-body-md text-on-surface font-semibold">
              {range}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
              <Gauge size={14} />
              VELOCIDADE
            </span>
            <span className="font-body-md text-body-md text-on-surface font-semibold">
              {topSpeed}
            </span>
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          className={cn(
            "w-full text-center font-label-md text-label-md py-3 rounded-full shadow-sm hover:shadow-md transition-all mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-blue-600",
            ctaStyle
          )}
          aria-label={`Consultar sobre ${name}`}
        >
          {ctaText || "Saiba Mais"}
        </a>
      </div>
    </div>
  );
};

export default ModelCard;
