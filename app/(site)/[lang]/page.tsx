"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale } from "next-intl";

import { InitialCardValues } from "@/app/api/initial-card-values/route";
import { StartupSummary } from "@/app/api/startups/route";
import About from "@/components/site/home/about";
import OurSolutions from "@/components/site/home/about-program";
import Contact from "@/components/site/home/contact";
import CountUpComponent from "@/components/site/home/countup-component";
import Hero from "@/components/site/home/hero";
import OurPartners from "@/components/site/home/our-partners";
import Section from "@/components/site/home/section";
import Subscription from "@/components/site/home/subscription";
import WhyChooseUs from "@/components/site/home/why-choose-us";

export default function Home() {
  const lang = useLocale();

  console.log("lang", lang);

  return (
    <main>
      <Hero />
      <div className="container grid sm:grid-cols-1 md:grid-cols-3 w-[300px] md:w-[500px] gap-y-3 place-items-center">
        <div>
          <CountUpComponent />
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

const useInitialCardValues = () =>
  useQuery<InitialCardValues>({
    queryKey: ["initial-card-data"],
    queryFn: () =>
      axios.get("/api/initial-card-values").then((res) => {
        return res.data;
      }),
  });

const useStartups = (lang: string) =>
  useQuery<StartupSummary[]>({
    queryKey: ["startups-data", lang],
    queryFn: () =>
      axios.get(`/api/startups?lang=${lang}`).then((res) => {
        return res.data;
      }),
  });
