"use client";

import {
  business_model,
  challenges,
  country,
  maturity_level,
  objectives,
  operational_stage,
  service_products,
  vertical,
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import FormStep from "@/components/form/startups/form-step";
import HeaderSteps from "@/components/form/startups/header-steps";
import { FormProvider } from "@/contexts/FormContext";

export interface SelectDataProps {
  challenges: challenges[];
  country: country[];
  maturity_level: maturity_level[];
  business_model: business_model[];
  objectives: objectives[];
  operational_stage: operational_stage[];
  service_products: service_products[];
  vertical: vertical[];
}

export default function FormStartusPage() {
  const { data, isLoading } = useSelectData();

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  return (
    <FormProvider>
      <div className="flex flex-col items-center mt-5 mb-5">
        <HeaderSteps />
        <div className="flex justify-center h-[600px] lg:h-[700px] w-[350px] lg:w-[720px]">
          <div className="w-full border p-6 rounded-md bg-white max-h-[600px] overflow-scroll">
            <FormStep data={data!} />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

const useSelectData = () =>
  useQuery<SelectDataProps>({
    queryKey: ["select-data"],
    queryFn: () =>
      axios.get("/api/selects-data").then((res) => {
        return res.data;
      }),
    staleTime: 5 * 60 * 1000,
  });
