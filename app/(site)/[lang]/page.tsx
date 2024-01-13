import About from "@/components/site/home/about";
import Contact from "@/components/site/home/contact";
import Hero from "@/components/site/home/hero";
import OurSolutions from "@/components/site/home/our-solutions";
import Section from "@/components/site/home/section";
import Subscription from "@/components/site/home/subscription";
import WhyChooseUs from "@/components/site/home/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section>
        <WhyChooseUs />
      </Section>
      <Section>
        <Subscription />
      </Section>
      <Section>
        <OurSolutions />
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
