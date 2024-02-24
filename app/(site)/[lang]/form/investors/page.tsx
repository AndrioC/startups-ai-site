"use client";

import {
  business_model,
  challenges,
  country,
  investiment_stages,
  maturity_level,
  objectives,
  operational_stage,
  service_products,
  vertical,
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import FormInvestorsStep from "@/components/form/investors/form-investors-step";
import HeaderInvestorsSteps from "@/components/form/investors/header-investors-steps";
import { FormInvestorProvider } from "@/contexts/FormInvestorContext";

export interface SelectDataProps {
  challenges: challenges[];
  country: country[];
  maturity_level: maturity_level[];
  business_model: business_model[];
  objectives: objectives[];
  operational_stage: operational_stage[];
  service_products: service_products[];
  vertical: vertical[];
  investiment_stages: investiment_stages[];
}

export default function FormInvestorsPage() {
  const { data, isLoading } = useSelectData();

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  return (
    <FormInvestorProvider>
      <div className="flex flex-col items-center mt-5 mb-5">
        <HeaderInvestorsSteps />
        <div className="flex justify-center h-[600px] lg:h-[700px] w-[350px] lg:w-[720px]">
          <div className="w-full border p-6 rounded-md bg-white max-h-[600px] overflow-scroll">
            <FormInvestorsStep data={data!} />
          </div>
        </div>
      </div>
    </FormInvestorProvider>
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
