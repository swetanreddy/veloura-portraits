import { motion } from "framer-motion";

interface LensFlareProps {
  className?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "center";
  intensity?: "subtle" | "medium" | "strong";
}

const LensFlare = ({ 
  className = "", 
  position = "top-right",
  intensity = "medium" 
}: LensFlareProps) => {
  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const opacityValues = {
    subtle: { primary: 0.15, secondary: 0.08, tertiary: 0.04 },
    medium: { primary: 0.25, secondary: 0.12, tertiary: 0.06 },
    strong: { primary: 0.35, secondary: 0.18, tertiary: 0.1 },
  };

  const opacity = opacityValues[intensity];

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none ${className}`}>
      {/* Primary flare */}
      <motion.div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(ellipse at center, hsl(45 85% 55% / ${opacity.primary}), transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary glow ring */}
      <motion.div
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, hsl(42 80% 50% / ${opacity.secondary}) 50%, transparent 70%)`,
        }}
        animate={{
          scale: [1.2, 1.4, 1.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Light rays */}
      <motion.div
        className="absolute w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `conic-gradient(from 0deg, transparent, hsl(45 85% 55% / ${opacity.tertiary}), transparent, hsl(42 80% 45% / ${opacity.tertiary}), transparent, hsl(48 90% 65% / ${opacity.tertiary}), transparent)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hexagonal flare elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${50 + (i - 1) * 80}px`,
            top: `${50 + (i - 1) * 60}px`,
            background: `radial-gradient(circle, hsl(${45 + i * 3} ${85 - i * 5}% ${55 + i * 5}% / ${opacity.secondary}), transparent 70%)`,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default LensFlare;
