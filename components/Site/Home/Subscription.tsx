import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import subsImage01 from "@/assets/img/subs-img01.svg";
import subsImage02 from "@/assets/img/subs-img02.svg";
import subsImage03 from "@/assets/img/subs-img03.svg";

import Button from "./Button";
import Container from "./Container";

export default function Subscription() {
  const t = useTranslations("Home");

  const lang = useLocale();

  const subscriptionLinkStartups =
    lang === "en"
      ? "https://forms.gle/a7FCyM9LcFrbbcB8A"
      : "https://forms.gle/49ge9iz3UpMXf9zRA";

  const subscriptionLinkExperts =
    lang === "en"
      ? "https://forms.gle/7gqsjrRdi8bHxr3Q8"
      : "https://forms.gle/kzmmzc89t7A23And7";

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
              <Button
                variant="solid"
                color="blue"
                className="mt-10"
                href={subscriptionLinkStartups}
                target="_blank"
                rel="noreferrer"
              >
                {t("subscription-startups-subscription-button")}
              </Button>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src={subsImage03}
                alt="subs-image-03"
                className="w-72 lg:w-72"
              />
              <Button
                variant="solid"
                color="blue"
                className="mt-10"
                href={subscriptionLinkExperts}
                target="_blank"
                rel="noreferrer"
              >
                {t("subscription-experts-subscription-button")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
