import { Shield, Github, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(160 100% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 100% 45%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(160 100% 45% / 0.3), transparent 70%)' }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono text-primary">v1.1.0 — Latest Release</span>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield className="w-20 h-20 text-primary animate-float" strokeWidth={1.5} />
            <div className="absolute inset-0 blur-2xl bg-primary/20" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 tracking-tight">
          <span className="text-gradient">auto</span>
          <span className="text-foreground">secure</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Open-source Microsoft account security research toolkit.
          <br className="hidden md:block" />
          Discord bot powered by Python — for educational & authorized testing only.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/openautosecure/autosecure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-mono font-semibold text-sm hover:brightness-110 transition-all glow-primary"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
          <a
            href="#setup"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-mono font-semibold text-sm hover:bg-secondary/80 transition-all"
          >
            <Terminal className="w-5 h-5" />
            Setup Guide
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-muted-foreground text-sm font-mono">
          <div className="flex items-center gap-2">
            <span className="text-primary">★</span> 13 stars
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">⑂</span> 8 forks
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">⚡</span> Python
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">📄</span> MIT
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
