"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useFormInvestorState } from "@/contexts/FormInvestorContext";

export default function FormInvestorsAboutTheProgram() {
  const { handleNext } = useFormInvestorState();
  const t = useTranslations("Form");

  return (
    <div className="space-y-6">
      <h1 className="text-base lg:text-xl font-semibold uppercase">
        {t("investors-form.investor-form-presentation.title")}
      </h1>
      <p className="text-xs lg:text-sm mt-1 font-semibold text-gray-600">
        {t("investors-form.investor-form-presentation.text-01")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-02")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-03")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-04")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-05")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-06")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-07")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-08")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-09")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("investors-form.investor-form-presentation.text-10")}
      </p>
      <div className="flex justify-end">
        <Button
          variant="blue"
          onClick={handleNext}
          className="px-6 text-white rounded-md"
        >
          {t("startups-form.startup-form-start-button")}
        </Button>
      </div>
    </div>
  );
}
