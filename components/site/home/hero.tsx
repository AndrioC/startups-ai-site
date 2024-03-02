"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import heroBg from "@/assets/img/hero-bg-min.svg";
import heroBgMobile from "@/assets/img/hero-bg-mobile-min.svg";

import Button from "./button";
import CheckCircle from "./check-circle";
import Container from "./container";

export default function Hero() {
  const t = useTranslations("Home");

  const lang = useLocale();
  return (
    <section
      id="Hero"
      className="overflow-hidden py-20 sm:py-32 lg:pb-24 xl:pb-24"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 ">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold"
              style={{ width: "560px" }}
            >
              STARTUPS <span style={{ color: "#2594EA" }}>GLOBAL</span> LINK
            </h2>
            <p className="mt-6 w-96 md:w-5/6 lg:w-11/12 text-lg md:text-2xl lg:text-2xl text-gray-500">
              {t("hero-sub-title")}
            </p>
            <div className="mt-8 lg:mt-10">
              <ul className="md:grid md:grid-cols-2 md:gap-2">
                <li className="flex items-center">
                  <CheckCircle />
                  <span className="ml-3 text-base text-gray-500">
                    {t("hero-first-li")}
                  </span>
                </li>
                <li className="flex items-center mt-2 md:mt-0">
                  <CheckCircle />
                  <span className="ml-3 text-base text-gray-500">
                    {t("hero-second-li")}
                  </span>
                </li>
              </ul>
              <Link href={`${lang}/plans`}>
                <Button variant="solid" color="blue" className="mt-10">
                  {t("hero-button-subscription")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mt-10 lg:col-span-5 lg:mt-0">
            <div className="h-[200px] flex justify-center items-center lg:absolute lg:-bottom-20 lg:-top-10 lg:h-auto">
              <Image
                src={heroBg}
                alt="hero-bg"
                priority
                width={600}
                height={400}
                className="hidden lg:block"
              />
              <Image
                src={heroBgMobile}
                alt="hero-bg-mobile"
                priority
                width={253}
                height={181}
                className="sm:block lg:hidden"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
