import Reveal from "@/components/ui/Reveal";

export default function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <Reveal direction="left" className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-violet-400">{index}</span>
      <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent max-w-[60px]" />
      <span className="font-mono text-xs text-text-muted uppercase tracking-widest">{label}</span>
    </Reveal>
  );
}
