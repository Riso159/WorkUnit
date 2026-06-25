type StatCardProps = {
  value: string;
  label: string;
  dark?: boolean;
};

export function StatCard({ value, label, dark = false }: StatCardProps) {
  return (
    <article
      className={`border px-6 py-6 ${
        dark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white"
      }`}
    >
      <span
        className={`block text-2xl font-black tracking-[-0.05em] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {value}
      </span>
      <p
        className={`mt-2 text-xs font-bold uppercase leading-5 tracking-[0.1em] ${
          dark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {label}
      </p>
    </article>
  );
}
