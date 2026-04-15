const steps = [
  {
    step: "01",
    title: "Install Python 3.12",
    content: (
      <a href="https://www.python.org/downloads/release/python-3120/" target="_blank" rel="noopener noreferrer"
        className="text-primary hover:underline font-mono text-sm">
        Download Python 3.12 →
      </a>
    ),
  },
  {
    step: "02",
    title: "Create a Discord Bot",
    content: (
      <ul className="text-sm text-muted-foreground space-y-1.5 list-none">
        <li>Go to the <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord Developer Portal</a></li>
        <li>Create a new application → Bot</li>
        <li>Enable all Privileged Gateway Intents</li>
        <li>Copy your bot token</li>
      </ul>
    ),
  },
  {
    step: "03",
    title: "Get API Keys (Optional)",
    content: (
      <div className="text-sm text-muted-foreground space-y-1.5">
        <div><span className="text-secondary-foreground">Hypixel:</span> <a href="https://developer.hypixel.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">developer.hypixel.net</a></div>
        <div><span className="text-secondary-foreground">DonutSMP:</span> <a href="https://api.donutsmp.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">api.donutsmp.net</a></div>
      </div>
    ),
  },
  {
    step: "04",
    title: "Configure the Bot",
    content: (
      <pre className="text-sm bg-background/50 p-3 rounded-md border border-border overflow-x-auto font-mono text-muted-foreground">
{`{
  "bot_token": "YOUR_DISCORD_BOT_TOKEN",
  "owners": [YOUR_DISCORD_ID]
}`}
      </pre>
    ),
  },
];

const SetupSection = () => {
  return (
    <section id="setup" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="text-gradient">Setup Guide</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Get up and running in minutes
        </p>

        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((s) => (
            <div key={s.step} className="terminal-bg p-6 transition-all hover:border-primary/30">
              <div className="flex items-start gap-4">
                <span className="text-primary font-mono font-bold text-lg shrink-0">{s.step}</span>
                <div className="flex-1">
                  <h3 className="font-mono font-semibold text-card-foreground mb-3">{s.title}</h3>
                  {s.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
