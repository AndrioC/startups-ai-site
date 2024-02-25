"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import { SelectDataProps } from "@/app/(site)/[lang]/form/experts/page";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { useFormExpertState } from "@/contexts/FormExpertContext";
import { DataPersonalDataSchema } from "@/lib/schema-experts";

interface ValueProps {
  id: number;
  label: string;
}

interface Props {
  data: SelectDataProps;
}
export default function DataAboutPersonalData({ data }: Props) {
  const {
    handleNext,
    handleBack,
    setFormData,
    formData,
    pictureImage,
    setPictureImage,
  } = useFormExpertState();

  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataPersonalDataSchema(t);

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

  const genderData: ValueProps[] = data.gender.map((value) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  const levelOfEducationData: ValueProps[] = data.level_of_education.map(
    (value) => ({
      ...value,
      label: lang === "en" ? value.name_en : value.name_pt,
    })
  );

  const countriesData: ValueProps[] = data.country.map((value: any) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  const sortedGenderData = genderData?.slice().sort((a, b) => {
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

  const sortedLevelOfEducationData = levelOfEducationData
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

  const sortedCountriesData = countriesData?.slice().sort((a, b) => {
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
        {t("experts-form.experts-form-data-personal-data.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="expertName" className="flex items-center">
          <span>
            {t("experts-form.experts-form-data-personal-data.question-01")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="expertName"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("expertName")}
        />
        {errors.expertName?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertName.message}
          </p>
        )}
        <label htmlFor="expertGender" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-personal-data.question-02")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="expertGender"
          {...register("expertGender")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("experts-form.experts-form-question-select-text")}
          </option>
          {sortedGenderData.map((option) => (
            <option key={option.id} value={String(option.id)}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.expertGender?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertGender.message}
          </p>
        )}
        <label htmlFor="expertDob" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-personal-data.question-03")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <Controller
          control={control}
          name="expertDob"
          render={({ field }) => (
            <DatePicker
              onChange={(newValue: Date | undefined) => {
                field.onChange(newValue);
              }}
              value={field.value}
            />
          )}
        />
        {errors.expertDob?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertDob.message}
          </p>
        )}
        <label htmlFor="expertCountry" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-personal-data.question-04")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="expertCountry"
          {...register("expertCountry")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("experts-form.experts-form-question-select-text")}
          </option>
          {sortedCountriesData.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.expertCountry?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertCountry.message}
          </p>
        )}
        <label htmlFor="expertCityState" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-personal-data.question-05")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="expertCityState"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("expertCityState")}
        />
        {errors.expertCityState?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertCityState.message}
          </p>
        )}
        <label htmlFor="expertLinkedin" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-personal-data.question-06")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="expertLinkedin"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("expertLinkedin")}
        />
        {errors.expertLinkedin?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertLinkedin.message}
          </p>
        )}
        <label htmlFor="expertContactNumber" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>
                {t("experts-form.experts-form-data-personal-data.question-07")}
              </span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs">
              {t(
                "experts-form.experts-form-data-personal-data.question-07-text"
              )}
            </p>
          </div>
        </label>
        <input
          id="expertContactNumber"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("expertContactNumber")}
        />
        {errors.expertContactNumber?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertContactNumber.message}
          </p>
        )}
        <label htmlFor="expertContactEmail" className="flex items-center mt-5">
          <span>
            {t("experts-form.experts-form-data-personal-data.question-08")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="expertContactEmail"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("expertContactEmail")}
        />
        {errors.expertContactEmail?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertContactEmail.message}
          </p>
        )}
        <label
          htmlFor="expertLevelOfEducation"
          className="flex items-center mt-5"
        >
          <span>
            {t("experts-form.experts-form-data-personal-data.question-09")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="expertLevelOfEducation"
          {...register("expertLevelOfEducation")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("experts-form.experts-form-question-select-text")}
          </option>
          {sortedLevelOfEducationData.map((option) => (
            <option key={option.id} value={String(option.id)}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.expertLevelOfEducation?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertLevelOfEducation.message}
          </p>
        )}
        <label htmlFor="expertPictureImage" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>
                {t("experts-form.experts-form-data-personal-data.question-10")}
              </span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t("experts-form.error-when-image-is-too-large")}
            </p>
          </div>
        </label>
        <Controller
          name="expertPictureImage"
          control={control}
          render={({ field: { ref, name, onBlur, onChange } }) => (
            <div className="flex items-center space-x-2">
              <label
                htmlFor={name}
                className="bg-blue-500 px-4 py-2 text-white rounded-md cursor-pointer"
              >
                {t("experts-form.experts-form-question-select-text")}
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
                  setPictureImage(selectedFile?.name || undefined);
                  onChange(selectedFile);
                  //updateFormData({ loadLogo: selectedFile });
                }}
              />
              {pictureImage && <span>{pictureImage}</span>}
            </div>
          )}
        />
        {errors.expertPictureImage?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expertPictureImage.message}
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
