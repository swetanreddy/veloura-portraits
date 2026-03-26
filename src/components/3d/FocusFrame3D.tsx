import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface FocusFrame3DProps {
  className?: string;
}

const FocusFrame3D = ({ className = "" }: FocusFrame3DProps) => {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rawRotateX = useTransform(pointerY, [0, 1], [12, -12]);
  const rawRotateY = useTransform(pointerX, [0, 1], [-12, 12]);
  const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 18 });

  return (
    <motion.div
      className={`relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] ${className}`}
      style={{ perspective: 1200 }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width);
        pointerY.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.5);
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-md"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-5 rounded-[26px] border border-accent/35" />
        <div className="absolute inset-10 rounded-[22px] border border-white/15" />
        <div className="absolute inset-14 rounded-[18px] border border-accent/20" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40"
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translate3d(-50%, -50%, 36px)" }}
        />

        <div className="absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-28 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/60 to-transparent" />

        <motion.div
          className="absolute left-8 top-8 rounded-full border border-white/15 bg-background/55 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-foreground/65"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(40px)" }}
        >
          subject locked
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-accent"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(50px)" }}
        >
          skin tone map
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FocusFrame3D;
