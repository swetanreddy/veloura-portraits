import ScrollReveal from "@/components/ui/ScrollReveal";

const concerns = [
  "I never know what to do with my hands or expression.",
  "I want polished images, but I do not want to look over-retouched.",
  "I need variety for different uses without changing studios three times.",
];

const studioResponses = [
  "Movement prompts and pose direction are built into the session pacing.",
  "Retouching is restraint-first: true skin, clean color, better light.",
  "Set design, lens selection, and styling changes create range in one room.",
];

const ProblemSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(199,122,90,0.12),transparent_20%),radial-gradient(circle_at_80%_60%,rgba(183,205,197,0.1),transparent_22%)]" />
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="label-uppercase text-accent">What We Remove</span>
            <h2 className="heading-section mt-5 text-balance text-foreground">
              Portrait anxiety usually has very little to do with the camera.
            </h2>
            <p className="body-base mt-5 max-w-xl">
              It comes from uncertainty: what to wear, how to move, whether the images will still look like you. The
              studio is designed to reduce that uncertainty before the first shutter.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="card-glass p-8 md:p-10">
              <p className="label-uppercase text-foreground/50">What clients say before booking</p>
              <div className="mt-8 space-y-5">
                {concerns.map((item) => (
                  <div key={item} className="border-b border-white/8 pb-5 text-lg leading-8 text-foreground/86">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="card-elevated p-8 md:p-10">
              <p className="label-uppercase text-accent">How the session answers it</p>
              <div className="mt-8 space-y-5">
                {studioResponses.map((item) => (
                  <div key={item} className="flex gap-4 border-b border-white/8 pb-5">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(199,122,90,0.5)]" />
                    <p className="text-lg leading-8 text-foreground/86">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
