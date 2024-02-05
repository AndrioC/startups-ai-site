"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { StartupProps, startupsList } from "@/app/(site)/data";
import Container from "@/components/site/home/container";
import CardStartup from "@/components/site/startups/card-startup";
import HeaderStartupsFilter from "@/components/site/startups/header-startups-filter";
import NotFoundStartups from "@/components/site/startups/not-found-startups";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function StartupsPage() {
  const t = useTranslations("Startup");
  const lang = useLocale();
  const [filteredData, setFilteredData] = useState(startupsList);
  const [isLoading, setIsLoading] = useState(true);

  const handleFilterChange = async (filteredData: StartupProps[]) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setFilteredData(filteredData);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const newData = startupsList.filter((value) => [
        {
          ...value,
          value_proposal:
            lang === "en" ? value.value_proposal_en : value.value_proposal_pt,
        },
      ]);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFilteredData(newData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main>
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center mt-10 mb-10">
            <div className="flex flex-col lg:flex-row lg:w-[800px] items-center">
              <Link href="plans/learn-more/startups">
                <Button variant="link" className="text-blue-500">
                  {t("startup-header-learn-more-text")}
                </Button>
              </Link>
              <Link href="plans">
                <Button variant="blue" className="lg:ml-5 w-[200px]">
                  {t("startup-header-subscription-button-text")}
                </Button>
              </Link>
            </div>
            <HeaderStartupsFilter
              dataSource={startupsList}
              setFilteredData={handleFilterChange}
            />
          </div>
          <Separator />
          {filteredData.length > 0 || isLoading ? (
            <div className={`mt-5 ${isLoading ? "hidden" : ""}`}>
              <p className="text-sm text-gray-500">
                {t("search-found-text-first")}{" "}
                <span className="text-gray-800">
                  {filteredData.length} startups
                </span>{" "}
                {t("search-found-text-second")}.
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center px-14 mt-5">
              <NotFoundStartups />
            </div>
          )}
          {isLoading ? (
            <div className="flex justify-center items-center mt-10 mb-10">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center">
              {filteredData.map((startup) => (
                <CardStartup
                  key={startup.id}
                  startup_name={startup.startup_name}
                  logo={startup.logo}
                  foundation_year={startup.foundation_year}
                  value_proposal={
                    lang === "en"
                      ? startup.value_proposal_en
                      : startup.value_proposal_pt
                  }
                  last_update={startup.last_update}
                  vertical={startup.vertical}
                  business_model={startup.business_model}
                  country={startup.country}
                  flag={startup.flag}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
