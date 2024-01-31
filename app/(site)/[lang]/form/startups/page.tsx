"use client";

import FormStep from "@/components/form/startups/form-step";
import HeaderSteps from "@/components/form/startups/header-steps";
import { FormProvider } from "@/contexts/FormContext";

export default function FormStartusPage() {
  return (
    <FormProvider>
      <div className="flex flex-col items-center mt-5 mb-5">
        <HeaderSteps />
        <div className="flex justify-center h-[600px] lg:h-[700px] w-[350px] lg:w-[720px]">
          <div className="w-full border p-6 rounded-md bg-white max-h-[600px] overflow-scroll">
            <FormStep />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
