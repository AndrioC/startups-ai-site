"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";

export default function FormAboutTheProgram() {
  const { handleNext } = useFormState();
  const t = useTranslations("Form");

  return (
    <div className="space-y-6">
      <h1 className="text-base lg:text-xl font-semibold uppercase">
        {t("startup-form-presentation.title")}
      </h1>
      <p className="text-xs lg:text-sm mt-1 font-semibold text-gray-600">
        {t("startup-form-presentation.text-01")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-02")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-03")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-04")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-05")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-06")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-07")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-08")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-09")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-10")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-11")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-12")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-13")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-14")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-15")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-16")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-17")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-18")}
      </p>
      <p className="text-xs lg:text-sm mt-1  text-gray-600">
        {t("startup-form-presentation.text-19")}
      </p>
      <p className="text-xs lg:text-sm mt-1 font-semibold text-gray-600">
        {t("startup-form-presentation.text-20")}
      </p>
      <div className="flex justify-end">
        <Button
          variant="blue"
          onClick={handleNext}
          className="px-6 text-white rounded-md"
        >
          {t("startup-form-start-button")}
        </Button>
      </div>
    </div>
  );
}