"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { StartupsEbooksProps } from "@/app/api/ebooks/startups/route";
import { StartupSummary } from "@/app/api/startups/route";
import EbookView from "@/components/site/experts/ebook-view";
import Container from "@/components/site/home/container";
import CardStartup from "@/components/site/startups/card-startup";
import HeaderStartupsFilter from "@/components/site/startups/header-startups-filter";
import NotFoundStartups from "@/components/site/startups/not-found-startups";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Props {
  data: StartupSummary[];
  ebooksStartupsData: StartupsEbooksProps[];
}

export default function StartupPageComponent({
  data,
  ebooksStartupsData,
}: Props) {
  const t = useTranslations("Startup");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (filteredData: StartupSummary[]) => {
    setFilteredData(filteredData);
  };

  return (
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
            dataSource={data}
            setFilteredData={handleFilterChange}
          />
        </div>
        <Separator />
        {filteredData.length > 0 ? (
          <div className="mt-5">
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
        <div className="flex justify-between mb-10 flex-col lg:flex-row items-center lg:items-start">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 place-items-center">
            {filteredData.map((startup: StartupSummary) => (
              <CardStartup
                key={startup.id}
                startup_name={startup.name}
                logo={startup.logo_img_url}
                foundation_year={startup.foundation_year}
                value_proposal={startup.value_proposal}
                last_update={startup.last_update}
                vertical={returnVertical(startup.vertical)}
                business_model={startup.business_model}
                country={startup.country}
                flag={startup.flag}
              />
            ))}
          </div>
          <div className="flex flex-col ml-5 lg:ml-36 relative mt-8">
            <div className="sticky top-0 hidden lg:block">
              {ebooksStartupsData.map((value) => (
                <EbookView
                  key={value.id}
                  title={value.title}
                  link={value.link}
                  img={value.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const returnVertical = (vertical: string) => {
  return vertical?.split(" - ")[0];
};
