"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale } from "next-intl";

import { StartupSummary } from "@/app/api/startups/route";
import StartuPageComponent from "@/components/site/startups/startup-page";

export default function StartupsPage() {
  const lang = useLocale();
  const { data, isLoading: isLoadingStartups } = useStartups(lang);

  if (isLoadingStartups)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <main>
      <StartuPageComponent data={data!} />
    </main>
  );
}

const useStartups = (lang: string) =>
  useQuery<StartupSummary[]>({
    queryKey: ["startups-data", lang],
    queryFn: () =>
      axios.get(`/api/startups?lang=${lang}`).then((res) => {
        return res.data;
      }),
  });
