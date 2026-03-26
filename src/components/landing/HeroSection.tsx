import { Button } from "@/components/ui/button";
import PortraitPanels3D from "@/components/3d/PortraitPanels3D";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "90 min", label: "Guided session" },
  { value: "72 hrs", label: "Proof turnaround" },
  { value: "12 looks", label: "Editorial variety" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rawRotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rawRotateY = useTransform(mouseX, [0, 1], [-5, 5]);
  const rotateX = useSpring(rawRotateX, { stiffness: 140, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 140, damping: 22 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      onMouseMove={(event) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width);
        mouseY.set((event.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, rotateX, rotateY, transformPerspective: 1400 }}
      >
        <img
          alt="Portrait photography session"
          className="h-full w-full object-cover object-center"
          src={heroPortrait}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,18,0.2),rgba(8,11,18,0.82)_62%,rgba(8,11,18,0.97))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(199,122,90,0.24),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(183,205,197,0.12),transparent_18%)]" />

      <motion.div className="relative z-10 w-full pb-12 pt-32 md:pb-20" style={{ y: textY }}>
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="max-w-3xl">
              <motion.div
                className="badge-premium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Veloura Portrait House
              </motion.div>

              <motion.h1
                className="heading-display max-w-4xl text-balance text-foreground"
                initial={{ opacity: 0, y: 40, rotateX: -12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 1000 }}
              >
                Portraits that feel
                <span className="text-gradient-gold"> composed, cinematic, </span>
                and unmistakably yours.
              </motion.h1>

              <motion.p
                className="body-large mt-6 max-w-xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                For founders, artists, and modern families who want more than a headshot. We shape wardrobe,
                lighting, pacing, and retouch with the same care as the final frame.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Button asChild size="xl" variant="cta">
                  <a href="#consultation">
                    Reserve a Consultation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="cta-outline">
                  <a href="#portfolio">View Signature Frames</a>
                </Button>
              </motion.div>

              <motion.div
                className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[24px] border border-white/10 bg-background/35 px-5 py-4 backdrop-blur-md">
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="mt-1 text-sm text-foreground/58">{metric.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="hidden justify-self-end lg:block"
              initial={{ opacity: 0, y: 30, rotateY: 12 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              style={{ transformPerspective: 1000 }}
            >
              <PortraitPanels3D />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
