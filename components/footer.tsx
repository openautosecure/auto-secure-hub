import { Github, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-sm">
          <Shield className="h-4 w-4 text-primary" />
          <span>AutoSecure</span>
          <span className="text-muted-foreground">· MIT License</span>
        </div>
        <a
          href="https://github.com/openautosecure/autosecure"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          <Github className="h-4 w-4" /> openautosecure/autosecure
        </a>
      </div>
    </footer>
  );
};

export default Footer;
