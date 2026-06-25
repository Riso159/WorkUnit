import type { projectTypes } from "@/lib/content";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

type Project = (typeof projectTypes)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-lift">
      <VisualPlaceholder
        label="Ukážkový vizuál projektu"
        code={project.code}
        className="min-h-56 transition duration-500 group-hover:scale-[1.015]"
      />
      <div className="p-7">
        <div className="mb-5 inline-flex border border-amber-300 bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800">
          {project.type}
        </div>
        <h2 className="text-2xl font-black leading-tight tracking-[-0.04em] text-navy">
          {project.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
        <p className="mt-6 border-t border-slate-100 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400">
          Ukážkový typ zákazky – doplniť podľa reálnych referencií
        </p>
      </div>
    </article>
  );
}
