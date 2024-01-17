import { useTranslations } from "next-intl";

import { expertsList, infoFlags, startupsList } from "@/app/(site)/data";
import globeImage from "@/assets/img/globe-image.svg";
import expertImage from "@/assets/img/plans-expert-image.svg";
import startupImage from "@/assets/img/plans-rocket-image.svg";
import About from "@/components/site/home/about";
import Contact from "@/components/site/home/contact";
import CountUpNumbers from "@/components/site/home/countup-numbers";
import Hero from "@/components/site/home/hero";
import OurSolutions from "@/components/site/home/our-solutions";
import Section from "@/components/site/home/section";
import Subscription from "@/components/site/home/subscription";
import WhyChooseUs from "@/components/site/home/why-choose-us";

export default function Home() {
  const infoFlagsLength = Object.entries(infoFlags).length;
  const t = useTranslations("Home");
  return (
    <main>
      <Hero />
      <div className="container grid sm:grid-cols-1 md:grid-cols-3 w-[500px] gap-y-3 place-items-center">
        <CountUpNumbers
          title={t("countup-startup-title")}
          img={startupImage}
          value={startupsList.length}
        />
        <CountUpNumbers
          title={t("countup-experts-title")}
          img={expertImage}
          value={expertsList.length}
        />
        <CountUpNumbers
          title={t("countup-country-title")}
          img={globeImage}
          value={infoFlagsLength}
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
        <About />
      </Section>
      <Section>
        <Contact />
      </Section>
    </main>
  );
}
