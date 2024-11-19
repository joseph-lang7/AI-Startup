import Hero from "../sections/hero/hero";
import Companies from "../sections/companies/companies";
import Features from "../sections/features/features";
import Benefits from "../sections/benefits/benefits";
import OurClients from "../sections/our-clients/our-clients";
import Pricing from "@/sections/pricing/pricing";
import JoinWaitlist from "@/sections/join-waitlist/join-waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Benefits />
      <OurClients />
      <Pricing />
        <JoinWaitlist />
    </>
  );
}
