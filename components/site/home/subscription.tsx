import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import subsImage01 from "@/assets/img/subs-img01.svg";
import subsImage02 from "@/assets/img/subs-img02.svg";
import subsImage03 from "@/assets/img/subs-img03.svg";

import Button from "./button";
import Container from "./container";

export default function Subscription() {
  const t = useTranslations("Home");

  const lang = useLocale();

  return (
    <section id="Subscription" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#2594EA" }}
          >
            {t("subscription-title")}
          </h2>
          <div className="flex flex-col items-center">
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              {t("subscription-first-text")}
            </p>
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              {t("subscription-second-text")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-10">
          <Image
            src={subsImage01}
            alt="subs-image-01"
            className="w-64 lg:w-96"
          />

          <div className="flex flex-col justify-center items-center gap-10 lg:flex-row">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={subsImage02}
                alt="subs-image-02"
                className="w-64 lg:w-72"
              />
              <Link href={`${lang}/plans`}>
                <Button variant="solid" color="blue" className="mt-10">
                  {t("subscription-startups-subscription-button")}
                </Button>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src={subsImage03}
                alt="subs-image-03"
                className="w-72 lg:w-72"
              />
              <Link href={`${lang}/plans`}>
                <Button variant="solid" color="blue" className="mt-10">
                  {t("subscription-experts-subscription-button")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
