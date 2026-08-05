import { merchandiseSignup } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { EmailSignupForm } from "@/components/ui/EmailSignupForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MerchandiseSignup() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-navy/8 bg-gradient-to-br from-water/8 to-white p-8 shadow-sm sm:p-10">
          <SectionHeader
            eyebrow={merchandiseSignup.eyebrow}
            title={merchandiseSignup.title}
            description={merchandiseSignup.description}
            align="center"
            className="mb-8"
          />
          <EmailSignupForm prompt={merchandiseSignup.prompt} />
        </div>
      </Container>
    </section>
  );
}
