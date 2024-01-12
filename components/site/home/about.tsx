import { useTranslations } from "next-intl";

import abipirLogo from "@/assets/img/logos/abipir-logo-100.svg";
import globalLinkLogo from "@/assets/img/logos/global-link-logo-100.svg";
import ifiaLogo from "@/assets/img/logos/ifia-logo-100.svg";

import AboutInfoCard from "./about-info-card";
import Container from "./container";

export default function About() {
  const t = useTranslations("Home");
  return (
    <section id="About" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {t("about-us-title-first")}{" "}
            <span style={{ color: "#2594EA" }}>
              {t("about-us-title-second")}
            </span>
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <AboutInfoCard src={globalLinkLogo} alt="startups-global-link-logo">
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-us-global-first-text")}
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-us-global-second-text")}
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-us-global-third-text")}
              </p>
            </AboutInfoCard>
            <AboutInfoCard src={ifiaLogo} alt="startups-global-link-logo">
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-us-ifia-first-text")}
              </p>
              <ul className="list-disc ml-10">
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-ifia-first-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-ifia-second-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-ifia-third-bullet")}
                </li>
              </ul>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-us-ifia-second-text")}
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-us-ifia-third-text")}
              </p>
            </AboutInfoCard>
            <AboutInfoCard src={abipirLogo} alt="startups-global-link-logo">
              <ul className="list-disc ml-10">
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-abipir-first-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-abipir-second-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-abipir-third-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-abipir-fourth-bullet")}
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  {t("about-us-abipir-fifth-bullet")}
                </li>
              </ul>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                {t("about-us-abipir-first-text")}
              </p>
            </AboutInfoCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
