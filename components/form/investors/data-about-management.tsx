"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import { SelectDataProps } from "@/app/(site)/[lang]/form/investors/page";
import { Button } from "@/components/ui/button";
import { useFormInvestorState } from "@/contexts/FormInvestorContext";
import { DataAboutManegamentSchema } from "@/lib/schema-investors";
interface ValueProps {
  id: number;
  label: string;
}

interface Props {
  data: SelectDataProps;
}

export default function DataAboutManagement({ data }: Props) {
  const {
    handleNext,
    handleBack,
    setFormData,
    formData,
    logoFile,
    setLogoFile,
  } = useFormInvestorState();
  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataAboutManegamentSchema(t);

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

  const investimentStagesData: ValueProps[] = data.investiment_stages.map(
    (value) => ({
      ...value,
      label: lang === "en" ? value.name_en : value.name_pt,
    })
  );

  const verticalData: ValueProps[] = data.vertical.map((value) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  const operationalStageData: ValueProps[] = data.operational_stage.map(
    (value) => ({
      ...value,
      label: lang === "en" ? value.name_en : value.name_pt,
    })
  );

  const sortedInvestimentStages = investimentStagesData
    ?.slice()
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

  const sortedBusinessModel = data.business_model.slice().sort((a, b) => {
    const labelA = a.name.toUpperCase();
    const labelB = b.name.toUpperCase();

    if (labelA < labelB) {
      return -1;
    }

    if (labelA > labelB) {
      return 1;
    }

    return 0;
  });

  const sortedOperationalStage = operationalStageData?.slice().sort((a, b) => {
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
        {t("investors-form.investor-form-data-about-management.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="investimentStages" className="flex items-center mt-5">
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-10"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedInvestimentStages.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`investiment-stage-option-${option.id}`}
              value={Number(option.id)}
              className="w-[15px] h-[15px]"
              {...register("investimentStages")}
            />
            <label
              htmlFor={`investiment-stage-option-${option.id}`}
              className="ml-2"
            >
              {option.label}
            </label>
          </div>
        ))}
        {errors.investimentStages?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investimentStages.message}
          </p>
        )}
        <label
          htmlFor="technologiesOfInterest"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-11"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedVerticalData.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`vertical-option-${option.id}`}
              value={Number(option.id)}
              className="w-[15px] h-[15px]"
              {...register("technologiesOfInterest")}
            />
            <label htmlFor={`vertical-option-${option.id}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
        {errors.technologiesOfInterest?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.technologiesOfInterest.message}
          </p>
        )}
        <label
          htmlFor="businessModelOfInterest"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-12"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedBusinessModel.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`model-business-option-${option.id}`}
              value={Number(option.id)}
              className="w-[15px] h-[15px]"
              {...register("businessModelOfInterest")}
            />
            <label
              htmlFor={`model-business-option-${option.id}`}
              className="ml-2"
            >
              {option.name}
            </label>
          </div>
        ))}
        {errors.businessModelOfInterest?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.businessModelOfInterest.message}
          </p>
        )}
        <label
          htmlFor="operationalStageOfInterest"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-13"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedOperationalStage.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`operational-stage-option-${option.id}`}
              value={Number(option.id)}
              className="w-[15px] h-[15px]"
              {...register("operationalStageOfInterest")}
            />
            <label
              htmlFor={`operational-stage-option-${option.id}`}
              className="ml-2"
            >
              {option.label}
            </label>
          </div>
        ))}
        {errors.operationalStageOfInterest?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.operationalStageOfInterest.message}
          </p>
        )}
        <label htmlFor="minimalInvestment" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>
                {t(
                  "investors-form.investor-form-data-about-management.question-14"
                )}
              </span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t("investors-form.investor-form-convert-value-to-dollar")}
            </p>
          </div>
        </label>
        <input
          id="minimalInvestment"
          type="number"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("minimalInvestment")}
        />
        {errors.minimalInvestment?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.minimalInvestment.message}
          </p>
        )}
        <label htmlFor="averageInvestiment" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>
                {t(
                  "investors-form.investor-form-data-about-management.question-15"
                )}
              </span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t("investors-form.investor-form-convert-value-to-dollar")}
            </p>
          </div>
        </label>
        <input
          id="subscriptionNumber"
          type="number"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("averageInvestiment")}
        />
        {errors.averageInvestiment?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.averageInvestiment.message}
          </p>
        )}
        <label htmlFor="maximumInvestiment" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>
                {t(
                  "investors-form.investor-form-data-about-management.question-16"
                )}
              </span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t("investors-form.investor-form-convert-value-to-dollar")}
            </p>
          </div>
        </label>
        <input
          id="maximumInvestiment"
          type="number"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("maximumInvestiment")}
        />
        {errors.maximumInvestiment?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.maximumInvestiment.message}
          </p>
        )}
        <label htmlFor="preRequisiteTeam" className="flex items-center mt-5">
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-17"
            )}
          </span>
        </label>
        <textarea
          id="preRequisiteTeam"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("preRequisiteTeam")}
        />
        {errors.preRequisiteTeam?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.preRequisiteTeam.message}
          </p>
        )}
        <label
          htmlFor="onlyInvestingStartupOriginCountry"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-18"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="onlyInvestingStartupOriginCountry"
          {...register("onlyInvestingStartupOriginCountry")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("investors-form.investor-form-question-select-text")}
          </option>
          <option value="yes">
            {t("investors-form.investor-form-question-yes-text")}
          </option>
          <option value="no">
            {t("investors-form.investor-form-question-no-text")}
          </option>
        </select>
        {errors.onlyInvestingStartupOriginCountry?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.onlyInvestingStartupOriginCountry.message}
          </p>
        )}
        <label htmlFor="loadLogo" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>
                {t(
                  "investors-form.investor-form-data-about-management.question-19"
                )}
              </span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t("investors-form.error-when-image-is-too-large")}
            </p>
          </div>
        </label>
        <Controller
          name="loadInvestorLogo"
          control={control}
          render={({ field: { ref, name, onBlur, onChange } }) => (
            <div className="flex items-center space-x-2">
              <label
                htmlFor={name}
                className="bg-blue-500 px-4 py-2 text-white rounded-md cursor-pointer"
              >
                {t("investors-form.investor-select-file-text")}
              </label>
              <input
                type="file"
                ref={ref}
                name={name}
                id={name}
                onBlur={onBlur}
                accept=".png, .jpeg, .jpg, .svg"
                style={{ display: "none" }}
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];
                  setLogoFile(selectedFile?.name || undefined);
                  onChange(selectedFile);
                }}
              />
              {logoFile && <span>{logoFile}</span>}
            </div>
          )}
        />
        {errors.loadInvestorLogo?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.loadInvestorLogo.message}
          </p>
        )}
        <label htmlFor="miniDescription" className="flex items-center mt-5">
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-20"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="miniDescription"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("miniDescription")}
        />
        {errors.miniDescription?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.miniDescription.message}
          </p>
        )}
        <label htmlFor="investimentText" className="flex items-center mt-5">
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-21"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="investimentText"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("investimentText")}
        />
        {errors.investimentText?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investimentText.message}
          </p>
        )}
        <label
          htmlFor="exampleInvestedStartups"
          className="flex items-center mt-5"
        >
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-22"
            )}
          </span>
        </label>
        <textarea
          id="exampleInvestedStartups"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("exampleInvestedStartups")}
        />
        {errors.exampleInvestedStartups?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.exampleInvestedStartups.message}
          </p>
        )}
        <label htmlFor="isPatentRequired" className="flex items-center mt-5">
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-23"
            )}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="isPatentRequired"
          {...register("isPatentRequired")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("investors-form.investor-form-question-select-text")}
          </option>
          <option value="yes">
            {t("investors-form.investor-form-question-yes-text")}
          </option>
          <option value="no">
            {t("investors-form.investor-form-question-no-text")}
          </option>
        </select>
        {errors.isPatentRequired?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.isPatentRequired.message}
          </p>
        )}
        <label htmlFor="inCaseOfDeepTech" className="flex items-center mt-5">
          <span>
            {t(
              "investors-form.investor-form-data-about-management.question-24"
            )}
          </span>
        </label>
        <textarea
          id="inCaseOfDeepTech"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("inCaseOfDeepTech")}
        />
        {errors.inCaseOfDeepTech?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.inCaseOfDeepTech.message}
          </p>
        )}
      </div>
      <div className="flex justify-between">
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
