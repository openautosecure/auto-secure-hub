import { AlertTriangle } from "lucide-react";

const LegalSection = () => {
  return (
    <section id="legal" className="py-20 md:py-28 border-t border-border/40">
      <div className="container">
        <div className="max-w-3xl mx-auto rounded-xl border border-destructive/40 bg-destructive/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-destructive/15 text-destructive">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-destructive mb-2">// ethical use notice</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">For authorized research only</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AutoSecure is published as an educational resource for security researchers, blue teams,
                and red teams operating under a formal authorization. Using this software against accounts,
                systems, or services you do not own — or do not have explicit written permission to test —
                is illegal in most jurisdictions and strictly prohibited by the project maintainers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The maintainers and contributors of AutoSecure assume no liability for misuse. By cloning,
                installing, or running this software you agree to comply with all applicable laws and the
                project license.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
