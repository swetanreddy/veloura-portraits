import { motion } from "framer-motion";

interface SoftboxRig3DProps {
  label: string;
  description: string;
  activeIndex: number;
}

const lights = [
  { x: -42, y: 30, z: 18, rotate: -26, width: 64, height: 96, depth: 18 },
  { x: 10, y: -20, z: 58, rotate: 14, width: 110, height: 70, depth: 20 },
  { x: 66, y: 56, z: 10, rotate: 28, width: 76, height: 56, depth: 16 },
];

const SoftboxRig3D = ({ label, description, activeIndex }: SoftboxRig3DProps) => {
  return (
    <div className="card-glass relative overflow-hidden p-6 md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(198,130,92,0.12),transparent_24%),radial-gradient(circle_at_center,rgba(54,62,79,0.12),transparent_58%)]" />
      <div className="relative grid grid-cols-[1fr_130px] items-center gap-5 sm:grid-cols-[1fr_170px] sm:gap-7 lg:grid-cols-[1fr_250px] lg:gap-10">
        <div>
          <p className="label-uppercase text-accent">Lighting Direction</p>
          <h3 className="heading-subsection mt-4 max-w-md text-foreground">{label}</h3>
          <p className="body-base mt-4 max-w-lg">{description}</p>
        </div>

        <div className="relative mx-auto h-[150px] w-[130px] sm:h-[190px] sm:w-[170px] lg:h-[250px] lg:w-[250px]" style={{ perspective: "1500px" }}>
          <motion.div
            className="absolute inset-0"
            animate={{ rotateX: [0, 2, 0, -2, 0], rotateZ: [0, 1.5, 0, -1.5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute left-1/2 top-1/2 h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#54463a]/45 bg-[#171411]/85 shadow-[0_20px_44px_-24px_rgba(0,0,0,0.9)] backdrop-blur sm:h-[72px] sm:w-[72px] lg:h-[94px] lg:w-[94px]" />
            <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,130,92,0.48),rgba(196,130,92,0.1),transparent_72%)] sm:h-11 sm:w-11 lg:h-14 lg:w-14" />

            {lights.map((light, index) => {
              const active = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: light.width,
                    height: light.height,
                    marginLeft: -(light.width / 2) + light.x,
                    marginTop: -(light.height / 2) + light.y,
                    transformStyle: "preserve-3d",
                    transform: `translateZ(${light.z}px) rotateZ(${light.rotate}deg)`,
                  }}
                  animate={{
                    y: [0, -6 - index * 2, 0],
                    rotateZ: [light.rotate, light.rotate + (active ? 3 : 1.5), light.rotate],
                  }}
                  transition={{ duration: 4.5 + index, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className={`absolute inset-0 rounded-[16px] border ${active ? "border-[#c4825c]/55" : "border-[#4a4f5d]/45"}`}
                    style={{
                      transform: `translateZ(${light.depth / 2}px)`,
                      background: active
                        ? "linear-gradient(180deg, rgba(214,182,156,0.16), rgba(196,130,92,0.08)), linear-gradient(145deg, rgba(43,49,61,0.92), rgba(21,18,15,0.98))"
                        : "linear-gradient(180deg, rgba(112,118,132,0.1), rgba(255,255,255,0.015)), linear-gradient(145deg, rgba(42,47,58,0.9), rgba(18,16,14,0.98))",
                      boxShadow: active ? "0 0 28px -14px rgba(196,130,92,0.5)" : "0 20px 40px -22px rgba(0,0,0,0.86)",
                    }}
                  >
                    <div className="absolute inset-[10px] rounded-[10px] border border-[#cec1b3]/10 bg-[linear-gradient(180deg,rgba(240,228,214,0.14),rgba(53,61,76,0.04))]" />
                  </div>

                  <div
                    className="absolute left-0 top-0 rounded-[16px] bg-[linear-gradient(180deg,rgba(86,92,108,0.08),rgba(8,7,6,0.28))]"
                    style={{
                      width: light.width,
                      height: light.height,
                      transform: `translateZ(${-light.depth / 2}px)`,
                      opacity: 0.42,
                    }}
                  />
                  <div
                    className="absolute left-0 top-0 bg-[linear-gradient(180deg,rgba(191,154,126,0.12),rgba(48,39,32,0.26))]"
                    style={{
                      width: light.width,
                      height: light.depth,
                      transform: `rotateX(90deg) translateZ(${light.height - light.depth / 2}px)`,
                      transformOrigin: "top left",
                    }}
                  />
                  <div
                    className="absolute left-0 top-0 bg-[linear-gradient(90deg,rgba(63,70,84,0.3),rgba(14,12,10,0.35))]"
                    style={{
                      width: light.depth,
                      height: light.height,
                      transform: `rotateY(90deg) translateZ(${light.width - light.depth / 2}px)`,
                      transformOrigin: "top left",
                    }}
                  />

                  <div
                    className="absolute left-1/2 top-full w-px bg-gradient-to-b from-[#8e775f]/45 to-transparent"
                    style={{
                      height: 44,
                      transform: `translateX(-50%) translateZ(${light.depth / 2}px)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SoftboxRig3D;
