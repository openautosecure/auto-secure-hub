import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">autosecure</span> — MIT License
        </div>
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <a href="https://github.com/openautosecure/autosecure" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
