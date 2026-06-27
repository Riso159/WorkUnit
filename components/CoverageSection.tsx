import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { countries } from "@/lib/content";

export function CoverageSection() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Mapa pôsobenia"
            title="Pracovné tímy pre Slovensko a vybrané krajiny EÚ"
            description="WorkUnit komunikuje konkrétne krajiny pôsobenia. Reálne skúsenosti vie doložiť najmä v Nemecku a Česku."
            align="center"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="relative mt-12 overflow-hidden border border-slate-200 bg-white p-6 shadow-lift sm:p-8">
            <div className="industrial-dots absolute inset-0 opacity-60" />
            <div className="relative grid gap-4 md:grid-cols-5">
              {countries.map((country) => (
                <article
                  key={country.code}
                  className="group relative min-h-44 overflow-hidden border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan hover:shadow-lift"
                >
                  <span className="mb-8 block h-1 w-10 bg-cyan transition group-hover:w-16" />
                  <span className="block text-4xl font-black tracking-[-0.06em] text-navy transition group-hover:text-sky-700">
                    {country.code}
                  </span>
                  <h3 className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-navy">
                    {country.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{country.note}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
