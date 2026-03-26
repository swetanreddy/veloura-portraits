import SoftboxRig3D from "@/components/3d/SoftboxRig3D";
import PointerFollower from "@/components/ui/PointerFollower";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useState } from "react";

const moods = [
  {
    key: "soft",
    label: "Soft Window",
    description: "Gentle wraparound light for approachable personal portraits and intimate family frames.",
  },
  {
    key: "sculpted",
    label: "Sculpted Contrast",
    description: "A narrower lighting pattern for founder portraits, stronger jawline definition, and quieter confidence.",
  },
  {
    key: "editorial",
    label: "Editorial Glow",
    description: "Layered highlights and crisp catchlights for fashion-led sessions and launch imagery.",
  },
];

const steps = [
  "Creative call to align wardrobe, use cases, and tonal reference",
  "Shot list designed around portrait crops, negative space, and movement",
  "Proofing and retouch pass tuned for print, web, and social delivery",
];

const SolutionSection = () => {
  const [activeMood, setActiveMood] = useState(moods[0]);

  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
            <div>
              <span className="label-uppercase text-accent">Session Direction</span>
              <h2 className="heading-section mt-4 max-w-[14ch] text-balance text-[clamp(2.1rem,3.9vw,3.55rem)] leading-[1.01] text-foreground">
                We build the lighting before you arrive, not while you wait.
              </h2>
            </div>
            <div className="space-y-4 lg:pt-1">
              <p className="body-base max-w-lg">
                Portrait work changes when the studio behaves like a set. Light, tone, and background are planned as a
                sequence so the session keeps momentum and the final gallery feels coherent.
              </p>
              <div className="flex flex-wrap gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.key}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      mood.key === activeMood.key
                        ? "border-accent bg-accent/12 text-accent"
                        : "border-white/12 bg-white/[0.03] text-foreground/64 hover:border-white/25"
                    }`}
                    onClick={() => setActiveMood(mood)}
                    type="button"
                  >
                    {mood.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.1fr_0.8fr] lg:items-start lg:gap-8">
          <ScrollReveal>
            <SoftboxRig3D
              activeIndex={moods.findIndex((mood) => mood.key === activeMood.key)}
              description={activeMood.description}
              label={activeMood.label}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <PointerFollower className="rounded-[30px]">
              <div className="card-elevated p-6 md:p-10">
                <p className="label-uppercase text-accent">How a booking flows</p>
                <div className="mt-6 space-y-5 md:mt-8 md:space-y-7">
                  {steps.map((step, index) => (
                    <div key={step} className="grid grid-cols-[40px_1fr] gap-4">
                      <div className="text-2xl font-semibold text-accent/70">{String(index + 1).padStart(2, "0")}</div>
                      <p className="text-base leading-8 text-foreground/84">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </PointerFollower>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
