import { Button } from "@/components/ui/button";
import { Github, Shield, Terminal, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-mono text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            v1.0 · open source · python 3.12+
          </div>

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/40 bg-card/60 shadow-glow animate-pulse-glow">
            <Shield className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight text-glow mb-6">
            AutoSecure
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans">
            An open-source Discord bot for{" "}
            <span className="text-foreground font-medium">Microsoft account security research</span>
            . Built for educators, blue teams and authorized pen testers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="https://github.com/openautosecure/autosecure" target="_blank" rel="noreferrer">
                <Github /> View on GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#setup">
                <Terminal /> Get Started
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Star className="h-3.5 w-3.5" /> MIT License</span>
            <span>·</span>
            <span>Educational use only</span>
            <span>·</span>
            <span>Python · Discord.py</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
