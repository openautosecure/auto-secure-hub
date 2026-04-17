const steps = [
  {
    n: "01",
    title: "Clone the repository",
    code: "git clone https://github.com/openautosecure/autosecure.git\ncd autosecure",
  },
  {
    n: "02",
    title: "Install Python 3.12+ dependencies",
    code: "python -m venv .venv && source .venv/bin/activate\npip install -r requirements.txt",
  },
  {
    n: "03",
    title: "Configure your Discord bot token & API keys",
    code: "cp .env.example .env\n# edit .env: DISCORD_TOKEN=...  MS_CLIENT_ID=...",
  },
  {
    n: "04",
    title: "Launch the bot",
    code: "python -m autosecure",
  },
];

const SetupSection = () => {
  return (
    <section id="setup" className="py-20 md:py-28 border-t border-border/40 bg-card/20">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// quickstart</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Up and running in 4 steps</h2>
          <p className="text-muted-foreground">
            Requires Python 3.12+, a Discord bot token, and your API keys.
          </p>
        </div>
        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-lg border border-border/60 bg-background/60 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-4 px-5 py-4 border-b border-border/40">
                <span className="font-mono text-xs text-primary">{s.n}</span>
                <h3 className="font-mono font-medium">{s.title}</h3>
              </div>
              <pre className="px-5 py-4 text-sm font-mono text-muted-foreground overflow-x-auto">
                <code>{s.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
