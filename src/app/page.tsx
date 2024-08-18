import Image from "next/image";
import Hero from "./components/hero/hero";
import Companies from "./components/companies/companies";
import Features from "./components/features/features";
import Benefits from "./components/benefits/benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Benefits />
    </>
  );
}
