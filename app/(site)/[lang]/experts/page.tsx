"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { expertsList } from "@/app/(site)/data";
import CardExpert from "@/components/site/experts/card-expert";
import Container from "@/components/site/home/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ExpertPage() {
  const t = useTranslations("Expert");
  const lang = useLocale();
  const [isLoading, setIsLoading] = useState(true);

  const data = expertsList.map((value) => ({
    ...value,
    description: lang === "en" ? value.description_en : value.description_pt,
    languages: lang === "en" ? value.languages_en : value.languages_pt,
    work_field:
      lang === "en"
        ? convertFieldToArray(value.work_field_en)
        : convertFieldToArray(value.work_field_pt),
    country: lang === "en" ? value.country_en : value.country_pt,
  }));

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
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 mb-10">
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
        <Separator />
        {isLoading ? (
          <div className="flex justify-center items-center mt-10 mb-10">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center mb-10">
            {data.map((value) => (
              <CardExpert
                key={value.id}
                name={value.name}
                last_name={value.last_name}
                linkedin={value.linkedin}
                description={value.description}
                languages={value.languages}
                work_field={value.work_field}
                country={value.country}
                photo={value.photo}
                flag={value.flag}
              />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}

const convertFieldToArray = (field: string) => {
  return field.split(", ").map((value) => value.trim());
};
