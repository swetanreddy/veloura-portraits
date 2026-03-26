import { motion } from "framer-motion";

interface ApertureDecorProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

const ApertureDecor = ({ className = "", size = 200, animate = true }: ApertureDecorProps) => {
  const blades = 8;
  const bladeAngle = 360 / blades;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={animate ? { rotate: [0, 15, 0, -15, 0] } : {}}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-accent/30"
        style={{
          background: "radial-gradient(circle at center, transparent 40%, hsl(45 85% 55% / 0.1) 100%)",
        }}
      />

      {/* Aperture blades */}
      {[...Array(blades)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 origin-center"
          style={{
            width: size * 0.45,
            height: size * 0.12,
            marginLeft: -size * 0.225,
            marginTop: -size * 0.06,
            transform: `rotate(${i * bladeAngle}deg)`,
          }}
          animate={animate ? {
            opacity: [0.15, 0.25, 0.15],
          } : {}}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, hsl(45 85% 55% / 0.4), transparent)`,
            }}
          />
        </motion.div>
      ))}

      {/* Center circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: size * 0.3,
          height: size * 0.3,
          background: "radial-gradient(circle at 30% 30%, hsl(45 85% 58% / 0.3), transparent 70%)",
          border: "1px solid hsl(45 85% 55% / 0.3)",
        }}
        animate={animate ? {
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: size * 0.15,
          height: size * 0.15,
          background: "radial-gradient(circle at center, hsl(48 90% 65% / 0.4), transparent 80%)",
        }}
      />
    </motion.div>
  );
};

export default ApertureDecor;
