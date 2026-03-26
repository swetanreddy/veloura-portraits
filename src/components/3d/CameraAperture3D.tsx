import { motion } from "framer-motion";

/**
 * A 3D animated camera aperture/lens made from CSS.
 * Rotates slowly and has a gold wireframe look.
 */
const CameraAperture3D = ({
  size = 300,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  const bladeCount = 6;
  const blades = Array.from({ length: bladeCount });

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        perspective: "800px",
      }}
      animate={{ rotateZ: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: [0, 15, 0, -15, 0], rotateY: [0, -10, 0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid hsla(45, 85%, 55%, 0.6)",
            boxShadow: "0 0 40px -10px hsla(45, 85%, 55%, 0.35), inset 0 0 40px -10px hsla(45, 85%, 55%, 0.2)",
          }}
        />

        {/* Inner ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: `${size * 0.15}px`,
            border: "1px solid hsla(45, 85%, 55%, 0.45)",
          }}
        />

        {/* Aperture blades */}
        {blades.map((_, i) => {
          const angle = (360 / bladeCount) * i;
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: "1px",
                height: size * 0.42,
                left: "50%",
                top: "50%",
                transformOrigin: "top center",
                transform: `rotate(${angle}deg)`,
                background: `linear-gradient(180deg, hsla(45, 85%, 55%, 0.7), transparent)`,
              }}
              animate={{ opacity: [0.5, 0.85, 0.5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          );
        })}

        {/* Crosshair lines */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsla(45, 85%, 55%, 0.22), transparent)" }}
        />
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, transparent, hsla(45, 85%, 55%, 0.22), transparent)" }}
        />

        {/* Center dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "hsla(45, 85%, 55%, 0.8)",
            boxShadow: "0 0 20px 4px hsla(45, 85%, 55%, 0.45)",
          }}
        />

        {/* Focus ring markers */}
        {[0, 90, 180, 270].map((angle) => (
          <div
            key={angle}
            className="absolute"
            style={{
              width: 8,
              height: 1,
              left: "50%",
              top: 0,
              marginLeft: -4,
              background: "hsla(45, 85%, 55%, 0.6)",
              transformOrigin: `4px ${size / 2}px`,
              transform: `rotate(${angle}deg)`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CameraAperture3D;
