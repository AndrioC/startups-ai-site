"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import { trlList } from "@/app/(site)/data";
import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";
import { DataMaturationLevelDeepTechSchema } from "@/lib/schema";

type Inputs = z.infer<typeof DataMaturationLevelDeepTechSchema>;

export default function DataMaturationLevelDeepTech() {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const t = useTranslations("Form");
  const lang = useLocale();

  const { register, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: formData,
    resolver: zodResolver(DataMaturationLevelDeepTechSchema),
  });

  const trlData = trlList.map((value) => ({
    ...value,
    label: lang === "en" ? value.label_en : value.label_pt,
  }));

  const sortedTrlData = trlData.slice().sort((a, b) => {
    const labelA = a.label.toUpperCase();
    const labelB = b.label.toUpperCase();

    if (labelA < labelB) {
      return -1;
    }

    if (labelA > labelB) {
      return 1;
    }

    return 0;
  });

  function onHandleFormSubmit(data: Inputs) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }

  function onHandleBack() {
    const currentFormData = watch();
    setFormData((prevFormData) => ({ ...prevFormData, ...currentFormData }));
    handleBack();
  }
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="text-sm lg:text-xl font-semibold uppercase">
        {t("startup-form-data-maturation-level-deep-tech.title")}
      </h1>
      <p className="text-gray-500 font-light text-xs lg:text-sm">
        {t(
          "startup-form-data-maturation-level-deep-tech.explain-text.first-part"
        )}
      </p>
      <p className="text-gray-500 font-light text-xs lg:text-sm">
        {t(
          "startup-form-data-maturation-level-deep-tech.explain-text.second-part"
        )}
      </p>
      <p className="text-gray-500 font-light text-xs lg:text-sm">
        {t(
          "startup-form-data-maturation-level-deep-tech.explain-text.third-part"
        )}
      </p>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="maturityLevel" className="flex items-center">
          <span>
            {t("startup-form-data-maturation-level-deep-tech.question-25")}
          </span>
        </label>
        <select
          id="maturityLevel"
          {...register("maturityLevel")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          {sortedTrlData.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label htmlFor="hasPatent" className="flex items-center mt-5">
          <span>
            {t("startup-form-data-maturation-level-deep-tech.question-26")}
          </span>
        </label>
        <select
          id="hasPatent"
          {...register("hasPatent")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        <label htmlFor="patentAndCode" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>
                {t("startup-form-data-maturation-level-deep-tech.question-27")}
              </span>
            </div>
          </div>
        </label>
        <textarea
          id="patentAndCode"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("patentAndCode")}
        />
      </div>
      <div className="flex justify-between">
        <Button
          variant="blue"
          onClick={onHandleBack}
          className="px-6 text-white rounded-md"
        >
          {t("startup-form-previous-button")}
        </Button>
        <Button variant="blue" className="px-6 text-white rounded-md">
          {t("startup-form-next-button")}
        </Button>
      </div>
    </form>
  );
}
