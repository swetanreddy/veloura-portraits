import TiltCard from "@/components/3d/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Sparkles, UserRound, UsersRound } from "lucide-react";

const sessions = [
  {
    icon: UserRound,
    title: "Personal Portraits",
    description: "Editorial solo sessions with wardrobe guidance, pose coaching, and expressive close framing.",
  },
  {
    icon: Sparkles,
    title: "Brand Presence",
    description: "Founder and creative portraits made for launch pages, press kits, speaker bios, and campaigns.",
  },
  {
    icon: UsersRound,
    title: "Families in Form",
    description: "Directed but natural family sessions with an emphasis on warmth, skin tone, and heirloom delivery.",
  },
];

const QualificationSection = () => {
  return (
    <section className="section-padding bg-gradient-premium">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <span className="label-uppercase text-accent">Who We Photograph</span>
              <h2 className="heading-section mt-4 max-w-xl text-balance text-[clamp(2.1rem,3.9vw,3.55rem)] leading-[1.01] text-foreground">
                One studio. Three portrait tracks. The same cinematic standard across all of them.
              </h2>
            </div>
            <p className="body-base max-w-lg lg:justify-self-end">
              Every booking begins with intent: where the photos will live, how you want to feel in them, and what
              kind of presence they need to carry after the session is over.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {sessions.map((session, index) => (
            <ScrollReveal key={session.title} delay={0.12 * index}>
              <TiltCard className="h-full" glareEnabled={false} tiltAmount={8}>
                <div className="card-elevated h-full p-8 md:p-9">
                  <session.icon className="h-6 w-6 text-accent" />
                  <h3 className="heading-subsection mt-8 text-foreground">{session.title}</h3>
                  <p className="body-base mt-4">{session.description}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
