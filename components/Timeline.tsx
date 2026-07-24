type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.year} className="border-l-4 border-cyan bg-white p-6 shadow-lift">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-sky-700">
            {item.year}
          </span>
          <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-navy">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
