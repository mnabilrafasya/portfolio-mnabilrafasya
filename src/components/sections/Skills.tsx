import { Brain, Code2, Database, Layers, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { skillGroups, colorMap } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = { Brain, Code2, Database, Layers };

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="02" label="Skills" />

        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3">
            Technical <span className="text-gradient-violet-cyan">Skills</span>
          </h2>
          <p className="text-text-secondary mb-12 text-sm lg:text-base">
            Technologies, frameworks, and tools I use to design, develop, and
            deploy full-stack web applications, computer vision models, and
            distributed database systems.
          </p>
        </Reveal>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal key={group.label} delay={i * 80}>
                <div className="glass-card glass-card-hover rounded-2xl p-5 h-full">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border mb-4 ${colorMap[group.color]}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-text-primary font-semibold text-sm mb-3">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="tag-pill text-text-secondary border-subtle bg-fill-subtle text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
