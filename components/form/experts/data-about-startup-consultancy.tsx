"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "sonner";
import { z } from "zod";

import { SelectDataProps } from "@/app/(site)/[lang]/form/mentors/page";
import { Button } from "@/components/ui/button";
import { useFormExpertState } from "@/contexts/FormExpertContext";
import { DataStartupsConsultancySchema } from "@/lib/schema-experts";

interface ValueProps {
  id: number;
  label: string;
}

interface Props {
  data: SelectDataProps;
}
export default function DataAboutStartupConsultancy({ data }: Props) {
  const { handleNext, handleBack, setFormData, formData } =
    useFormExpertState();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataStartupsConsultancySchema(t);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: formData,
    resolver: zodResolver(formSchema),
  });

  const languagesData: ValueProps[] = data.languages.map((value) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  const challengesData: ValueProps[] = data.challenges.map((value) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  const verticalData: ValueProps[] = data.vertical.map((value) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  const sortedLanguagesData = languagesData?.slice().sort((a, b) => {
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

  const sortedChallengesData = challengesData?.slice().sort((a, b) => {
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

  const sortedVerticalData = verticalData?.slice().sort((a, b) => {
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

  async function onHandleFormSubmit() {
    const currentFormData = watch();
    setFormData((prevFormData) => ({ ...prevFormData, ...currentFormData }));
    const sendFormData = new FormData();
    sendFormData.append("file-logo", formData.expertPictureImage!);
    sendFormData.append("data", JSON.stringify(currentFormData));
    try {
      setIsSubmiting(true);
      const response = await axios.post("/api/mentors-form", sendFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === 201) {
        setIsSubmiting(false);
        handleNext();
        return;
      }
    } catch (error) {
      toast(t("experts-form.error-when-finished-form"));
    }
    setIsSubmiting(false);
  }

  function onHandleBack() {
    const currentFormData = watch();
    setFormData((prevFormData) => ({ ...prevFormData, ...currentFormData }));
    handleBack();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="text-sm lg:text-xl font-semibold uppercase">
        {t(
          "experts-form.experts-form-data-consultancy-for-startups-data.title"
        )}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label
          htmlFor="experienceWithStartups"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "experts-form.experts-form-data-consultancy-for-startups-data.question-15"
            )}
          </span>
        </label>
        <textarea
          id="experienceWithStartups"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("experienceWithStartups")}
        />
        {errors.experienceWithStartups?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.experienceWithStartups.message}
          </p>
        )}
        <label htmlFor="languages" className="flex items-center mt-5">
          <span>
            {t(
              "experts-form.experts-form-data-consultancy-for-startups-data.question-16"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedLanguagesData.map((option: any) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`languages-option-${option.id}`}
              value={Number(option.id)}
              className="w-[15px] h-[15px]"
              {...register("languages")}
              //onChange={handleCheckboxStartupObjectivesChange}
            />
            <label htmlFor={`languages-option-${option.id}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
        {errors.languages?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.languages.message}
          </p>
        )}
        <label
          htmlFor="participationAccelerationProgram"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "experts-form.experts-form-data-consultancy-for-startups-data.question-17"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="participationAccelerationProgram"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("participationAccelerationProgram")}
        />
        {errors.participationAccelerationProgram?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.participationAccelerationProgram.message}
          </p>
        )}
        <label htmlFor="expertiseAreas" className="flex items-center mt-5">
          <span>
            {t(
              "experts-form.experts-form-data-consultancy-for-startups-data.question-18"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedChallengesData.map((option: any) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`challenges-option-${option.id}`}
              value={Number(option.id)}
              className="w-[15px] h-[15px]"
              {...register("expertiseAreas")}
              //onChange={handleCheckboxStartupObjectivesChange}
            />
            <label htmlFor={`challenges-option-${option.id}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
        {errors.expertiseAreas?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertiseAreas.message}
          </p>
        )}

        <label
          htmlFor="verticalsConsultancy"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "experts-form.experts-form-data-consultancy-for-startups-data.question-19"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedVerticalData.map((option: any) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`vertical-option-${option.id}`}
              value={Number(option.id)}
              className="w-[15px] h-[15px]"
              {...register("verticalsConsultancy")}
              //onChange={handleCheckboxStartupObjectivesChange}
            />
            <label htmlFor={`vertical-option-${option.id}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
        {errors.verticalsConsultancy?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.verticalsConsultancy.message}
          </p>
        )}
      </div>
      <div className="flex justify-between sticky">
        <Button
          variant="blue"
          onClick={onHandleBack}
          disabled={isSubmiting}
          className="px-6 text-white rounded-md"
        >
          {t("startups-form.startup-form-previous-button")}
        </Button>
        <Button
          variant="blue"
          disabled={isSubmiting}
          className="px-6 text-white rounded-md"
        >
          {t("startups-form.startup-form-finish-button")}
        </Button>
      </div>
    </form>
  );
}
