import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface RetouchRevealProps {
  beforeLabel: string;
  afterLabel: string;
}

const RetouchReveal = ({ beforeLabel, afterLabel }: RetouchRevealProps) => {
  const [position, setPosition] = useState(56);
  const [isDragging, setIsDragging] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!revealRef.current) return;
    const rect = revealRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <div className="card-elevated relative overflow-hidden p-4 md:p-5">
      <div
        ref={revealRef}
        className={`relative h-[360px] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(135deg,rgba(199,122,90,0.34),rgba(40,53,75,0.9))] ${isDragging ? "cursor-ew-resize" : "cursor-grab"}`}
        onPointerMove={(event) => {
          if (!isDragging) return;
          updatePosition(event.clientX);
        }}
        onPointerUp={() => setIsDragging(false)}
        onPointerLeave={() => setIsDragging(false)}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,26,35,0.86),rgba(22,26,35,0.35))]" />

        <div className="absolute inset-y-0 left-0" style={{ width: `${position}%` }}>
          <div className="h-full w-full bg-[linear-gradient(135deg,rgba(183,205,197,0.14),rgba(255,255,255,0.03))]" />
        </div>

        <div className="absolute inset-y-0 left-0 w-px bg-white/20" style={{ left: `${position}%` }} />
        <motion.div
          className="absolute top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-background/80 backdrop-blur"
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setIsDragging(true);
            updatePosition(event.clientX);
          }}
          onPointerMove={(event) => {
            if (!isDragging) return;
            updatePosition(event.clientX);
          }}
          onPointerUp={(event) => {
            event.currentTarget.releasePointerCapture(event.pointerId);
            setIsDragging(false);
          }}
          style={{ left: `calc(${position}% - 24px)` }}
          whileTap={{ scale: 0.96 }}
        >
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.28em] text-accent">
            drag
          </div>
        </motion.div>

        <div className="absolute left-5 top-5 rounded-full bg-background/65 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-foreground/70">
          {beforeLabel}
        </div>
        <div className="absolute right-5 top-5 rounded-full bg-accent/15 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-accent">
          {afterLabel}
        </div>

        <div className="absolute bottom-6 left-6 max-w-[220px]">
          <p className="text-sm uppercase tracking-[0.28em] text-foreground/50">Retouch philosophy</p>
          <p className="mt-3 text-sm leading-7 text-foreground/82">
            Keep pores, soften distractions, shape light. The face should still look like the person you met.
          </p>
        </div>

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
