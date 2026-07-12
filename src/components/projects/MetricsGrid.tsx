import { ProjectMetric } from "@/types/project";

export default function MetricsGrid({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="glass-card rounded-xl p-4 text-center"
        >
          <div className="text-xl md:text-2xl font-bold text-gradient-violet-cyan mb-1">
            {metric.value}
          </div>
          <div className="font-mono text-[11px] text-text-muted uppercase tracking-wide">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
