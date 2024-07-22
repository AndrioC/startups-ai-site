"use client";

import {
  challenges,
  country,
  experience_time,
  gender,
  languages,
  level_of_education,
  occupation,
  vertical,
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import FormExpertsStep from "@/components/form/experts/form-experts-step";
import HeaderExpertsSteps from "@/components/form/experts/header-experts-steps";
import { FormExpertProvider } from "@/contexts/FormExpertContext";

export interface SelectDataProps {
  level_of_education: level_of_education[];
  occupation: occupation[];
  experience_time: experience_time[];
  languages: languages[];
  challenges: challenges[];
  vertical: vertical[];
  country: country[];
  gender: gender[];
}

export default function FormMentorsPage() {
  const { data, isLoading } = useSelectData();

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  return (
    <FormExpertProvider>
      <div className="flex flex-col items-center mt-5 mb-5">
        <HeaderExpertsSteps />
        <div className="flex justify-center h-[600px] lg:h-[700px] w-[350px] lg:w-[720px]">
          <div className="w-full border p-6 rounded-md bg-white max-h-[600px] overflow-scroll">
            <FormExpertsStep data={data!} />
          </div>
        </div>
      </div>
    </FormExpertProvider>
  );
}

const useSelectData = () =>
  useQuery<SelectDataProps>({
    queryKey: ["select-data"],
    queryFn: () =>
      axios.get("/api/selects-data").then((res) => {
        return res.data;
      }),
  });
