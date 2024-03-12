"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale } from "next-intl";

import { InvestorSummary } from "@/app/api/investors/route";
import InvestorPageComponent from "@/components/site/investors/investor-page";

export default function StartupsPage() {
  const lang = useLocale();
  const { data, isLoading: isLoadingInvestors } = useInvestors(lang);

  if (isLoadingInvestors)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <main>
      <InvestorPageComponent data={data!} isLoading={isLoadingInvestors} />
    </main>
  );
}

const useInvestors = (lang: string) =>
  useQuery<InvestorSummary[]>({
    queryKey: ["investor-data", lang],
    queryFn: () =>
      axios.get(`/api/investors?lang=${lang}`).then((res) => {
        return res.data;
      }),
  });
