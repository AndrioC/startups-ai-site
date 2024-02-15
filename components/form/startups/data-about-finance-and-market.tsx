"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";
import { DataAboutFinanceAndMarket } from "@/lib/schema";

interface Props {
  is_review?: boolean;
}

export default function DataAboutFinanceAndMarketPage({ is_review }: Props) {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const t = useTranslations("Form");

  const formSchema = DataAboutFinanceAndMarket(t);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: formData,
    resolver: zodResolver(formSchema),
  });

  async function onHandleFormSubmit() {
    const currentFormData = watch();
    setFormData((prevFormData) => ({ ...prevFormData, ...currentFormData }));
    const sendFormData = new FormData();
    sendFormData.append("file-logo", formData.loadLogo!);
    sendFormData.append("file-pitch", formData.loadPitchDeck!);
    sendFormData.append("data", JSON.stringify(currentFormData));
    try {
      setIsSubmiting(true);
      const response = await axios.post("/api/startups-form", sendFormData, {
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
      toast(t("error-when-finished-form"));
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
        {t("startup-form-data-about-finance-and-market.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="customersQuantity" className="flex items-center mt-5">
          <span>
            {t("startup-form-data-about-finance-and-market.question-44")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="customersQuantity"
          type="number"
          className="h-11 px-4 border rounded-md"
          {...register("customersQuantity")}
        />
        {errors.customersQuantity?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.customersQuantity.message}
          </p>
        )}
        <label htmlFor="lastRevenue" className="flex items-center mt-5">
          <span>
            {t("startup-form-data-about-finance-and-market.question-45")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <p className="text-gray-500 font-light text-sm">
          {t(
            "startup-form-data-about-finance-and-market.question-american-dollar-text"
          )}
        </p>
        <input
          id="lastRevenue"
          type="number"
          className="h-11 px-4 border rounded-md"
          {...register("lastRevenue")}
        />
        {errors.lastRevenue?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.lastRevenue.message}
          </p>
        )}
        <label
          htmlFor="lastSixMonthsRevenue"
          className="flex items-center mt-5"
        >
          <span>
            {t("startup-form-data-about-finance-and-market.question-46")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <p className="text-gray-500 font-light text-sm">
          {t(
            "startup-form-data-about-finance-and-market.question-american-dollar-text"
          )}
        </p>
        <input
          id="lastSixMonthsRevenue"
          type="number"
          className="h-11 px-4 border rounded-md"
          {...register("lastSixMonthsRevenue")}
        />
        {errors.lastSixMonthsRevenue?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.lastSixMonthsRevenue.message}
          </p>
        )}
        <label
          htmlFor="lastTwelveMonthsRevenue"
          className="flex items-center mt-5"
        >
          <span>
            {t("startup-form-data-about-finance-and-market.question-47")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <p className="text-gray-500 font-light text-sm">
          {t(
            "startup-form-data-about-finance-and-market.question-american-dollar-text"
          )}
        </p>
        <input
          id="lastTwelveMonthsRevenue"
          type="number"
          className="h-11 px-4 border rounded-md"
          {...register("lastTwelveMonthsRevenue")}
        />
        {errors.lastTwelveMonthsRevenue?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.lastTwelveMonthsRevenue.message}
          </p>
        )}
        <label
          htmlFor="alreadyRaisedInvestment"
          className="flex items-center mt-5"
        >
          <span>
            {t("startup-form-data-about-finance-and-market.question-48")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="alreadyRaisedInvestment"
          {...register("alreadyRaisedInvestment")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs text-xs lg:text-base sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.alreadyRaisedInvestment?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.alreadyRaisedInvestment.message}
          </p>
        )}
        <label htmlFor="amountRaised" className="flex items-center mt-5">
          <span>
            {t("startup-form-data-about-finance-and-market.question-49")}
          </span>
        </label>
        <p className="text-gray-500 font-light text-sm">
          {t(
            "startup-form-data-about-finance-and-market.question-american-dollar-text"
          )}
        </p>
        <input
          id="amountRaised"
          type="number"
          className="h-11 px-4 border rounded-md"
          {...register("amountRaised")}
        />
        {errors.amountRaised?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.amountRaised.message}
          </p>
        )}
        <label
          htmlFor="howMuchEquityWasDistributed"
          className="flex items-center mt-5"
        >
          <span>
            {t("startup-form-data-about-finance-and-market.question-50")}
          </span>
        </label>
        <input
          id="howMuchEquityWasDistributed"
          type="text"
          className="h-11 px-4 border rounded-md"
          {...register("howMuchEquityWasDistributed")}
        />
        {errors.howMuchEquityWasDistributed?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.howMuchEquityWasDistributed.message}
          </p>
        )}
      </div>
      {!is_review && (
        <div className="flex justify-between">
          <Button
            variant="blue"
            onClick={onHandleBack}
            disabled={isSubmiting}
            className="px-6 text-white rounded-md"
          >
            {t("startup-form-previous-button")}
          </Button>
          <Button
            variant="blue"
            disabled={isSubmiting}
            className="px-6 text-white rounded-md"
          >
            {t("startup-form-finish-button")}
          </Button>
        </div>
      )}
    </form>
  );
}
