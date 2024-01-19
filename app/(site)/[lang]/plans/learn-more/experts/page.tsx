import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import learnMoreExperts from "@/assets/img/learn-more-experts-bg.svg";
import Section from "@/components/site/home/section";
import { Button } from "@/components/ui/button";

export default function LearnMoreExpertsPage() {
  const t = useTranslations("Plans");
  const lang = useLocale();

  const freePlanExpertsLink =
    lang === "en"
      ? "https://forms.gle/7gqsjrRdi8bHxr3Q8"
      : "https://forms.gle/kzmmzc89t7A23And7";

  const premiumPlanExpertsLink =
    lang === "en"
      ? "https://buy.stripe.com/5kA7undE86ID3JefZ1"
      : "https://buy.stripe.com/fZebKD57C6IDcfKbIK?locale=pt";

  return (
    <main>
      <div className="flex flex-col items-center mt-10 mb-10">
        <div className="flex flex-col w-[400px] lg:w-[1200px]">
          <div className="flex flex-col items-center text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl uppercase text-gray-700">
              {t("plan-learn-more-experts-title")}
            </h1>
          </div>
          <div className="flex items-center justify-between mt-10 flex-col lg:flex-row">
            <div className="flex flex-col gap-10">
              <p className="w-full lg:w-[600px] text-xs lg:text-base leading-8 lg:leading-8 text-gray-500">
                {t("plan-learn-more-experts-first-text")}
              </p>
              <p className="w-full lg:w-[600px] text-xs lg:text-base leading-8 lg:leading-8 text-gray-500">
                {t("plan-learn-more-experts-second-text")}
              </p>
            </div>
            <Image
              src={learnMoreExperts}
              alt="learn-more-experts-bg"
              className="w-[230px] h-[230px] lg:w-[500px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col justify-between mt-10 gap-14">
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  {t("plan-learn-more-experts-first-section-title")}
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  {t("plan-learn-more-experts-first-section-first-text")}
                </p>
                <ul className="list-disc ml-10 text-gray-500 text-xs lg:text-base">
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-experts-first-section-first-text-bullet"
                      )}
                    </p>
                  </li>
                </ul>
                <a href={freePlanExpertsLink} target="_blank" rel="noreferrer">
                  <Button variant="blue" className="mt-5 text-xs lg:text-base">
                    {t("plan-experts-subscription-free-plan-text")}
                  </Button>
                </a>
              </div>
            </Section>
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  {t("plan-learn-more-experts-second-section-title")}:
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  {t("plan-learn-more-experts-second-section-first-text")}
                </p>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base mt-2 lg:mt-10">
                  {t("plan-learn-more-experts-second-section-second-text")}
                </p>
                <ul className="list-disc ml-10 text-gray-500 mt-2 lg:mt-10 text-xs lg:text-base">
                  <li>
                    <p>
                      {t("plan-learn-more-experts-second-section-first-bullet")}
                    </p>
                  </li>
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-experts-second-section-second-bullet"
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {t("plan-learn-more-experts-second-section-third-bullet")}
                    </p>
                  </li>
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-experts-second-section-fourth-bullet"
                      )}
                    </p>
                  </li>
                </ul>
                <a
                  href={premiumPlanExpertsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="blue" className="mt-5 text-xs lg:text-base">
                    {t("plan-experts-subscription-premium-plan-text")}
                  </Button>
                </a>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
