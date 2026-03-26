import { motion } from "framer-motion";

/**
 * A 3D rotating lens ring — like a camera focus ring.
 * Tilts and rotates in 3D space with gold wireframe style.
 */
const LensRing3D = ({
  size = 200,
  className = "",
  duration = 25,
}: {
  size?: number;
  className?: string;
  duration?: number;
}) => {
  const tickCount = 24;
  const ticks = Array.from({ length: tickCount });

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={{ perspective: "500px", width: size, height: size }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: [60, 70, 60],
          rotateZ: [0, 360],
        }}
        transition={{
          rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration, repeat: Infinity, ease: "linear" },
        }}
      >
        {/* Main ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid hsla(45, 85%, 55%, 0.65)",
            boxShadow: "0 0 30px -5px hsla(45, 85%, 55%, 0.35)",
          }}
        />

        {/* Inner ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: size * 0.08,
            border: "1px solid hsla(45, 85%, 55%, 0.4)",
          }}
        />

        {/* Tick marks around the ring (like a lens barrel) */}
        {ticks.map((_, i) => {
          const angle = (360 / tickCount) * i;
          const isLong = i % 4 === 0;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: 1,
                height: isLong ? size * 0.06 : size * 0.03,
                background: `hsla(45, 85%, 55%, ${isLong ? 0.8 : 0.5})`,
                left: "50%",
                top: 0,
                transformOrigin: `0 ${size / 2}px`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}

        {/* Focal distance numbers */}
        {["1.4", "2.8", "5.6", "11"].map((num, i) => {
          const angle = i * 90 + 45;
          const radius = size * 0.35;
          const rad = (angle * Math.PI) / 180;
          return (
            <span
              key={num}
              className="absolute font-mono"
              style={{
                fontSize: size * 0.04,
                color: `hsla(45, 85%, 55%, 0.75)`,
                left: `calc(50% + ${Math.cos(rad) * radius}px)`,
                top: `calc(50% + ${Math.sin(rad) * radius}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {num}
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default LensRing3D;
