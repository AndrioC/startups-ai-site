"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import { SelectDataProps } from "@/app/(site)/[lang]/__oldform__/startups/page";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { useFormInvestorState } from "@/contexts/FormInvestorContext";
import { DataGeneralDataSchema } from "@/lib/schema-investors";

interface ValueProps {
  id: number;
  label: string;
}

interface Props {
  data: SelectDataProps;
}
export default function DataAboutGeneralData({ data }: Props) {
  const { handleNext, handleBack, setFormData, formData } =
    useFormInvestorState();

  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataGeneralDataSchema(t);

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

  const countriesData: ValueProps[] = data.country.map((value: any) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

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
        {t("investors-form.investor-form-data-general-data.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="investorName" className="flex items-center">
          <span>
            {t("investors-form.investor-form-data-general-data.question-01")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="investorName"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("investorName")}
        />
        {errors.investorName?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorName.message}
          </p>
        )}
        <label
          htmlFor="investorFoundationDate"
          className="flex items-center mt-5"
        >
          <div>
            {t("investors-form.investor-form-data-general-data.question-02")}
            <span className="text-red-500 ml-1">*</span>
          </div>
        </label>
        <Controller
          control={control}
          name="investorFoundationDate"
          render={({ field }) => (
            <DatePicker
              onChange={(newValue: Date | undefined) => {
                field.onChange(newValue);
              }}
              value={field.value}
            />
          )}
        />
        {errors.investorFoundationDate?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorFoundationDate.message}
          </p>
        )}
        <label htmlFor="investorCountry" className="flex items-center mt-5">
          <span>
            {t("investors-form.investor-form-data-general-data.question-03")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="investorCountry"
          {...register("investorCountry")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">
            {t("investors-form.investor-form-question-select-text")}
          </option>
          {sortedCountriesData.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.investorCountry?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorCountry.message}
          </p>
        )}
        <label
          htmlFor="investorStateAndCity"
          className="flex items-center mt-5"
        >
          <span>
            {t("investors-form.investor-form-data-general-data.question-04")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="investorStateAndCity"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("investorStateAndCity")}
        />
        {errors.investorStateAndCity?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorStateAndCity.message}
          </p>
        )}
        <label htmlFor="investorContactName" className="flex items-center mt-5">
          <span>
            {t("investors-form.investor-form-data-general-data.question-05")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="investorContactName"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("investorContactName")}
        />
        {errors.investorContactName?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorContactName.message}
          </p>
        )}

        <label
          htmlFor="investorContactEmail"
          className="flex items-center mt-5"
        >
          <span>
            {t("investors-form.investor-form-data-general-data.question-06")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="investorContactEmail"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("investorContactEmail")}
        />
        {errors.investorContactEmail?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorContactEmail.message}
          </p>
        )}
        <label
          htmlFor="investorContactNumber"
          className="flex items-center mt-5"
        >
          <div className="flex flex-col">
            <div>
              {t("investors-form.investor-form-data-general-data.question-07")}
              <span className="text-red-500 ml-1">*</span>
            </div>
            <p className="text-xs mt-1">
              {t(
                "investors-form.investor-form-data-general-data.question-07-text"
              )}
            </p>
          </div>
        </label>
        <input
          id="investorContactNumber"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("investorContactNumber")}
        />
        {errors.investorContactNumber?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorContactNumber.message}
          </p>
        )}
        <label htmlFor="investorWebSite" className="flex items-center mt-5">
          <span>
            {t("investors-form.investor-form-data-general-data.question-08")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="investorWebSite"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("investorWebSite")}
        />
        {errors.investorWebSite?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorWebSite.message}
          </p>
        )}
        <label htmlFor="investorLinkedin" className="flex items-center mt-5">
          <span>
            {t("investors-form.investor-form-data-general-data.question-09")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="investorLinkedin"
          type="text"
          className="h-8 lg:h-11 px-4 border rounded-md"
          {...register("investorLinkedin")}
        />
        {errors.investorLinkedin?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.investorLinkedin.message}
          </p>
        )}
      </div>
      <div className="flex justify-between sticky">
        <Button
          variant="blue"
          onClick={onHandleBack}
          className="px-6 text-white rounded-md"
        >
          {t("investors-form.investor-form-previous-button")}
        </Button>
        <Button variant="blue" className="px-6 text-white rounded-md">
          {t("investors-form.investor-form-next-button")}
        </Button>
      </div>
    </form>
  );
}
