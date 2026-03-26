import { motion } from "framer-motion";
import { useMemo } from "react";

interface BokehParticle {
  id: number;
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  opacity: number;
  color: "gold" | "warm" | "cool";
}

interface BokehParticlesProps {
  count?: number;
  className?: string;
  variant?: "hero" | "section" | "subtle";
}

const BokehParticles = ({ count = 15, className = "", variant = "hero" }: BokehParticlesProps) => {
  const particles = useMemo(() => {
    const items: BokehParticle[] = [];
    for (let i = 0; i < count; i++) {
      const colors: ("gold" | "warm" | "cool")[] = ["gold", "gold", "warm", "cool"];
      items.push({
        id: i,
        size: Math.random() * (variant === "hero" ? 120 : 80) + (variant === "hero" ? 40 : 20),
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 12,
        opacity: variant === "subtle" ? Math.random() * 0.15 + 0.05 : Math.random() * 0.25 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return items;
  }, [count, variant]);

  const getColor = (color: "gold" | "warm" | "cool") => {
    switch (color) {
      case "gold":
        return "hsl(45 85% 55%)"; // Gold
      case "warm":
        return "hsl(42 80% 45%)"; // Dark Gold
      case "cool":
        return "hsl(48 90% 65%)"; // Light Gold
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            background: `radial-gradient(circle at 30% 30%, ${getColor(particle.color)}, transparent 70%)`,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, particle.opacity, particle.opacity * 0.5, particle.opacity, 0],
            scale: [0.5, 1, 1.1, 1, 0.5],
            x: [0, 20, -10, 15, 0],
            y: [0, -30, -20, -40, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BokehParticles;
