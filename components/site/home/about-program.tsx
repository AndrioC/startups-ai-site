import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import portfImage01 from "@/assets/img/portf-img01.svg";
import portfImage02 from "@/assets/img/portf-img02.svg";
import portfImage03 from "@/assets/img/portf-img03.svg";
import portfImage04 from "@/assets/img/portf-img04.svg";

import Button from "./button";
import Container from "./container";

export default function OurSolutions() {
  const t = useTranslations("Home");
  return (
    <section id="OUR-SOLUTIONS" className="py-20 sm:py-32 lg:pb-5 xl:pb-5">
      <Container className="-mt-20">
        <div className="flex flex-col items-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#2594EA" }}
          >
            {t("our-solutions-title")}
          </h2>
          <div className="flex flex-col items-center w-80 lg:w-[700px]">
            <p className="mt-6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              {t("our-solutions-first-text")}
            </p>
            <p className="mt-6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              {t("our-solutions-second-text")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-5">
          <Image
            src={portfImage01}
            alt="port-image-01"
            className="hidden lg:block"
          />
          <div className="flex flex-col">
            <Image
              src={portfImage02}
              alt="port-image-02"
              className="hidden lg:block"
            />

            <Image
              src={portfImage03}
              alt="port-image-03"
              className="hidden lg:block"
            />
          </div>
          <Image
            src={portfImage04}
            alt="port-image-04"
            className="w-96 lg:w-auto"
          />
        </div>
        <div className="flex items-center justify-center gap-20">
          <Link href="">
            <Button variant="solid" color="blue" className="mt-10">
              {t("subscription-startups-subscription-button")}
            </Button>
          </Link>
          <Link href="">
            <Button variant="solid" color="blue" className="mt-10">
              {t("subscription-experts-subscription-button")}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
