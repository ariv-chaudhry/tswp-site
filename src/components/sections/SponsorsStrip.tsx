import { currentSponsors } from "@/data/sponsors";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SponsorsStrip() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          title="Currently Supported By"
          description="Project partners named across The Student Water Project site. Replace with official supporter logos when available."
          align="center"
          className="mb-10"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentSponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className="flex min-h-28 items-center justify-center rounded-2xl border border-navy/8 bg-water/5 px-4 py-6 text-center"
            >
              <div>
                <p className="font-semibold text-navy">{sponsor.name}</p>
                <p className="mt-1 text-xs text-navy/45">
                  Add logo: {sponsor.logo}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
