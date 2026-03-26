import { motion } from "framer-motion";

const rings = [100, 72, 44];

interface LightingRigWidgetProps {
  label: string;
  description: string;
  accentClassName: string;
}

const LightingRigWidget = ({
  label,
  description,
  accentClassName,
}: LightingRigWidgetProps) => {
  return (
    <div className="card-glass relative overflow-hidden p-8 md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_220px] lg:items-center">
        <div>
          <p className="label-uppercase text-accent">Lighting Direction</p>
          <h3 className="heading-subsection mt-4 max-w-md text-foreground">{label}</h3>
          <p className="body-base mt-4 max-w-lg">{description}</p>
        </div>

        <div className="relative mx-auto h-[220px] w-[220px]">
          {rings.map((size, index) => (
            <motion.div
              key={size}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/12"
              style={{
                width: size,
                height: size,
                marginLeft: -(size / 2),
                marginTop: -(size / 2),
              }}
              animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 24 + index * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}

          <motion.div
            className={`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full ${accentClassName}`}
            animate={{ scale: [1, 1.08, 1], opacity: [0.88, 1, 0.88] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {[0, 72, 144, 216, 288].map((angle, index) => (
            <motion.div
              key={angle}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-foreground/65"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-74px)`,
              }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.22 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightingRigWidget;
