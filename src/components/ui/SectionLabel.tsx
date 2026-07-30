import Reveal from "@/components/ui/Reveal";

export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal direction="left" className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-accent-terracotta">{index}</span>
      <div className="h-px flex-1 bg-accent-terracotta/20 max-w-[60px]" />
      <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
        {label}
      </span>
    </Reveal>
  );
}
