import { motion } from "framer-motion";
import commercialImage from "@/assets/hero-commercial.jpg";
import portraitImage from "@/assets/hero-portrait.jpg";
import proofImage from "@/assets/hero-option-1.jpg";
import studioImage from "@/assets/hero-studio-new.jpg";

interface ContactSheetStack3DProps {
  className?: string;
}

const sheets = [
  { x: 0,   y: 50, z: 0,  rotate: -10, tone: "rgba(52, 58, 71, 0.88)", edge: "rgba(85, 92, 108, 0.28)" },
  { x: 50,  y: 25, z: 20, rotate: -4,  tone: "rgba(42, 37, 32, 0.92)", edge: "rgba(155, 117, 86, 0.26)" },
  { x: 100, y: 0,  z: 40, rotate: 4,   tone: "rgba(54, 58, 68, 0.96)", edge: "rgba(196, 130, 92, 0.42)" },
];

const CARD_W = 115;
const CARD_H = 140;

const proofSets = [
  [portraitImage, studioImage, commercialImage, proofImage],
  [studioImage, proofImage, portraitImage, commercialImage],
  [commercialImage, portraitImage, studioImage, proofImage],
];

const ContactSheetStack3D = ({ className = "" }: ContactSheetStack3DProps) => {
  return (
    <div className={`relative h-[220px] w-[280px] ${className}`} style={{ perspective: "1400px" }}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: [0, 4, 0, -4, 0], rotateX: [0, -2, 0, 2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -top-1 left-0 z-10 rounded-full border border-[#c4825c]/20 bg-[#181311]/84 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-[#cf9a72]">
          Final selects
        </div>

        {sheets.map((sheet, index) => (
          <motion.div
            key={index}
            className="absolute left-0 top-0"
            style={{
              width: CARD_W,
              height: CARD_H,
              marginLeft: sheet.x,
              marginTop: sheet.y,
              transformStyle: "preserve-3d",
              transform: `translateZ(${sheet.z}px) rotateZ(${sheet.rotate}deg)`,
            }}
            animate={{ y: [0, -2 - index, 0] }}
            transition={{ duration: 4.8 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 rounded-[16px] border p-3"
              style={{
                transform: "translateZ(6px)",
                background: `linear-gradient(180deg, rgba(239,227,210,0.08), rgba(12,11,10,0.82)), ${sheet.tone}`,
                borderColor: sheet.edge,
                boxShadow: "0 20px 42px -26px rgba(0,0,0,0.88)",
              }}
            >
              <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.22em] text-foreground/46">
                <span>{index === 2 ? "selected" : `proof ${index + 1}`}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="mt-2 rounded-[10px] border border-[#d3c3b2]/8 bg-[linear-gradient(180deg,rgba(239,227,210,0.08),rgba(20,20,20,0.02))] p-1.5">
                <div className="grid grid-cols-2 gap-1.5">
                  {proofSets[index].map((image, cellIndex) => (
                    <div
                      key={cellIndex}
                      className={`relative h-10 overflow-hidden rounded-[7px] border ${
                        index === 2 && cellIndex === 1
                          ? "border-[#c4825c]/35"
                          : "border-[#d3c3b2]/6"
                      }`}
                    >
                      <img alt="" className="h-full w-full object-cover" src={image} />
                      <div
                        className={`absolute inset-0 ${
                          index === 2 && cellIndex === 1
                            ? "bg-[linear-gradient(180deg,rgba(196,130,92,0.16),rgba(55,44,36,0.12))]"
                            : "bg-[linear-gradient(180deg,rgba(16,14,12,0.18),rgba(16,14,12,0.44))]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {index === 2 && (
                <div className="mt-2.5 flex items-center justify-between rounded-full border border-[#c4825c]/24 bg-[#201915]/72 px-2.5 py-1 text-[8px] uppercase tracking-[0.2em] text-[#c4825c]">
                  <span>Hero crop</span>
                  <span>02</span>
                </div>
              )}
            </div>

            <div
              className="absolute left-0 top-0 rounded-[16px] bg-[linear-gradient(180deg,rgba(61,67,81,0.08),rgba(0,0,0,0.24))]"
              style={{
                width: CARD_W,
                height: CARD_H,
                transform: "translateZ(-6px)",
                opacity: 0.4,
              }}
            />
            <div
              className="absolute left-0 top-0 bg-[linear-gradient(180deg,rgba(191,154,126,0.10),rgba(46,37,31,0.18))]"
              style={{
                width: CARD_W,
                height: 12,
                transform: `rotateX(90deg) translateZ(${CARD_H - 12}px)`,
                transformOrigin: "top left",
              }}
            />
            <div
              className="absolute left-0 top-0 bg-[linear-gradient(90deg,rgba(61,67,81,0.22),rgba(0,0,0,0.26))]"
              style={{
                width: 12,
                height: CARD_H,
                transform: `rotateY(90deg) translateZ(${CARD_W - 12}px)`,
                transformOrigin: "top left",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactSheetStack3D;
