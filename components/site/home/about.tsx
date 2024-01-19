import { useTranslations } from "next-intl";

import abipirLogo from "@/assets/img/logos/abipir-logo.svg";
import globalLinkLogo from "@/assets/img/logos/global-link-logo.svg";
import ifiaLogo from "@/assets/img/logos/ifia-logo.svg";

import AboutInfoCard from "./about-info-card";
import Container from "./container";

export default function About() {
  const t = useTranslations("Home");
  return (
    <section id="About" className="py-20 sm:py-32 lg:pb-5 xl:pb-5">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {t("about-title-first")}{" "}
            <span style={{ color: "#2594EA" }}>{t("about-title-second")}</span>
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <AboutInfoCard src={globalLinkLogo} alt="startups-global-link-logo">
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-global-first-text")}
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-global-second-text")}
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-global-third-text")}
              </p>
            </AboutInfoCard>
            <AboutInfoCard src={ifiaLogo} alt="startups-global-link-logo">
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-ifia-first-text")}
              </p>
              <ul className="list-disc ml-10">
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-ifia-first-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-ifia-second-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-ifia-third-bullet")}
                </li>
              </ul>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-ifia-second-text")}
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-ifia-third-text")}
              </p>
            </AboutInfoCard>
            <AboutInfoCard src={abipirLogo} alt="startups-global-link-logo">
              <ul className="list-disc ml-10">
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-abipir-first-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-abipir-second-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-abipir-third-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-abipir-fourth-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-abipir-fifth-bullet")}
                </li>
              </ul>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-abipir-first-text")}
              </p>
            </AboutInfoCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
