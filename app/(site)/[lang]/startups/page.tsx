"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { StartupProps, startupsList } from "@/app/(site)/data";
import Container from "@/components/Site/Home/Container";
import CardStartup from "@/components/Site/Startups/CardStartup";
import HeaderStartupsFilter from "@/components/Site/Startups/HeaderStartupsFilter";
import NotFoundStartups from "@/components/Site/Startups/NotFoundStartups";
import { Separator } from "@/components/ui/separator";

export default function StartupsPage() {
  const t = useTranslations("Startup");
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
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFilteredData(startupsList);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main>
      <Container>
        <div className="flex flex-col">
          <div className="flex justify-center mt-10 mb-10">
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
                  value_proposal={startup.value_proposal}
                  sgl_badge={startup.sgl_badge}
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
