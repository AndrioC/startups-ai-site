import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import plansBgImage from "@/assets/img/plans-bg.svg";
import PlanCard from "@/components/site/plans/programs-plan";

export default function PlansPage() {
  const t = useTranslations("PlansPrograms");
  const lang = useLocale();

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gray-100">
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src={plansBgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center h-full text-center mt-10 px-4">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl h-auto bg-white rounded-[25px] shadow-lg opacity-80 px-4 py-6">
            <h1 className="text-2xl md:text-4xl font-light mb-5 opacity-100">
              {t("plans-programs-title-first")}{" "}
              <span className="font-bold">
                {t("plans-programs-title-second")}
              </span>
            </h1>
            <p className="text-base md:text-lg font-light">
              {t("plans-programs-subtitle")}
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-20 flex flex-col items-center w-full px-4 mt-[-150px] md:mt-[-300px]">
        <div className="flex flex-wrap justify-center gap-4">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={lang === "en" ? plan.price_en : plan.price_pt}
              original_price={
                lang === "en" ? plan.original_price_en : plan.original_price_pt
              }
              features={lang === "en" ? plan.features_en : plan.features_pt}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const plans = [
  {
    title: "Basic",
    price_pt: "159,9",
    price_en: "159.9",
    original_price_pt: "179,9",
    original_price_en: "179.9",
    features_pt: [
      "1 usuário",
      "200 startups",
      "10 investidores",
      "10 mentores",
      "30 patrocinadores",
      "100 créditos mensal para Business Matchmaking com IA",
    ],
    features_en: [
      "1 user",
      "200 startups",
      "10 investors",
      "10 mentors",
      "30 sponsors",
      "100 monthly credits for Business Matchmaking with AI",
    ],
    buttonText: "Quero este plano",
  },
  {
    title: "Standard",
    price_pt: "279,9",
    price_en: "279.9",
    original_price_pt: "299,9",
    original_price_en: "299.9",
    features_pt: [
      "2 usuários",
      "400 startups",
      "20 investidores",
      "20 mentores",
      "60 patrocinadores",
      "200 créditos mensal para Business Matchmaking com IA",
    ],
    features_en: [
      "2 users",
      "400 startups",
      "20 investors",
      "20 mentors",
      "60 sponsors",
      "200 monthly credits for Business Matchmaking with AI",
    ],
    buttonText: "Quero este plano",
  },
  {
    title: "Advanced",
    price_pt: "579,9",
    price_en: "579.9",
    original_price_pt: "599,9",
    original_price_en: "599.9",
    features_pt: [
      "5 usuários",
      "600 startups",
      "40 investidores",
      "40 mentores",
      "100 patrocinadores",
      "400 créditos mensal para Business Matchmaking com IA",
    ],
    features_en: [
      "5 users",
      "600 startups",
      "40 investors",
      "40 mentors",
      "100 sponsors",
      "400 monthly credits for Business Matchmaking with AI",
    ],
    buttonText: "Quero este plano",
  },
  {
    title: "Unlimited",
    price_pt: "1399,9",
    price_en: "1399.9",
    original_price_pt: "1599,9",
    original_price_en: "1599.9",
    features_pt: [
      "Usuários ilimitados",
      "Startups ilimitadas",
      "Investidores ilimitados",
      "Mentores ilimitados",
      "Patrocinadores ilimitados",
      "1000 créditos mensal para Business Matchmaking com IA",
    ],
    features_en: [
      "Unlimited users",
      "Unlimited startups",
      "Unlimited investors",
      "Unlimited mentors",
      "Unlimited sponsors",
      "1000 monthly credits for Business Matchmaking with AI",
    ],
    buttonText: "Quero este plano",
  },
];
