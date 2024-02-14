"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "sonner";

import { SelectDataProps } from "@/app/(site)/[lang]/form/startups/page";
import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";

import DataAboutFinanceAndMarketPage from "./data-about-finance-and-market";
import DataAboutGovernancePage from "./data-about-governance";
import DataAboutStartupsForm from "./data-about-startups-form";
import DataAboutTeamPage from "./data-about-team";
import DataMaturationLevelDeepTech from "./data-maturation-level-deep-tech";
import DataServiceProduct from "./data-service-product";
import DataSignUpUser from "./data-sign-up-user";

interface Props {
  data: SelectDataProps;
}

export default function DataReview({ data }: Props) {
  const t = useTranslations("Form");
  const { handleNext, handleBack, formData } = useFormState();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const lang = useLocale();

  const {
    formState: { errors },
  } = useForm();

  const message = lang === "en" ? "Review and Submit" : "Revisar e enviar";

  function onHandleBack() {
    handleBack();
  }

  async function onHandleFormSubmit() {
    const sendFormData = new FormData();

    sendFormData.append("file-logo", formData.loadLogo!);
    sendFormData.append("file-pitch", formData.loadPitchDeck!);
    sendFormData.append("data", JSON.stringify(formData));
    try {
      setIsSubmiting(true);
      const response = await axios.post("/api/startups-form", sendFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === 201) {
        setIsSubmiting(false);
        //handleNext();
        return;
      }
    } catch (error) {
      console.log(error);
      toast(t("error-when-finished-form"));
    }
    setIsSubmiting(false);
  }
  return (
    <div className="flex flex-col items-center justify-center bg-red-300">
      <h1 className="text-sm lg:text-xl font-semibold uppercase mb-10">
        {message}
      </h1>
      <div className="flex flex-col mb-10 bg-green-200 gap-5">
        <DataSignUpUser is_review={true} />
        <DataAboutStartupsForm is_review={true} data={data} />
        <DataMaturationLevelDeepTech is_review={true} data={data} />
        <DataServiceProduct is_review={true} data={data} />
        <DataAboutTeamPage is_review={true} />
        <DataAboutGovernancePage is_review={true} />
        <DataAboutFinanceAndMarketPage is_review={true} />
      </div>
      <div className="flex justify-between w-full">
        <Button
          variant="blue"
          onClick={() => onHandleBack()}
          className="px-6 text-white rounded-md"
        >
          {t("startup-form-previous-button")}
        </Button>
        <Button
          variant="blue"
          className="px-6 text-white rounded-md"
          onClick={onHandleFormSubmit}
          disabled={isSubmiting}
        >
          {t("startup-form-finish-button")}
        </Button>
      </div>
    </div>
  );
}
