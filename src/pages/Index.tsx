import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { TrustedBy } from "@/components/TrustedBy";
import { About } from "@/components/About";
import { InvestmentThesis } from "@/components/InvestmentThesis";
import { Portfolio } from "@/components/Portfolio";
import { CaseStudies } from "@/components/CaseStudies";
import { ESG } from "@/components/ESG";
import { Team } from "@/components/Team";
import { Insights } from "@/components/Insights";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <TrustedBy />
      <About />
      <InvestmentThesis />
      <Portfolio />
      <CaseStudies />
      <ESG />
      <Team />
      <Insights />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
