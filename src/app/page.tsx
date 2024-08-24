import Image from "next/legacy/image";
import Hero from "./components/hero/hero";
import Companies from "./components/companies/companies";
import Features from "./components/features/features";
import Benefits from "./components/benefits/benefits";
import OurClients from "./components/our-clients/our-clients";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Benefits />
      <OurClients />
    </>
  );
}
