import { Check, Clock } from "lucide-react";

const features = [
  { name: "Retrieve account owner info", done: true },
  { name: "Remove all security proofs", done: true },
  { name: "Sign out of all active devices", done: true },
  { name: "Bypass email-based 2FA verification", done: true },
  { name: "Check if an account is locked", done: true },
  { name: "Disable 2FA", done: true },
  { name: "Generate recovery code", done: true },
  { name: "Change security email", done: true },
  { name: "Change password", done: true },
  { name: "Remove Windows Hello keys (Zyger exploit)", done: true },
  { name: "Minecraft account check", done: true },
  { name: "DonutSMP stats checker", done: true },
  { name: "Hypixel stats checker", done: true },
  { name: "Change primary alias", done: false },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="text-gradient">Features</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          A comprehensive toolkit for Microsoft account security research
        </p>

        <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="terminal-bg flex items-center gap-3 px-5 py-3.5 transition-all hover:border-primary/30"
            >
              {feature.done ? (
                <Check className="w-4 h-4 text-primary shrink-0" />
              ) : (
                <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
              )}
              <span className={`text-sm font-mono ${feature.done ? "text-card-foreground" : "text-muted-foreground"}`}>
                {feature.name}
              </span>
              {!feature.done && (
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full border border-muted-foreground/30 text-muted-foreground">
                  planned
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
