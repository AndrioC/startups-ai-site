"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale } from "next-intl";

import { MentorsEbooksProps } from "@/app/api/ebooks/mentors/route";
import { MentorSummary } from "@/app/api/mentors/route";
import ExpertPageComponent from "@/components/site/mentors/mentor-page";

export default function MentorPage() {
  const lang = useLocale();

  const { data: mentorsData, isLoading: isLoadingMentors } = useMentors(lang);

  const { data: mentorsEbooksData, isLoading: isMentorsEbooks } =
    useEbooksMentors(lang);

  if (isLoadingMentors || isMentorsEbooks)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (isMentorsEbooks)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <main>
      <ExpertPageComponent
        data={mentorsData!}
        dataEbooks={mentorsEbooksData!}
      />
    </main>
  );
}

const useMentors = (lang: string) =>
  useQuery<MentorSummary[]>({
    queryKey: ["mentors-data", lang],
    queryFn: () =>
      axios.get(`/api/mentors?lang=${lang}`).then((res) => {
        return res.data;
      }),
  });

const useEbooksMentors = (lang: string) =>
  useQuery<MentorsEbooksProps[]>({
    queryKey: ["ebooks-mentors-data", lang],
    queryFn: () =>
      axios.get(`/api/ebooks/mentors?lang=${lang}`).then((res) => {
        return res.data;
      }),
  });
