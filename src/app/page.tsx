import { CTA } from "@/components/sections/CTA";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { FundraisersPreview } from "@/components/sections/FundraisersPreview";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { MerchandiseSignup } from "@/components/sections/MerchandiseSignup";
import { SocialFollow } from "@/components/sections/SocialFollow";
import { SponsorsStrip } from "@/components/sections/SponsorsStrip";
import { homeFinalCta } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <HowItWorks />
      <FeaturedProject />
      <FundraisersPreview />
      <MerchandiseSignup />
      <SocialFollow />
      <SponsorsStrip />
      <CTA
        title={homeFinalCta.title}
        primaryCta={homeFinalCta.primaryCta}
        secondaryCta={homeFinalCta.secondaryCta}
        variant="gradient"
      />
    </>
  );
}
