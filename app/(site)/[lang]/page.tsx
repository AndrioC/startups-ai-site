import About from "@/components/site/home/about";
import OurSolutions from "@/components/site/home/about-program";
import Contact from "@/components/site/home/contact";
import Hero from "@/components/site/home/hero";
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
        <OurSolutions />
      </Section>
      <Section>
        <OurPartners />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Contact />
      </Section>
    </main>
  );
}
