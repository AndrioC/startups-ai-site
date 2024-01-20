"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { ExpertProps, expertsList } from "@/app/(site)/data";
import CardExpert from "@/components/site/experts/card-expert";
import HeaderExpertsFilter, {
  HeaderExpertsFiltersProps,
} from "@/components/site/experts/header-experts-filter";
import NotFoundExperts from "@/components/site/experts/not-found-experts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ExpertPage() {
  const t = useTranslations("Expert");
  const lang = useLocale();
  const [filteredData, setFilteredData] = useState(expertsList);
  const [isLoading, setIsLoading] = useState(true);

  const data: HeaderExpertsFiltersProps[] = expertsList.map((value) => ({
    ...value,
    description: lang === "en" ? value.description_en : value.description_pt,
    languages: lang === "en" ? value.languages_en : value.languages_pt,
    languages_array:
      lang === "en" ? value.languages_en_array : value.languages_pt_array,
    work_field: lang === "en" ? value.work_field_en : value.work_field_pt,
    country: lang === "en" ? value.country_en : value.country_pt,
  }));

  const handleFilterChange = async (filteredData: ExpertProps[]) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setFilteredData(filteredData);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <div className="flex flex-col lg:flex-row lg:w-[800px] items-center">
          <Link href="plans/learn-more/experts">
            <Button variant="link" className="text-blue-500">
              {t("expert-header-learn-more-text")}
            </Button>
          </Link>
          <Link href="plans">
            <Button variant="blue" className="lg:ml-5 w-[200px]">
              {t("expert-header-subscription-button-text")}
            </Button>
          </Link>
        </div>
        <HeaderExpertsFilter
          dataSource={data}
          setFilteredData={handleFilterChange}
        />
      </div>
      <Separator />
      {filteredData.length > 0 || isLoading ? (
        <div className={`mt-5 ${isLoading ? "hidden" : ""} px-10`}>
          <p className="text-sm text-gray-500">
            {t("search-found-text-first")}{" "}
            <span className="text-gray-800">
              {filteredData.length} {t("search-found-experts-text")}
            </span>{" "}
            {t("search-found-text-second")}.
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center px-14 mt-5">
          <NotFoundExperts />
        </div>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center mt-10 mb-10">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center mb-10">
          {filteredData.map((value) => (
            <CardExpert
              key={value.id}
              name={value.name}
              last_name={value.last_name}
              linkedin={value.linkedin}
              description={
                lang === "en" ? value.description_en : value.description_pt
              }
              languages={
                lang === "en" ? value.languages_en : value.languages_pt
              }
              work_field={
                lang === "en" ? value.work_field_en : value.work_field_pt
              }
              country={lang === "en" ? value.country_en : value.country_pt}
              photo={value.photo}
              flag={value.flag}
            />
          ))}
        </div>
      )}
    </main>
  );
}
