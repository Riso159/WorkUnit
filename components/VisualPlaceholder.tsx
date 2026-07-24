type VisualPlaceholderProps = {
  label?: string;
  code?: string;
  className?: string;
};

export function VisualPlaceholder({
  label = "Priestor pre budúcu fotografiu",
  code = "WU / VISUAL",
  className = "",
}: VisualPlaceholderProps) {
  return (
    <div
      className={`blueprint relative min-h-72 overflow-hidden border border-white/10 bg-steel ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute left-[14%] top-[14%] h-[72%] w-px bg-cyan/30" />
      <div className="absolute left-[14%] top-[70%] h-px w-[72%] bg-cyan/30" />
      <div className="absolute right-[14%] top-[18%] size-24 border border-cyan/25" />
      <div className="absolute bottom-[18%] left-[20%] h-24 w-40 border border-white/10 bg-white/[0.03]" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
        <span className="max-w-[14rem] text-sm font-semibold text-white/75">{label}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan">
          {code}
        </span>
      </div>
    </div>
  );
}
