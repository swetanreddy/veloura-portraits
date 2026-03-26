import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import portraitImage from "@/assets/retouch-reveal-source.png";

interface RetouchRevealProps {
  beforeLabel: string;
  afterLabel: string;
}

const RetouchReveal = ({ beforeLabel, afterLabel }: RetouchRevealProps) => {
  const [position, setPosition] = useState(56);
  const [isDragging, setIsDragging] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!revealRef.current) return;
    const rect = revealRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      // Capture pointer on the container so all future move/up events come here
      (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
      setIsDragging(true);
      updatePosition(event.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(event.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(
    (event: React.PointerEvent) => {
      (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
      setIsDragging(false);
    },
    []
  );

  return (
    <div className="card-elevated relative overflow-hidden p-4 md:p-5">
      <div
        ref={revealRef}
        className={`relative h-[360px] select-none overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(135deg,rgba(28,23,18,0.94),rgba(30,37,53,0.86))] ${isDragging ? "cursor-ew-resize" : "cursor-grab"}`}
        style={{ touchAction: "none" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt="Portrait retouch comparison"
            className="h-full w-full object-cover object-center [filter:saturate(0.68)_brightness(0.56)_contrast(0.86)]"
            src={portraitImage}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,7,0.88)_0%,rgba(8,7,7,0.58)_30%,rgba(8,7,7,0.22)_58%,rgba(8,7,7,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,rgba(214,182,156,0.12),transparent_28%),linear-gradient(180deg,rgba(10,9,8,0.08),rgba(10,9,8,0.36))]" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <img
            alt=""
            className="h-full w-full object-cover object-center [filter:saturate(1.02)_contrast(1.05)_brightness(0.94)]"
            src={portraitImage}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,20,18,0.06)_0%,rgba(24,20,18,0.02)_36%,rgba(16,16,24,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,rgba(214,182,156,0.22),transparent_24%),linear-gradient(180deg,rgba(14,12,10,0.04),rgba(14,12,10,0.18))]" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 w-px bg-white/22" style={{ left: `${position}%` }} />
        <motion.div
          className="pointer-events-none absolute top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-accent/55 bg-background/82 shadow-[0_0_0_4px_rgba(10,9,8,0.42)] backdrop-blur"
          style={{ left: `calc(${position}% - 24px)` }}
          animate={{ scale: isDragging ? 0.96 : 1 }}
        >
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.28em] text-accent">
            drag
          </div>
        </motion.div>

        <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-background/65 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-foreground/70">
          {beforeLabel}
        </div>
        <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-accent/15 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-accent">
          {afterLabel}
        </div>

        <div className="pointer-events-none absolute bottom-6 left-6 max-w-[240px] rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(12,11,10,0.58),rgba(12,11,10,0.78))] p-4 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-foreground/50">Retouch philosophy</p>
          <p className="mt-3 text-sm leading-7 text-foreground/82">
            Keep pores, soften distractions, shape light. The face should still look like the person you met.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(12,11,10,0),rgba(12,11,10,0.36),rgba(12,11,10,0.72))]" />

        <input
          aria-label="Retouch reveal slider"
          className="absolute inset-x-6 bottom-6 h-8 cursor-ew-resize appearance-none bg-transparent opacity-0"
          max={100}
          min={0}
          onChange={(event) => setPosition(Number(event.target.value))}
          type="range"
          value={position}
        />
      </div>
    </div>
  );
};

export default RetouchReveal;
