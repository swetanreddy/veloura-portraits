import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding" id="consultation">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="card-elevated relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,122,90,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(183,205,197,0.14),transparent_22%)]" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[58rem]">
                <span className="label-uppercase text-accent">Book the studio</span>
                <h2 className="heading-section mt-4 max-w-[16ch] text-balance text-[clamp(2rem,3.7vw,3.35rem)] leading-[1.02] text-foreground">
                  If the portrait needs to feel elevated, let&apos;s build it with intention from the first frame.
                </h2>
                <p className="body-base mt-4 max-w-lg">
                  Consultation includes wardrobe notes, set direction, and a recommendation for the portrait track that
                  matches how the images need to perform.
                </p>
              </div>

              <div className="flex w-full max-w-[20.5rem] flex-col gap-4 justify-self-start sm:max-w-none sm:flex-row lg:w-[20.5rem] lg:flex-col lg:justify-self-end">
                <Button asChild className="w-full" size="xl" variant="cta">
                  <a href="mailto:bookings@veloura.studio">bookings@veloura.studio</a>
                </Button>
                <Button asChild className="w-full" size="xl" variant="cta-outline">
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
