const Footer = () => {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-narrow flex flex-col gap-4 text-sm text-foreground/52 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base text-foreground/78">Veloura Portrait House</p>
          <p className="mt-1">Portrait studio direction for personal, family, and brand sessions.</p>
        </div>
        <div className="flex gap-6 uppercase tracking-[0.22em]">
          <a href="#portfolio">Portfolio</a>
          <a href="#consultation">Consultation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
