"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import whyUsImage01 from "@/assets/img/whyus-image01.svg";
import whyUsImage02 from "@/assets/img/whyus-image02.svg";
import whyUsImage03 from "@/assets/img/whyus-image03.svg";

import Container from "./container";
import WhyChooseUsList from "./why-choose-us-list";

export default function WhyChooseUs() {
  const t = useTranslations("Home");
  return (
    <section id="WhyChooseUs" className="py-8 sm:py-12 lg:py-20 xl:py-24">
      <Container>
        <div className="w-full flex flex-col lg:flex-row lg:px-32 gap-10">
          <div className="w-full flex flex-col justify-center items-center lg:w-1/2 lg:items-start">
            <h2 className="w-64 text-3xl md:text-5xl lg:text-5xl font-bold text-center lg:text-left lg:w-full">
              {t("why-choose-us-title")}
            </h2>
            <WhyChooseUsList />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-6 lg:mt-0">
            <Image src={whyUsImage01} alt="whyus-image-01" />
            <div className="hidden mt-6 lg:mt-10 gap-6 lg:flex">
              <Image src={whyUsImage02} alt="whyus-image-02" />
              <Image src={whyUsImage03} alt="whyus-image-03" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
