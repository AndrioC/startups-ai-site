"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale } from "next-intl";

import { ExpertsEbooksProps } from "@/app/api/ebooks/experts/route";
import { ExpertSummary } from "@/app/api/experts/route";
import ExpertPageComponent from "@/components/site/experts/expert-page";

export default function ExpertPage() {
  const lang = useLocale();

  const { data: expertsData, isLoading: isLoadingExperts } = useExperts(lang);

  console.log("expertsData", expertsData);

  const { data: expertsEbooksData, isLoading: isExpertsEbooks } =
    useEbooksExperts(lang);

  if (isLoadingExperts || isExpertsEbooks)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (isExpertsEbooks)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <main>
      <ExpertPageComponent
        data={expertsData!}
        dataEbooks={expertsEbooksData!}
      />
    </main>
  );
}

const useExperts = (lang: string) =>
  useQuery<ExpertSummary[]>({
    queryKey: ["experts-data", lang],
    queryFn: () =>
      axios.get(`/api/experts?lang=${lang}`).then((res) => {
        return res.data;
      }),
  });

const useEbooksExperts = (lang: string) =>
  useQuery<ExpertsEbooksProps[]>({
    queryKey: ["ebooks-experts-data", lang],
    queryFn: () =>
      axios.get(`/api/ebooks/experts?lang=${lang}`).then((res) => {
        return res.data;
      }),
  });
