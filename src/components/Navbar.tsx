import { Shield, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono font-bold text-foreground">
          <Shield className="w-5 h-5 text-primary" />
          autosecure
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#setup" className="hover:text-primary transition-colors">Setup</a>
          <a href="https://github.com/openautosecure/autosecure" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/30 transition-all">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
