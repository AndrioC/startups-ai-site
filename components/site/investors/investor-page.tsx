"use client";

import { useTranslations } from "next-intl";

import { InvestorSummary } from "@/app/api/investors/route";

import CardInvestor from "./card-investor";
import NotFoundInvestors from "./not-found-startups";

interface Props {
  data: InvestorSummary[];
  isLoading: boolean;
}

export default function InvestorPageComponent({ data, isLoading }: Props) {
  const t = useTranslations("Investor");

  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-10 mb-10"></div>
      {data.length > 0 || isLoading ? (
        <div className={`mt-5 ${isLoading ? "hidden" : ""} px-10`}>
          <p className="text-sm text-gray-500">
            {t("search-found-text-first")}{" "}
            <span className="text-gray-800">
              {data.length} {t("search-found-investors-text")}.
            </span>{" "}
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center px-14 mt-5">
          <NotFoundInvestors />
        </div>
      )}
      {isLoading ? (
        <div className="flex flex-col justify-between mb-10 lg:flex-row items-center">
          <div className="flex items-center justify-center lg:w-[80%]">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between mt-10 mb-10 flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[100%]">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center mb-10">
              {data.map((value) => (
                <CardInvestor
                  key={value.id}
                  name={value.name}
                  linkedin={value.linkedin}
                  description={value.mini_description}
                  country={value.country}
                  photo={value.logo_img_url}
                  flag={value.country_flag}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
