import { motion } from "framer-motion";

type Shape = "diamond" | "ring" | "cube" | "triangle" | "hexagon";

interface FloatingShapeProps {
  shape: Shape;
  size?: number;
  delay?: number;
  duration?: number;
  className?: string;
  opacity?: number;
}

const Diamond = ({ size, color }: { size: number; color: string }) => (
  <div
    style={{
      width: size,
      height: size,
      transform: "rotate(45deg)",
      border: `1px solid ${color}`,
      transformStyle: "preserve-3d",
    }}
  />
);

const Ring = ({ size, color }: { size: number; color: string }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      border: `1px solid ${color}`,
    }}
  />
);

const Cube = ({ size, color }: { size: number; color: string }) => (
  <div style={{ width: size, height: size, transformStyle: "preserve-3d", position: "relative" }}>
    {/* Front face */}
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        border: `1px solid ${color}`,
        transform: `translateZ(${size / 2}px)`,
      }}
    />
    {/* Back face */}
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        border: `1px solid ${color}`,
        transform: `translateZ(${-size / 2}px)`,
        opacity: 0.4,
      }}
    />
    {/* Connecting edges */}
    {[
      { x: 0, y: 0 },
      { x: size, y: 0 },
      { x: size, y: size },
      { x: 0, y: size },
    ].map((pos, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          width: 1,
          height: size,
          background: color,
          left: pos.x,
          top: pos.y,
          transformOrigin: "0 0",
          transform: `rotateX(90deg) translateY(${-size / 2}px)`,
          opacity: 0.3,
        }}
      />
    ))}
  </div>
);

const Triangle = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size * 0.866} viewBox={`0 0 ${size} ${size * 0.866}`}>
    <polygon
      points={`${size / 2},0 ${size},${size * 0.866} 0,${size * 0.866}`}
      fill="none"
      stroke={color}
      strokeWidth="1"
    />
  </svg>
);

const Hexagon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <polygon
      points="50,3 95,25 95,75 50,97 5,75 5,25"
      fill="none"
      stroke={color}
      strokeWidth="1"
    />
  </svg>
);

const shapeComponents: Record<Shape, React.FC<{ size: number; color: string }>> = {
  diamond: Diamond,
  ring: Ring,
  cube: Cube,
  triangle: Triangle,
  hexagon: Hexagon,
};

export const FloatingShape = ({
  shape,
  size = 40,
  delay = 0,
  duration = 20,
  className = "",
  opacity = 0.3,
}: FloatingShapeProps) => {
  const ShapeComponent = shapeComponents[shape];
  const color = `hsla(45, 85%, 55%, ${opacity})`;

  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{ perspective: "600px" }}
      animate={{
        y: [0, -20, 0, 20, 0],
        rotateX: [0, 20, 0, -20, 0],
        rotateY: [0, 360],
        rotateZ: [0, 10, 0, -10, 0],
      }}
      transition={{
        y: { duration: duration * 0.6, repeat: Infinity, ease: "easeInOut", delay },
        rotateX: { duration: duration * 0.8, repeat: Infinity, ease: "easeInOut", delay },
        rotateY: { duration, repeat: Infinity, ease: "linear", delay },
        rotateZ: { duration: duration * 0.7, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <div style={{ transformStyle: "preserve-3d" }}>
        <ShapeComponent size={size} color={color} />
      </div>
    </motion.div>
  );
};

export default FloatingShape;
