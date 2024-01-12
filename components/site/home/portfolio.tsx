import Image from "next/image";
import { useTranslations } from "next-intl";

import portfImage01 from "@/assets/img/portf-img01.svg";
import portfImage02 from "@/assets/img/portf-img02.svg";
import portfImage03 from "@/assets/img/portf-img03.svg";
import portfImage04 from "@/assets/img/portf-img04.svg";

import Container from "./container";
import ExtraLogos from "./extra-logos";

export default function Portfolio() {
  const t = useTranslations("Home");
  return (
    <section id="Portfolio" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#2594EA" }}
          >
            PORTFOLIO
          </h2>
          <div className="flex flex-col items-center">
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              {t("portfolio-first-title")}
            </p>
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              {t("portfolio-second-title")}
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
      </Container>
      <ExtraLogos />
    </section>
  );
}
