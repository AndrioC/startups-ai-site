"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";

import globeImage from "@/assets/img/globe-image.svg";
import expertImage from "@/assets/img/plans-expert-image.svg";
import startupImage from "@/assets/img/plans-rocket-image.svg";
import About from "@/components/site/home/about";
import OurSolutions from "@/components/site/home/about-program";
import Contact from "@/components/site/home/contact";
import CountUpNumbers from "@/components/site/home/countup-numbers";
import Hero from "@/components/site/home/hero";
import OurPartners from "@/components/site/home/our-partners";
import Section from "@/components/site/home/section";
import Subscription from "@/components/site/home/subscription";
import WhyChooseUs from "@/components/site/home/why-choose-us";

import { InitialCardValues } from "../../api/initial-card-values/route";

export default function Home() {
  const lang = useLocale();
  const t = useTranslations("Home");

  const { data: initialCardValuesData } = useInitialCardValues(lang);
  console.log("HERE: ", initialCardValuesData);

  return (
    <main>
      <Hero />
      <div className="container grid sm:grid-cols-1 md:grid-cols-3 w-[300px] md:w-[500px] gap-y-3 place-items-center">
        <CountUpNumbers
          title={t("countup-startup-title")}
          img={startupImage}
          value={initialCardValuesData?.startups_quantity!}
        />
        <CountUpNumbers
          title={t("countup-experts-title")}
          img={expertImage}
          value={initialCardValuesData?.experts_quantity!}
        />
        <CountUpNumbers
          title={t("countup-country-title")}
          img={globeImage}
          value={initialCardValuesData?.countries_quantity!}
        />
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

const useInitialCardValues = (lang: string) =>
  useQuery<InitialCardValues>({
    queryKey: ["initial-card-data"],
    queryFn: () =>
      axios.get("/api/initial-card-values").then((res) => {
        return res.data;
      }),
    staleTime: 0,
  });
