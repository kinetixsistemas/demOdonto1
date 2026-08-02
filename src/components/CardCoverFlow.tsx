import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Microscope,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface CoverFlowImage {
  src: string;
  title: string;
  description?: string;
  icon?: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  biotech: Microscope,
  spa: Sparkles,
  health_and_safety: ShieldCheck,
};

const DEFAULT_ASSETS: CoverFlowImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    title: 'Sunset Beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    title: 'Misty Mountains',
  },
  {
    src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80',
    title: 'Forest Trail',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    title: 'Sunlight Woods',
  },
  {
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
    title: 'Green Hills',
  },
];

interface CardCoverFlowProps {
  className?: string;
  images?: CoverFlowImage[];
  isMonochrome?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function CardCoverFlow({
  className = '',
  images = DEFAULT_ASSETS,
  isMonochrome = false,
  autoPlay = true,
  autoPlayInterval = 4000,
}: CardCoverFlowProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const clamp = useCallback((index: number) => Math.max(0, Math.min(images.length - 1, index)), [images.length]);

  const toPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => clamp(prev - 1));
  }, [clamp]);

  const toNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => clamp(prev + 1));
  }, [clamp]);

  const touchStartX = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) {
      if (dx < 0) toNext();
      else toPrev();
    }
  }, [toNext, toPrev]);

  const toSlide = useCallback((e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused || images.length < 2) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => clamp(prev + 1));
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, isPaused, autoPlayInterval, images.length, clamp]);

  const activeItem = images[activeIndex];
  const ActiveIcon = activeItem?.icon ? ICON_MAP[activeItem.icon] : undefined;

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 select-none ${className}`}
      style={{ perspective: '1200px', touchAction: 'pan-y' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-brand/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[360px] h-[360px] rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative w-full flex justify-center items-center h-[180px] md:h-[250px] [transform-style:preserve-3d]">
        {images.map((item, i) => {
          const isActive = activeIndex === i;
          const offset = i - activeIndex;
          const absOffset = Math.abs(offset);
          const isPast = i < activeIndex;

          return (
            <motion.div
              key={i}
              className="absolute w-[100px] md:w-[150px] aspect-[3/4] cursor-pointer"
              initial={false}
              animate={{
                x: offset * 66,
                rotateY: isActive ? 0 : (isPast ? 40 : -40),
                z: isActive ? 60 : -absOffset * 55,
                scale: isActive ? 1.12 : Math.max(0.72, 1 - absOffset * 0.09),
                opacity: absOffset > 2 ? 0 : Math.max(0.25, 1 - absOffset * 0.3),
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              style={{ zIndex: 100 - absOffset }}
              onClick={(e) => toSlide(e, i)}
            >
              {isMonochrome ? (
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neutral-500 to-neutral-800 border border-white/20 shadow-2xl flex items-center justify-center text-white/70 font-bold text-lg">
                  {i + 1}
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={item.src}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    draggable={false}
                    className={`w-full h-full object-cover rounded-2xl border shadow-2xl transition-shadow duration-300 ${isActive ? 'border-white/30 shadow-glow' : 'border-white/10'}`}
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-t from-ink/70 via-transparent to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-25'}`}
                  />
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/30 pointer-events-none" />
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-20 mt-10 flex flex-col items-center gap-5">
        {isMonochrome ? (
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-white/90 tracking-wide"
          >
            {`Card ${activeIndex + 1}`}
          </motion.p>
        ) : (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-1.5 px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center max-w-[300px]"
          >
            {ActiveIcon && <ActiveIcon className="w-6 h-6 text-white" strokeWidth={1.75} />}
            <p className="text-xs font-semibold text-white tracking-wide uppercase">
              {activeItem?.title}
            </p>
            {activeItem?.description && (
              <p className="text-xs leading-relaxed text-white/70">{activeItem.description}</p>
            )}
          </motion.div>
        )}

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
          <button
            onClick={toPrev}
            className="w-11 h-11 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/15 active:scale-90 transition-all duration-200 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => toSlide(e, i)}
                aria-label={`Ir a la tarjeta ${i + 1}`}
                className={`h-11 flex items-center justify-center cursor-pointer transition-all duration-300 ${activeIndex === i ? 'w-9' : 'w-6'}`}
              >
                <span className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'}`} />
              </button>
            ))}
          </div>

          <button
            onClick={toNext}
            className="w-11 h-11 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/15 active:scale-90 transition-all duration-200 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
