import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/3d/TiltCard";
import { Star } from "lucide-react";
import portraitImage from "@/assets/hero-option-1.jpg";
import studioImage from "@/assets/hero-studio-new.jpg";
import commercialImage from "@/assets/hero-commercial.jpg";

const stats = [
  { value: "140+", label: "portrait sessions directed" },
  { value: "4.9", label: "average client rating" },
  { value: "3", label: "delivery crops per chosen frame" },
];

const testimonials = [
  {
    quote: "I expected a headshot session and got a full visual direction. The gallery looked finished before retouch notes were even sent.",
    name: "Mira, creative director",
  },
  {
    quote: "My family photos still feel like us. Nothing stiff, nothing overdone, just much more beautifully lit.",
    name: "Jordan and Elise",
  },
];

const gallery = [
  { image: portraitImage, title: "Quiet confidence" },
  { image: studioImage, title: "Studio editorial" },
  { image: commercialImage, title: "Brand campaign portrait" },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <span className="label-uppercase text-accent">Selected Frames</span>
              <h2 className="heading-section mt-4 max-w-[15ch] text-balance text-[clamp(2.1rem,3.9vw,3.55rem)] leading-[1.01] text-foreground">
                A portrait library with enough range to work everywhere your image needs to live.
              </h2>
            </div>
            <p className="body-base max-w-lg lg:justify-self-end">
              The session is built to deliver both presence and flexibility: hero portraits, tighter crops, quieter
              expressions, and frames that can survive print, web, or a living room wall.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {gallery.map((item, index) => (
            <ScrollReveal key={item.title} delay={0.12 * index}>
              <TiltCard className="h-full" glareEnabled={false} tiltAmount={6}>
                <div
                  className={`relative overflow-hidden rounded-[28px] ${
                    index === 0 ? "h-[360px] md:h-[460px]" : "h-[300px] md:h-[420px]"
                  }`}
                >
                  <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,15,0.08),rgba(7,10,15,0.78)_72%,rgba(7,10,15,0.96))]" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="label-uppercase text-accent">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-3 text-2xl text-foreground">{item.title}</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1fr]">
          <ScrollReveal>
            <div className="card-elevated p-8 md:p-10">
              <p className="label-uppercase text-accent">Studio numbers</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="stat-huge text-gradient-gold">{stat.value}</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-foreground/52">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5">
            {testimonials.map((item, index) => (
              <ScrollReveal key={item.name} delay={0.12 * (index + 1)}>
                <div className="card-glass p-8 md:p-10">
                  <div className="flex items-center gap-2 text-accent/90">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={`${item.name}-${starIndex}`} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-xl leading-9 text-foreground/88">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-6 text-sm uppercase tracking-[0.24em] text-accent">{item.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
