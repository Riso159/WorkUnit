import { Container } from "@/components/Container";

export type LegalBlock = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export function LegalTextPage({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.title} className="border-b border-slate-200 pb-10 last:border-b-0 last:pb-0">
                <h2 className="text-2xl font-black tracking-[-0.04em] text-navy sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-7">
                  {section.blocks.map((block, index) => (
                    <div key={`${section.title}-${block.title ?? index}`} className="space-y-3">
                      {block.title ? (
                        <h3 className="text-base font-extrabold text-navy">{block.title}</h3>
                      ) : null}
                      {block.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {paragraph}
                        </p>
                      ))}
                      {block.bullets ? (
                        <ul className="space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {block.bullets.map((bullet) => (
                            <li key={bullet} className="list-disc">{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
