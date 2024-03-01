"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useFormInvestorState } from "@/contexts/FormInvestorContext";
import { DataMatchMakingSchema } from "@/lib/schema-investors";

export default function DataAboutMatchingMaking() {
  const { handleNext, handleBack, setFormData, formData } =
    useFormInvestorState();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const t = useTranslations("Form");

  const formSchema = DataMatchMakingSchema(t);

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
    sendFormData.append("file-logo", formData.loadInvestorLogo!);
    sendFormData.append("data", JSON.stringify(currentFormData));
    try {
      setIsSubmiting(true);
      const response = await axios.post("/api/investors-form", sendFormData, {
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
      toast(t("startups-form.error-when-finished-form"));
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
      <p className="text-xs lg:text-sm mt-1 font-normal text-gray-600">
        {t("investors-form.investor-form-data-matchmaking.about")}
      </p>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label
          htmlFor="mainCriteriaEvaluatingStartup"
          className="flex items-center"
        >
          <span>
            {t("investors-form.investor-form-data-matchmaking.question-25")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="mainCriteriaEvaluatingStartup"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("mainCriteriaEvaluatingStartup")}
        />
        {errors.mainCriteriaEvaluatingStartup?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.mainCriteriaEvaluatingStartup.message}
          </p>
        )}
        <label htmlFor="addedValuesToStartups" className="flex items-center">
          <span>
            {t("investors-form.investor-form-data-matchmaking.question-26")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="addedValuesToStartups"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("addedValuesToStartups")}
        />
        {errors.addedValuesToStartups?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.addedValuesToStartups.message}
          </p>
        )}
        <label
          htmlFor="expectationsInvestimentReturn"
          className="flex items-center"
        >
          <span>
            {t("investors-form.investor-form-data-matchmaking.question-27")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="expectationsInvestimentReturn"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("expectationsInvestimentReturn")}
        />
        {errors.expectationsInvestimentReturn?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.expectationsInvestimentReturn.message}
          </p>
        )}
        <label
          htmlFor="openToCoInvestWithOtherFunds"
          className="flex items-center mt-5"
        >
          <span>
            {t("investors-form.investor-form-data-matchmaking.question-28")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="openToCoInvestWithOtherFunds"
          {...register("openToCoInvestWithOtherFunds")}
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
        {errors.openToCoInvestWithOtherFunds?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.openToCoInvestWithOtherFunds.message}
          </p>
        )}
        <label
          htmlFor="haveInternationalExperienceWithStartups"
          className="flex items-center mt-5"
        >
          <span>
            {t("investors-form.investor-form-data-matchmaking.question-29")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="haveInternationalExperienceWithStartups"
          {...register("haveInternationalExperienceWithStartups")}
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
        {errors.haveInternationalExperienceWithStartups?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.haveInternationalExperienceWithStartups.message}
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
          {t("investors-form.investor-form-previous-button")}
        </Button>
        <Button
          variant="blue"
          disabled={isSubmiting}
          className="px-6 text-white rounded-md"
        >
          {t("investors-form.investor-form-finish-button")}
        </Button>
      </div>
    </form>
  );
}
