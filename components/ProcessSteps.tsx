type Step = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative mt-12 grid gap-0 lg:grid-cols-5">
      <div
        className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-slate-200 lg:block"
        aria-hidden="true"
      />
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative border-l border-slate-200 pb-9 pl-8 last:pb-0 lg:border-l-0 lg:px-5 lg:pb-0 lg:pt-16 lg:text-center"
        >
          <span className="absolute -left-[17px] top-0 grid size-8 place-items-center border border-slate-300 bg-white font-mono text-[10px] font-bold text-sky-700 lg:left-1/2 lg:top-0 lg:size-12 lg:-translate-x-1/2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-black tracking-[-0.03em] text-navy">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
