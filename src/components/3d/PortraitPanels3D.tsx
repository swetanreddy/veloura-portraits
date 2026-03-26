import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import commercialImage from "@/assets/hero-commercial.jpg";
import portraitImage from "@/assets/hero-portrait.jpg";
import studioImage from "@/assets/hero-studio-new.jpg";

interface PortraitPanels3DProps {
  className?: string;
}

const blocks = [
  { x: -42, y: 18, z: 18, rotate: -18, height: 178, width: 116, depth: 18, tone: "rgba(196,130,92,0.12)" },
  { x: 8, y: -10, z: 52, rotate: -6, height: 196, width: 128, depth: 20, tone: "rgba(62,70,84,0.20)" },
  { x: 68, y: 34, z: 12, rotate: 14, height: 168, width: 110, depth: 16, tone: "rgba(214,182,156,0.08)" },
];

const blockImages = [commercialImage, portraitImage, studioImage];

const PortraitPanels3D = ({ className = "" }: PortraitPanels3DProps) => {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rawRotateX = useTransform(pointerY, [0, 1], [9, -9]);
  const rawRotateY = useTransform(pointerX, [0, 1], [-12, 12]);
  const rotateX = useSpring(rawRotateX, { stiffness: 130, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 130, damping: 18 });

  return (
    <motion.div
      className={`relative h-[320px] w-[360px] sm:h-[380px] sm:w-[420px] ${className}`}
      style={{ perspective: 1600 }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width);
        pointerY.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.5);
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,130,92,0.12),transparent_68%)] blur-3xl" />

        {blocks.map((block, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2"
            style={{
              width: block.width,
              height: block.height,
              marginLeft: -(block.width / 2) + block.x,
              marginTop: -(block.height / 2) + block.y,
              transformStyle: "preserve-3d",
              transform: `translateZ(${block.z}px) rotateZ(${block.rotate}deg)`,
            }}
            animate={{
              y: [0, -8 - index * 2, 0],
              rotateZ: [block.rotate, block.rotate + 2, block.rotate],
            }}
            transition={{ duration: 5.6 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 rounded-[24px] border border-[#4a4f5d]/42 backdrop-blur-xl"
              style={{
                transform: `translateZ(${block.depth / 2}px)`,
                background: `linear-gradient(180deg, rgba(239,227,210,0.10), rgba(12,11,10,0.84)), ${block.tone}`,
                boxShadow: "0 24px 64px -30px rgba(0,0,0,0.9)",
              }}
            >
              <div className="absolute inset-3 rounded-[18px] border border-[#d3c3b2]/10" />
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-foreground/55">
                <span>{index === 1 ? "editorial" : index === 0 ? "hero crop" : "print trim"}</span>
                <span>{index === 1 ? "select" : index === 0 ? "waist up" : "8 x 10"}</span>
              </div>
              <div className="absolute left-4 right-4 top-12 h-[58%] overflow-hidden rounded-[16px] border border-[#d3c3b2]/8">
                <img alt="" className="h-full w-full object-cover" src={blockImages[index]} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,227,210,0.12),transparent_36%),linear-gradient(180deg,rgba(16,14,12,0.08),rgba(12,11,10,0.52))]" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                <div className="h-5 rounded-full bg-[#6b707d]/18" />
                <div className="h-5 rounded-full bg-[#c4825c]/18" />
                <div className="h-5 rounded-full bg-[#6b707d]/18" />
              </div>
            </div>

            <div
              className="absolute left-0 top-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(72,78,92,0.08),rgba(0,0,0,0.26))]"
              style={{
                width: block.width,
                height: block.height,
                transform: `translateZ(${-block.depth / 2}px)`,
                opacity: 0.45,
              }}
            />
            <div
              className="absolute left-0 top-0 bg-[linear-gradient(180deg,rgba(191,154,126,0.10),rgba(46,37,31,0.18))]"
              style={{
                width: block.width,
                height: block.depth,
                transform: `rotateX(90deg) translateZ(${block.height - block.depth / 2}px)`,
                transformOrigin: "top left",
                opacity: 0.65,
              }}
            />
            <div
              className="absolute left-0 top-0 bg-[linear-gradient(90deg,rgba(61,67,81,0.24),rgba(0,0,0,0.28))]"
              style={{
                width: block.depth,
                height: block.height,
                transform: `rotateY(90deg) translateZ(${block.width - block.depth / 2}px)`,
                transformOrigin: "top left",
                opacity: 0.7,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PortraitPanels3D;
