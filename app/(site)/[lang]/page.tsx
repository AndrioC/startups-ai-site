import About from "@/components/site/home/about";
import OurSolutions from "@/components/site/home/about-program";
import Contact from "@/components/site/home/contact";
import CountUpComponent from "@/components/site/home/countup-component";
import Hero from "@/components/site/home/hero";
import OurPartners from "@/components/site/home/our-partners";
import Section from "@/components/site/home/section";
import Subscription from "@/components/site/home/subscription";
import WhyChooseUs from "@/components/site/home/why-choose-us";
import prisma from "@/prisma/client";

export default async function Home() {
  const startupsQuantity = await prisma.startups.count({
    where: {
      is_approved: true,
    },
  });

  const expertsQuantity = await prisma.experts.count({
    where: {
      is_approved: true,
    },
  });

  const countriesQuantity = await prisma.startups.findMany({
    select: {
      country_id: true,
    },
    where: {
      country_id: {
        not: null,
      },
    },
    distinct: ["country_id"],
  });
  return (
    <main>
      <Hero />
      <div className="container grid sm:grid-cols-1 md:grid-cols-3 w-[300px] md:w-[500px] gap-y-3 place-items-center">
        <div>
          <CountUpComponent
            startupsQuantity={startupsQuantity}
            expertsQuantity={expertsQuantity}
            countriesQuantity={countriesQuantity.length}
          />
        </div>
      </div>
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
