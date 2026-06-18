type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div
        className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
          align === "center" ? "justify-center" : ""
        } ${light ? "text-cyan" : "text-sky-700"}`}
      >
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2
        className={`text-balance text-3xl font-black leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
