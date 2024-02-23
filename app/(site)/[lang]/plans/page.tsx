import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

// import expertImage from "@/assets/img/plans-expert-image.svg";
// import startupImage from "@/assets/img/plans-rocket-image.svg";
// import PricingCard from "@/components/site/plans/pricing-card";
import { bannersList } from "../../data";

export default function PlansPage() {
  const t = useTranslations("Plans");
  const lang = useLocale();

  // const freePlanStartupsLink =
  //   lang === "en"
  //     ? "https://forms.gle/a7FCyM9LcFrbbcB8A"
  //     : "https://forms.gle/49ge9iz3UpMXf9zRA";

  // const freePlanExpertsLink =
  //   lang === "en"
  //     ? "https://forms.gle/7gqsjrRdi8bHxr3Q8"
  //     : "https://forms.gle/kzmmzc89t7A23And7";

  // const premiumPlanStartupsLink =
  //   lang === "en"
  //     ? "https://buy.stripe.com/14k8yr7fK3wr6VqfYZ"
  //     : "https://buy.stripe.com/fZe3e743y8QL7Zu000?locale=pt";

  // const premiumPlanExpertsLink =
  //   lang === "en"
  //     ? "https://buy.stripe.com/5kA7undE86ID3JefZ1"
  //     : "https://buy.stripe.com/fZebKD57C6IDcfKbIK?locale=pt";

  // const linkLearnMoreStartups = "plans/learn-more/startups";

  // const linkLearnMoreExperts = "plans/learn-more/experts";

  const mainBanner =
    lang === "en" ? bannersList.main_banner_en : bannersList.main_banner_pt;
  const mainBannerMobile =
    lang === "en"
      ? bannersList.main_banner_mobile_en
      : bannersList.main_banner_mobile_pt;
  const startupBanner =
    lang === "en"
      ? bannersList.startups_banner_en
      : bannersList.startups_banner_pt;
  const investorsBanner =
    lang === "en"
      ? bannersList.investors_banner_en
      : bannersList.investors_banner_pt;
  const mentorsBanner =
    lang === "en"
      ? bannersList.mentors_banner_en
      : bannersList.mentors_banner_pt;

  return (
    <main>
      {/* <div className="flex flex-col items-center mt-10 mb-10">
        <Image
          src={mainBanner}
          alt="main-banner"
          width={500}
          height={400}
          className="w-full h-[250px]"
        />
        <h1 className="text-lg lg:text-2xl uppercase text-gray-700">
          {t("plan-title")}
        </h1>
      </div> */}

      <div className="flex flex-col mb-10">
        <div className="flex flex-col items-center mt-10 mb-10 relative w-full h-[400px]">
          <Image
            src={mainBanner}
            alt="main-banner"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="hidden lg:block"
            priority
          />
          <Image
            src={mainBannerMobile}
            alt="main-banner-mobile"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="sm:block lg:hidden"
            priority
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg lg:text-2xl uppercase text-gray-700">
            {t("plan-free-subscription-offer")}
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-5">
            <div className="w-[300px] lg:w-[400px]">
              <Image
                src={startupBanner}
                alt="startup-banner"
                objectPosition="center"
                layout="responsive"
                width={400}
                height={400}
                className="w-[300px] h-auto lg:w-full lg:h-auto"
              />
            </div>
            <div className="w-[300px] lg:w-[400px]">
              <Image
                src={investorsBanner}
                alt="investor-banner"
                objectPosition="center"
                layout="responsive"
                width={400}
                height={400}
                className="w-[300px] h-auto lg:w-full lg:h-auto"
              />
            </div>
            <div className="w-[300px] lg:w-[400px]">
              <Image
                src={mentorsBanner}
                alt="mentor-banner"
                objectPosition="center"
                layout="responsive"
                width={400}
                height={400}
                className="w-[300px] h-auto lg:w-full lg:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center mt-10">
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
            learn_more_link={linkLearnMoreStartups}
            features={[t("plan-startup-first-feature-free")]}
          />
          <PricingCard
            plan_name={t("plan-startup-title")}
            premium={true}
            price={t("plan-startup-price-premium")}
            img={startupImage}
            link={premiumPlanStartupsLink}
            learn_more_link={linkLearnMoreStartups}
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
            learn_more_link={linkLearnMoreExperts}
            features={[t("plan-expert-first-feature-free")]}
          />
          <PricingCard
            plan_name={t("plan-expert-title")}
            premium={true}
            price={t("plan-expert-price-premium")}
            img={expertImage}
            link={premiumPlanExpertsLink}
            learn_more_link={linkLearnMoreExperts}
            features={[
              t("plan-expert-first-feature-premium"),
              t("plan-expert-second-feature-premium"),
            ]}
          />
        </div>
      </div> */}
    </main>
  );
}
