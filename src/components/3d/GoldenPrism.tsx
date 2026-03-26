import { motion } from "framer-motion";

/**
 * A 3D rotating golden prism/pyramid made with CSS.
 * Floats and rotates to add depth to sections.
 */
const GoldenPrism = ({
  size = 80,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  const half = size / 2;

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={{ perspective: "600px", width: size, height: size }}
      animate={{
        y: [0, -15, 0, 15, 0],
      }}
      transition={{
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          position: "relative",
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [10, 25, 10],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Four triangular faces of a pyramid */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              left: half,
              top: 0,
              borderLeft: `${half}px solid transparent`,
              borderRight: `${half}px solid transparent`,
              borderBottom: `${size}px solid hsla(45, 85%, 55%, ${0.06 + i * 0.02})`,
              transformOrigin: `0 ${size}px`,
              transform: `rotateY(${i * 90}deg) rotateX(30deg) translateX(-${half}px)`,
              backfaceVisibility: "visible",
              filter: `brightness(${1 + i * 0.15})`,
            }}
          />
        ))}

        {/* Base wireframe */}
        <div
          style={{
            position: "absolute",
            width: size,
            height: size,
            bottom: 0,
            border: "1px solid hsla(45, 85%, 55%, 0.15)",
            transform: `rotateX(90deg) translateZ(${-half}px)`,
            transformOrigin: "center bottom",
          }}
        />

        {/* Edge glow lines */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`edge-${i}`}
            style={{
              position: "absolute",
              width: 1,
              height: size * 0.7,
              left: "50%",
              bottom: 0,
              background: `linear-gradient(to top, hsla(45, 85%, 55%, 0.3), transparent)`,
              transformOrigin: "bottom center",
              transform: `rotateY(${i * 90}deg) rotateX(-30deg)`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GoldenPrism;
