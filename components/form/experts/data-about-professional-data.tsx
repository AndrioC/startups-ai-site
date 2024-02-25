"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import { SelectDataProps } from "@/app/(site)/[lang]/form/experts/page";
import { Button } from "@/components/ui/button";
import { useFormExpertState } from "@/contexts/FormExpertContext";
import { DataProfessionalDataSchema } from "@/lib/schema-experts";

interface ValueProps {
  id: number;
  label: string;
}

interface Props {
  data: SelectDataProps;
}
export default function DataAboutProfessionalData({ data }: Props) {
  const { handleNext, handleBack, setFormData, formData } =
    useFormExpertState();

  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataProfessionalDataSchema(t);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: formData,
    resolver: zodResolver(formSchema),
  });

  const occupationData: ValueProps[] = data.occupation.map((value) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  const experienceTimeData: ValueProps[] = data.experience_time.map(
    (value) => ({
      ...value,
      label: lang === "en" ? value.name_en : value.name_pt,
    })
  );

  const sortedOccupationData = occupationData?.slice().sort((a, b) => {
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

  const sortedExperienceTimeData = experienceTimeData?.slice().sort((a, b) => {
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

  function onHandleFormSubmit(data: z.infer<typeof formSchema>) {
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
        {t("experts-form.experts-form-data-professional-data.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="occupation" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-professional-data.question-11")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="occupation"
          {...register("occupation")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("experts-form.experts-form-question-select-text")}
          </option>
          {sortedOccupationData.map((option) => (
            <option key={option.id} value={String(option.id)}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.occupation?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.occupation.message}
          </p>
        )}
        <label htmlFor="company" className="flex items-center">
          <span>
            {t("experts-form.experts-form-data-professional-data.question-12")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="company"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("company")}
        />
        {errors.company?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.company.message}</p>
        )}
        <label htmlFor="positionHeld" className="flex items-center">
          <span>
            {t("experts-form.experts-form-data-professional-data.question-13")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="positionHeld"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("positionHeld")}
        />
        {errors.positionHeld?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.positionHeld.message}
          </p>
        )}
        <label htmlFor="experienceTime" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-professional-data.question-14")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="experienceTime"
          {...register("experienceTime")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("experts-form.experts-form-question-select-text")}
          </option>
          {sortedExperienceTimeData.map((option) => (
            <option key={option.id} value={String(option.id)}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.experienceTime?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.experienceTime.message}
          </p>
        )}
      </div>
      <div className="flex justify-between sticky">
        <Button
          variant="blue"
          onClick={onHandleBack}
          className="px-6 text-white rounded-md"
        >
          {t("startups-form.startup-form-previous-button")}
        </Button>
        <Button variant="blue" className="px-6 text-white rounded-md">
          {t("startups-form.startup-form-next-button")}
        </Button>
      </div>
    </form>
  );
}
