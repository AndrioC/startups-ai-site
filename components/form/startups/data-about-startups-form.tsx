"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import {
  businessModelList,
  countriesList,
  operationalStageList,
  startupChallengesList,
  verticalTypes,
} from "@/app/(site)/data";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { useFormState } from "@/contexts/FormContext";
import { DataAboutStartupsSchema } from "@/lib/schema";

export default function DataAboutStartupsForm() {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataAboutStartupsSchema(t);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: formData,
    resolver: zodResolver(formSchema),
  });

  const verticalData = verticalTypes.map((value) => ({
    ...value,
    label: lang === "en" ? value.label_en : value.label_pt,
  }));

  const countriesData = countriesList.map((value) => ({
    ...value,
    label: lang === "en" ? value.label_en : value.label_pt,
  }));

  const operationalStageData = operationalStageList.map((value) => ({
    ...value,
    label: lang === "en" ? value.label_en : value.label_pt,
  }));

  const startupsChallengesData = startupChallengesList.map((value) => ({
    ...value,
    label: lang === "en" ? value.label_en : value.label_pt,
  }));

  const sortedCountriesData = countriesData.slice().sort((a, b) => {
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

  const sortedBusinessModel = businessModelList.slice().sort((a, b) => {
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

  const sortedOperationalStage = operationalStageData.slice().sort((a, b) => {
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

  const sortedStartupsChallenges = startupsChallengesData
    .slice()
    .sort((a, b) => {
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
        {t("startup-form-data-about-startups.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="startupName" className="flex items-center">
          <span>{t("startup-form-data-about-startups.question-01")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="startupName"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("startupName")}
        />
        {errors.startupName?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.startupName.message}
          </p>
        )}
        <label htmlFor="vertical" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-02")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="vertical"
          {...register("vertical")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          {verticalData.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.vertical?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.vertical.message}</p>
        )}
        <label htmlFor="foundationDate" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-03")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <Controller
          control={control}
          name="foundationDate"
          render={({ field }) => (
            <DatePicker onChange={field.onChange} value={field.value} />
          )}
        />
        {errors.foundationDate?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.foundationDate.message}
          </p>
        )}
        <label htmlFor="subscriptionNumber" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-data-about-startups.question-04")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t("startup-form-data-about-startups.question-04-text")}
            </p>
          </div>
        </label>
        <input
          id="subscriptionNumber"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("subscriptionNumber")}
        />
        {errors.subscriptionNumber?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.subscriptionNumber.message}
          </p>
        )}
        <label htmlFor="referenceLink" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-05")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="referenceLink"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("referenceLink")}
        />
        {errors.referenceLink?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.referenceLink.message}
          </p>
        )}
        <label htmlFor="country" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-06")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="country"
          {...register("country")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          {sortedCountriesData.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.country?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.country.message}</p>
        )}
        <label htmlFor="stateAndCity" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-07")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="stateAndCity"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("stateAndCity")}
        />
        {errors.stateAndCity?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.stateAndCity.message}
          </p>
        )}
        <label htmlFor="mainResponsibleName" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-08")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="mainResponsibleName"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("mainResponsibleName")}
        />
        {errors.mainResponsibleName?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.mainResponsibleName.message}
          </p>
        )}
        <label
          htmlFor="mainResponsibleLinkedin"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-startups.question-09")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="mainResponsibleLinkedin"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("mainResponsibleLinkedin")}
        />
        {errors.mainResponsibleLinkedin?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.mainResponsibleLinkedin.message}
          </p>
        )}
        <label htmlFor="contactNumber" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-10")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="contactNumber"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("contactNumber")}
        />
        {errors.contactNumber?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.contactNumber.message}
          </p>
        )}
        <label
          htmlFor="mainResponsibleEmail"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-startups.question-11")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="mainResponsibleEmail"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("mainResponsibleEmail")}
        />
        {errors.mainResponsibleEmail?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.mainResponsibleEmail.message}
          </p>
        )}
        <label htmlFor="partnersQuantity" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-12")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="partnersQuantity"
          type="number"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("partnersQuantity")}
        />
        {errors.partnersQuantity?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.partnersQuantity.message}
          </p>
        )}
        <label
          htmlFor="partnersPositionRelation"
          className="flex items-center mt-5"
        >
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-data-about-startups.question-13")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs">
              {t("startup-form-data-about-startups.question-13-text")}
            </p>
          </div>
        </label>
        <textarea
          id="partnersPositionRelation"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("partnersPositionRelation")}
        />
        {errors.partnersPositionRelation?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.partnersPositionRelation.message}
          </p>
        )}
        <label
          htmlFor="exclusiveDedicationPartner"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-startups.question-14")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="exclusiveDedicationPartner"
          {...register("exclusiveDedicationPartner")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.exclusiveDedicationPartner?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.exclusiveDedicationPartner.message}
          </p>
        )}
        <label htmlFor="employeesQuantity" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-15")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="employeesQuantity"
          type="number"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("employeesQuantity")}
        />
        {errors.employeesQuantity?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.employeesQuantity.message}
          </p>
        )}
        <label
          htmlFor="fullTimeEmployeesQuantity"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-about-startups.question-16")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="fullTimeEmployeesQuantity"
          type="number"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("fullTimeEmployeesQuantity")}
        />
        {errors.fullTimeEmployeesQuantity?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.fullTimeEmployeesQuantity.message}
          </p>
        )}
        <label htmlFor="businessModel" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-17")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="businessModel"
          {...register("businessModel")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          {sortedBusinessModel.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.businessModel?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.businessModel.message}
          </p>
        )}
        <label htmlFor="operationalStage" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-18")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="operationalStage"
          {...register("operationalStage")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          {sortedOperationalStage.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.operationalStage?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.operationalStage.message}
          </p>
        )}
        <label htmlFor="startupChallenges" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-19")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedStartupsChallenges.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`option-${option.id}`}
              value={option.value}
              className="w-[15px] h-[15px]"
              {...register("startupChallenges")}
            />
            <label htmlFor={`option-${option.id}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
        {errors.startupChallenges?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.startupChallenges.message}
          </p>
        )}
        <label htmlFor="isDeepTech" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-data-about-startups.question-20")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t("startup-form-data-about-startups.question-20-text")}
            </p>
          </div>
        </label>
        <select
          id="isDeepTech"
          {...register("isDeepTech")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.isDeepTech?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.isDeepTech.message}
          </p>
        )}
        <label htmlFor="loadPitchDeck" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-21")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <Controller
          name="loadPitchDeck"
          control={control}
          render={({ field: { ref, name, onBlur, onChange } }) => (
            <div>
              <input
                type="file"
                ref={ref}
                name={name}
                onBlur={onBlur}
                accept=".pdf"
                onChange={(e) => {
                  onChange(e.target.files?.[0]);
                }}
              />
            </div>
          )}
        />
        {errors.loadPitchDeck?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.loadPitchDeck.message}
          </p>
        )}
        <label htmlFor="loadLogo" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-22")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <Controller
          name="loadLogo"
          control={control}
          render={({ field: { ref, name, onBlur, onChange } }) => (
            <input
              type="file"
              ref={ref}
              name={name}
              onBlur={onBlur}
              accept=".png, .jpeg, .jpg, .svg"
              onChange={(e) => {
                onChange(e.target.files?.[0]);
              }}
            />
          )}
        />
        {errors.loadLogo?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.loadLogo.message}</p>
        )}
        <label htmlFor="shortDescription" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-23")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="shortDescription"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("shortDescription")}
        />
        {errors.shortDescription?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.shortDescription.message}
          </p>
        )}
        <label htmlFor="valueProposal" className="flex items-center mt-5">
          <span>{t("startup-form-data-about-startups.question-24")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="valueProposal"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("valueProposal")}
        />
        {errors.valueProposal?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.valueProposal.message}
          </p>
        )}
      </div>
      <div className="flex justify-between sticky">
        <Button
          variant="blue"
          onClick={handleSubmit(onHandleBack)}
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