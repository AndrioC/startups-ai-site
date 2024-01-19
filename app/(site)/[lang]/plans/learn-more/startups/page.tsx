import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import learnMoreStartups from "@/assets/img/learn-more-startups-bg.svg";
import Section from "@/components/site/home/section";
import { Button } from "@/components/ui/button";

export default function LearnMoreStartupsPage() {
  const t = useTranslations("Plans");
  const lang = useLocale();

  const freePlanStartupsLink =
    lang === "en"
      ? "https://forms.gle/a7FCyM9LcFrbbcB8A"
      : "https://forms.gle/49ge9iz3UpMXf9zRA";

  const premiumPlanStartupsLink =
    lang === "en"
      ? "https://buy.stripe.com/14k8yr7fK3wr6VqfYZ"
      : "https://buy.stripe.com/fZe3e743y8QL7Zu000?locale=pt";

  return (
    <main>
      <div className="flex flex-col items-center mt-10 mb-10">
        <div className="flex flex-col w-[400px] lg:w-[1200px]">
          <div className="flex flex-col items-center text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl uppercase text-gray-700">
              {t("plan-learn-more-startups-title")}
            </h1>
          </div>
          <div className="flex items-center justify-between mt-10 flex-col lg:flex-row">
            <p className="w-full lg:w-[600px] text-xs lg:text-base leading-8 lg:leading-8 text-gray-500">
              {t("plan-learn-more-startups-first-text")}
            </p>
            <Image
              src={learnMoreStartups}
              alt="learn-more-startups-bg"
              className="w-[230px] h-[230px] lg:w-[500px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col justify-between mt-10 gap-14">
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  {t("plan-learn-more-startups-first-section-title")}
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  {t("plan-learn-more-startups-first-section-first-text")}
                </p>
                <ul className="list-disc ml-10 text-gray-500 text-xs lg:text-base">
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-startups-first-section-first-text-bullet"
                      )}
                    </p>
                  </li>
                </ul>
                <a href={freePlanStartupsLink} target="_blank" rel="noreferrer">
                  <Button variant="blue" className="mt-5 text-xs lg:text-base">
                    {t("plan-startups-subscription-free-plan-text")}
                  </Button>
                </a>
              </div>
            </Section>
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  {t("plan-learn-more-startups-second-section-title")}:
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  {t("plan-learn-more-startups-second-section-first-text")}
                </p>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base mt-2 lg:mt-10">
                  {t("plan-learn-more-startups-second-section-second-text")}
                </p>
                <ul className="list-disc ml-10 text-gray-500 mt-2 lg:mt-10 text-xs lg:text-base">
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-startups-second-section-bullets.first-bullet"
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-startups-second-section-bullets.second-bullet.text"
                      )}
                    </p>
                    <ul className="list-disc ml-5 text-gray-500 mt-2 mb-2">
                      <li>
                        <p>
                          {t(
                            "plan-learn-more-startups-second-section-bullets.second-bullet.first-sub-bullet"
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "plan-learn-more-startups-second-section-bullets.second-bullet.second-sub-bullet"
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "plan-learn-more-startups-second-section-bullets.second-bullet.third-sub-bullet"
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "plan-learn-more-startups-second-section-bullets.second-bullet.fourth-sub-bullet"
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "plan-learn-more-startups-second-section-bullets.second-bullet.fifth-sub-bullet"
                          )}
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-startups-second-section-bullets.third-bullet"
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-startups-second-section-bullets.fourth-bullet"
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {t(
                        "plan-learn-more-startups-second-section-bullets.fifth-bullet"
                      )}
                    </p>
                  </li>
                </ul>
                <a
                  href={premiumPlanStartupsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="blue" className="mt-5 text-xs lg:text-base">
                    {t("plan-startups-subscription-premium-plan-text")}
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
