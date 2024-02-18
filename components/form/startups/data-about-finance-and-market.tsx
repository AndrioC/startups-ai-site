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

  const customersQuantityData = [
    {
      id: 1,
      value: "0 - 50",
      label: "0-50",
    },
    {
      id: 2,
      value: "50 - 100",
      label: "50-100",
    },
    {
      id: 3,
      value: "100 - 500",
      label: "100-500",
    },
    {
      id: 4,
      value: "500 & above",
      label: `500 ${t("startup-customers-quantity-option")}`,
    },
  ];

  const lastRevenueData = [
    {
      id: 1,
      value: "$0,00 - $20.000,00",
      label: "$0,00 - $20.000,00",
    },
    {
      id: 2,
      value: "$20.000,00 - $50.000,00",
      label: "$20.000,00 - $50.000,00",
    },
    {
      id: 3,
      value: "$50.000,00 - $100.000,00",
      label: "$50.000,00 - $100.000,00",
    },
    {
      id: 4,
      value: "$100.000,00 - $500.000,00",
      label: "$100.000,00 - $500.000,00",
    },
    {
      id: 5,
      value: `${t("startup-form-revenue-above-text")} $500.000,00`,
      label: `${t("startup-form-revenue-above-text")} $500.000,00`,
    },
  ];

  const lastSixRevenueData = [
    {
      id: 1,
      value: "$0,00 - $120.000,00",
      label: "$0,00 - $120.000,00",
    },
    {
      id: 2,
      value: "$120.000,00 - $300.000,00",
      label: "$120.000,00 - $300.000,00",
    },
    {
      id: 3,
      value: "$300.000,00 - $600.000,00",
      label: "$300.000,00 - $600.000,00",
    },
    {
      id: 4,
      value: "$600.000,00 - $3.000.000,00",
      label: "$600.000,00 - $3.000.000,00",
    },
    {
      id: 5,
      value: `${t("startup-form-revenue-above-text")} $3.000.000,00`,
      label: `${t("startup-form-revenue-above-text")} $3.000.000,00`,
    },
  ];

  const lastTwelveRevenueData = [
    {
      id: 1,
      value: "$0,00 - $720.000,00",
      label: "$0,00 - $720.000,00",
    },
    {
      id: 2,
      value: "$720.000,00 - $1.800.000,00",
      label: "$720.000,00 - $1.800.000,00",
    },
    {
      id: 3,
      value: "$1.800.000,00 - $3.600.000,00",
      label: "$1.800.000,00 - $3.600.000,00",
    },
    {
      id: 4,
      value: "$3.600.000,00 - $18.000.000,00",
      label: "$3.600.000,00 - $18.000.000,00",
    },
    {
      id: 5,
      value: `${t("startup-form-revenue-above-text")} $18.000.000,00`,
      label: `${t("startup-form-revenue-above-text")} $18.000.000,00`,
    },
  ];

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
        {customersQuantityData.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.value}
              value={item.value}
              {...register("customersQuantity")}
            />
            <label htmlFor={item.value} className="ml-2">
              {item.label}
            </label>
          </div>
        ))}
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
        {lastRevenueData.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.value}
              value={item.value}
              {...register("lastRevenue")}
            />
            <label htmlFor={item.value} className="ml-2">
              {item.label}
            </label>
          </div>
        ))}
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
        {lastSixRevenueData.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.value}
              value={item.value}
              {...register("lastSixMonthsRevenue")}
            />
            <label htmlFor={item.value} className="ml-2">
              {item.label}
            </label>
          </div>
        ))}
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
        {lastTwelveRevenueData.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.value}
              value={item.value}
              {...register("lastTwelveMonthsRevenue")}
            />
            <label htmlFor={item.value} className="ml-2">
              {item.label}
            </label>
          </div>
        ))}
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
