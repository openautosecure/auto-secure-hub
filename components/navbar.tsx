import { Github, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono font-bold">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-glow">AutoSecure</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">features</a>
          <a href="#setup" className="hover:text-foreground transition-colors">setup</a>
          <a href="#legal" className="hover:text-foreground transition-colors">legal</a>
        </nav>
        <Button asChild variant="outline" size="sm">
          <a href="https://github.com/openautosecure/autosecure" target="_blank" rel="noreferrer">
            <Github /> GitHub
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
