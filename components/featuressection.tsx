import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, KeyRound, UserSearch, Bot, Lock, Activity } from "lucide-react";

const features = [
  {
    icon: ShieldAlert,
    title: "2FA Bypass Research",
    desc: "Simulate and analyze second-factor flows in a controlled lab environment for defensive research.",
  },
  {
    icon: UserSearch,
    title: "Account Reconnaissance",
    desc: "Inspect publicly available account metadata for authorized security assessments.",
  },
  {
    icon: KeyRound,
    title: "Credential Auditing",
    desc: "Test password hygiene and detect known leaked credentials against your own tenants.",
  },
  {
    icon: Bot,
    title: "Discord-Native UX",
    desc: "Slash-command driven bot with rich embeds — collaborate with your team where you already are.",
  },
  {
    icon: Lock,
    title: "Permission Scoped",
    desc: "Per-guild role gating ensures only authorized researchers can execute sensitive commands.",
  },
  {
    icon: Activity,
    title: "Full Audit Trail",
    desc: "Every command is logged with actor, target and timestamp for compliance and review.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 border-t border-border/40">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for security teams</h2>
          <p className="text-muted-foreground">
            A focused toolkit covering the most common Microsoft account research scenarios — without leaving Discord.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <Card key={f.title} className="bg-card/50 border-border/60 hover:border-primary/40 transition-all hover:shadow-glow group">
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-mono font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
