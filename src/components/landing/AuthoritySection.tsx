import RetouchReveal from "@/components/ui/RetouchReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactSheetStack3D from "@/components/3d/ContactSheetStack3D";
import PointerFollower from "@/components/ui/PointerFollower";

const details = [
  "Color-managed workflow tuned for natural skin tone",
  "Retouching notes delivered with every final selection",
  "Print-ready exports alongside screen-first crops",
];

const AuthoritySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <div className="max-w-[62rem]">
            <span className="label-uppercase text-accent">Post Production</span>
            <h2 className="heading-section mt-4 max-w-[15ch] text-[clamp(2.1rem,3.9vw,3.55rem)] leading-[1.01] text-foreground">
              Retouching should refine the portrait, not flatten the person.
            </h2>
            <p className="body-base mt-4 max-w-lg">
              The edit preserves texture, expression, and tone while cleaning what distracts. That balance is what
              keeps the images usable for both editorial layouts and personal keepsakes.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1.05fr_0.7fr] lg:items-center">
          <ScrollReveal>
            <RetouchReveal afterLabel="Refined" beforeLabel="Camera Raw" />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <PointerFollower className="rounded-[30px]">
              <div className="card-glass p-6 md:p-10">
                <div className="mb-6 hidden justify-center lg:flex">
                  <ContactSheetStack3D />
                </div>
                <p className="label-uppercase text-foreground/52">What stays true</p>
                <div className="mt-6 space-y-5 md:mt-8">
                  {details.map((detail) => (
                    <div key={detail} className="flex items-start gap-4 border-b border-white/8 pb-5">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                      <p className="text-base leading-8 text-foreground/82">{detail}</p>
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

export default AuthoritySection;
