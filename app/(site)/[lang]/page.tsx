import Contact from "@/components/site/home/contact";
import Hero from "@/components/site/home/hero";
import OurClients from "@/components/site/home/our-clients";
import OurPartners from "@/components/site/home/our-partners";
import Section from "@/components/site/home/section";
import WhyChooseUs from "@/components/site/home/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section>
        <WhyChooseUs />
      </Section>
      <Section>
        <OurClients />
      </Section>
      <Section>
        <OurPartners />
      </Section>
      <Section>
        <Contact />
      </Section>
    </main>
  );
}
