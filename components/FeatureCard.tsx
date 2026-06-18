type FeatureCardProps = {
  title: string;
  description: string;
  index?: number;
  dark?: boolean;
};

export function FeatureCard({
  title,
  description,
  index = 0,
  dark = false,
}: FeatureCardProps) {
  return (
    <article
      className={`group border p-7 transition duration-300 hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/[0.04] hover:border-cyan/50"
          : "border-slate-200 bg-white hover:border-cyan/70 hover:shadow-lift"
      }`}
    >
      <div
        className={`mb-8 grid size-11 place-items-center font-mono text-xs font-bold transition group-hover:bg-cyan group-hover:text-ink ${
          dark ? "bg-white/10 text-cyan" : "bg-mist text-sky-700"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className={`text-xl font-black tracking-[-0.03em] ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h3>
      <p className={`mt-3 text-sm leading-7 ${dark ? "text-slate-400" : "text-slate-600"}`}>
        {description}
      </p>
    </article>
  );
}
