import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
  perspective?: number;
  scale?: number;
}

const TiltCard = ({
  children,
  className = "",
  tiltAmount = 10,
  glareEnabled = true,
  perspective = 800,
  scale = 1.02,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setTilt({
          x: (y - 0.5) * -tiltAmount,
          y: (x - 0.5) * tiltAmount,
        });

        if (glareEnabled) {
          setGlare({ x: x * 100, y: y * 100, opacity: 0.15 });
        }
      });
    },
    [tiltAmount, glareEnabled],
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div style={{ perspective: `${perspective}px` }} className={className}>
      <motion.div
        ref={ref}
        className="relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? scale : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}

        {glareEnabled && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit]"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsla(45, 85%, 55%, ${glare.opacity}), transparent 60%)`,
              transition: "opacity 0.3s ease",
              maskImage: `radial-gradient(circle at ${glare.x}% ${glare.y}%, black 20%, transparent 70%)`,
              WebkitMaskImage: `radial-gradient(circle at ${glare.x}% ${glare.y}%, black 20%, transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TiltCard;
