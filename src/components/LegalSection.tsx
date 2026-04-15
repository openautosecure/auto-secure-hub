import { AlertTriangle } from "lucide-react";

const LegalSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto terminal-bg p-8 md:p-10 border-destructive/30">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-xl font-mono font-bold text-destructive">Legal & Ethical Notice</h2>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              This tool is provided <strong className="text-card-foreground">strictly for educational, research, and security testing purposes only.</strong>
            </p>
            <p>
              It is NOT intended for unauthorized access, account takeover, credential stuffing, phishing, fraud, or any illegal activity. Using this tool against any account or service without explicit written permission is illegal.
            </p>
            <p>
              If you are a security researcher or student, use this only in controlled lab environments, on accounts you own, or with explicit permission (e.g., bug bounty programs).
            </p>
            <p className="text-destructive/80 font-semibold font-mono text-xs pt-2">
              Misuse may result in permanent bans, legal consequences, or account termination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
