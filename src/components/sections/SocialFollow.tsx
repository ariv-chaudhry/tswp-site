import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SocialFollow() {
  if (!site.social.instagram) return null;

  return (
    <section className="border-y border-navy/8 bg-navy py-16 text-white sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Follow us on Instagram
          </h2>
          <p className="mt-4 text-white/70">
            Updates on projects, fundraisers, and student-led events.
          </p>
          <div className="mt-8">
            <Button href={site.social.instagram} variant="secondary" external>
              @thestudentwaterproject
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
