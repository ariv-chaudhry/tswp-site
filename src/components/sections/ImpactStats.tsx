import { impactStats } from "@/data/stats";
import { Container } from "@/components/ui/Container";

export function ImpactStats() {
  return (
    <section className="border-y border-navy/8 bg-navy py-14 text-white">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <li key={stat.label} className="text-center lg:text-left">
              <p className="text-4xl font-bold text-water-light sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-lg font-semibold">{stat.label}</p>
              {stat.description && (
                <p className="mt-1 text-sm text-white/60">{stat.description}</p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
