import { useLocale, useTranslations } from "next-intl";

import expertImage from "@/assets/img/plans-expert-image.svg";
import startupImage from "@/assets/img/plans-rocket-image.svg";
import PricingCard from "@/components/site/plans/pricing-card";

export default function PlansPage() {
  const t = useTranslations("Plans");
  const lang = useLocale();

  const freePlanStartupsLink =
    lang === "en"
      ? "https://forms.gle/a7FCyM9LcFrbbcB8A"
      : "https://forms.gle/49ge9iz3UpMXf9zRA";

  const freePlanExpertsLink =
    lang === "en"
      ? "https://forms.gle/7gqsjrRdi8bHxr3Q8"
      : "https://forms.gle/kzmmzc89t7A23And7";

  const premiumPlanStartupsLink =
    lang === "en"
      ? "https://buy.stripe.com/14k8yr7fK3wr6VqfYZ"
      : "https://buy.stripe.com/fZe3e743y8QL7Zu000?locale=pt";

  const premiumPlanExpertsLink =
    lang === "en"
      ? "https://buy.stripe.com/5kA7undE86ID3JefZ1"
      : "https://buy.stripe.com/fZebKD57C6IDcfKbIK?locale=pt";

  return (
    <main>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-lg lg:text-2xl uppercase text-gray-700">
          {t("plan-title")}
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 place-items-center mt-10 mb-10">
          <PricingCard
            plan_name={t("plan-startup-title")}
            premium={false}
            price={t("plan-startup-price-free")}
            img={startupImage}
            link={freePlanStartupsLink}
            features={[t("plan-startup-first-feature-free")]}
          />
          <PricingCard
            plan_name={t("plan-startup-title")}
            premium={true}
            price={t("plan-startup-price-premium")}
            img={startupImage}
            link={premiumPlanStartupsLink}
            features={[
              t("plan-startup-first-feature-premium"),
              t("plan-startup-second-feature-premium"),
              t("plan-startup-third-feature-premium"),
              t("plan-startup-fourth-feature-premium"),
              t("plan-startup-fifth-feature-premium"),
            ]}
          />
          <PricingCard
            plan_name={t("plan-expert-title")}
            premium={false}
            price={t("plan-expert-price-free")}
            img={expertImage}
            link={freePlanExpertsLink}
            features={[t("plan-expert-first-feature-free")]}
          />
          <PricingCard
            plan_name={t("plan-expert-title")}
            premium={true}
            price={t("plan-expert-price-premium")}
            img={expertImage}
            link={premiumPlanExpertsLink}
            features={[
              t("plan-expert-first-feature-premium"),
              t("plan-expert-second-feature-premium"),
            ]}
          />
        </div>
      </div>
    </main>
  );
}
