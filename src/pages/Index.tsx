import HeroSection from "@/components/landing/HeroSection";
import QualificationSection from "@/components/landing/QualificationSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <QualificationSection />
      <ProblemSection />
      <SolutionSection />
      <AuthoritySection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
