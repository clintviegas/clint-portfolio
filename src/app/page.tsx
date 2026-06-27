import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Proof } from "@/components/Proof";
import { WorkMarquee } from "@/components/WorkMarquee";
import { Work } from "@/components/Work";
import { FeaturedQuote } from "@/components/FeaturedQuote";
import { Demos } from "@/components/Demos";
import { Services } from "@/components/Services";
import { AIStack } from "@/components/AIStack";
import { FounderNote } from "@/components/FounderNote";
import { Process } from "@/components/Process";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WorkMarquee />
        <Proof />
        <Work />
        <FeaturedQuote />
        <Demos />
        <Services />
        <AIStack />
        <FounderNote />
        <Process />
        <Comparison />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
