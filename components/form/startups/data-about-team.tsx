"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";
import { DataAboutTeam } from "@/lib/schema";
export default function DataAboutTeamPage() {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const t = useTranslations("Form");

  const formSchema = DataAboutTeam(t);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: formData,
    resolver: zodResolver(formSchema),
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
        {t("startup-form-data-about-team.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label
          htmlFor="partnersHaveAlreadyBeenInOtherBusiness"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-team.question-35")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="partnersHaveAlreadyBeenInOtherBusiness"
          {...register("partnersHaveAlreadyBeenInOtherBusiness")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.partnersHaveAlreadyBeenInOtherBusiness?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.partnersHaveAlreadyBeenInOtherBusiness.message}
          </p>
        )}
        <label
          htmlFor="parnertsHaveComplementaryAreaOfActivity"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-team.question-36")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="parnertsHaveComplementaryAreaOfActivity"
          {...register("parnertsHaveComplementaryAreaOfActivity")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
          <option value="partially">
            {t("startup-form-question-partially-text")}
          </option>
        </select>
        {errors.parnertsHaveComplementaryAreaOfActivity?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.parnertsHaveComplementaryAreaOfActivity.message}
          </p>
        )}
        <label
          htmlFor="oneOrMoreDedicationPartner"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-team.question-37")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="oneOrMoreDedicationPartner"
          {...register("oneOrMoreDedicationPartner")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.oneOrMoreDedicationPartner?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.oneOrMoreDedicationPartner.message}
          </p>
        )}
        <label
          htmlFor="oneOrMorePartnersHasProvenExperience"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-team.question-38")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="oneOrMorePartnersHasProvenExperience"
          {...register("oneOrMorePartnersHasProvenExperience")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
          <option value="partially">
            {t("startup-form-question-partially-text")}
          </option>
        </select>
        {errors.oneOrMorePartnersHasProvenExperience?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.oneOrMorePartnersHasProvenExperience.message}
          </p>
        )}
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
