import {
  SiteHeader,
  Hero,
  StatBand,
  WhatIs,
  HowItWorks,
  Benefits,
  Municipios,
  ContactSection,
  SiteFooter,
} from "./components/pelep/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatBand />
        <WhatIs />
        <HowItWorks />
        <Benefits />
        <Municipios />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
