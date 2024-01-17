import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { teamList } from "@/app/(site)/data";
import aboutUsTopImage from "@/assets/img/about-top-image.svg";
import TeamCard from "@/components/site/about/team-card";
import Section from "@/components/site/home/section";

export default function PlansPage() {
  const t = useTranslations("About");
  const lang = useLocale();

  const data = teamList.map((value) => ({
    ...value,
    position: lang === "en" ? value.position_en : value.position_pt,
  }));
  return (
    <main>
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col w-[400px] lg:w-[1200px]">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl uppercase text-gray-700">
              {t("about-title")}
            </h1>
            <span className="mt-5 text-gray-500 text-center lg:text-center text-sm lg:text-lg w-[300px] lg:w-full">
              {t("about-sub-title")}
            </span>
          </div>
          <div className="flex items-center justify-between mt-10 flex-col lg:flex-row">
            <p className="w-full lg:w-[600px] text-xs lg:text-base leading-8 lg:leading-8 text-gray-500">
              {t("about-text-first-section")}
            </p>
            <Image
              src={aboutUsTopImage}
              alt="about-top-image"
              className="w-[230px] h-[230px] lg:w-[500px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col items-center justify-between mt-10 gap-14">
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  {t("about-title-first-section")}
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  {t("about-first-text-first-section")}
                </p>
              </div>
            </Section>
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  {t("about-title-second-section")}:
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  {t("about-first-text-second-section")}
                </p>
              </div>
            </Section>
            <Section>
              <div className="mb-10">
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  {t("about-title-third-section")}
                </h3>
                <div className="flex flex-col gap-10 text-xs lg:text-base">
                  <p className="text-gray-500 leading-8 lg:leading-8">
                    {t("about-first-text-third-section")}
                  </p>
                  <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                    {t("about-second-text-third-section")}
                  </p>
                  <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                    {t("about-third-text-third-section")}
                  </p>
                  <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                    {t("about-fourth-text-third-section")}
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
        <Section>
          <div className="flex flex-col items-center gap-10 mb-10 w-[400px] lg:w-full">
            <h1 className="text-4xl uppercase text-gray-700">
              {t("about-our-team-title")}
            </h1>
            <div className="container grid grid-cols-2 lg:grid-cols-3 lg:place-items-center lg:gap-y-8 gap-x-20 lg:gap-x-14">
              {data.map((value) => (
                <TeamCard
                  key={value.id}
                  name={value.name}
                  linkedin={value.linkedin}
                  position={value.position}
                  photo={value.photo}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
