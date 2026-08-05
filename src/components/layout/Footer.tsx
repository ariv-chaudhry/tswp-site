import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-navy/8 bg-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-water to-water-dark text-sm font-bold text-white">
                T
              </span>
              <span className="font-bold">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-water-light">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-water-light">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              {site.social.instagram && (
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {site.social.linkedin && (
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {site.social.youtube && (
                <li>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    YouTube
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; {year} by {site.name}.
        </div>
      </Container>
    </footer>
  );
}
