"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";
import { DataAboutGovernance } from "@/lib/schema";

export default function DataAboutGovernancePage() {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const t = useTranslations("Form");

  const formSchema = DataAboutGovernance(t);

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
        {t("startup-form-data-governance.title")}
      </h1>
      <p className="text-gray-500 font-light text-xs lg:text-sm">
        {t("startup-form-data-governance.explain-text-first-part")}
      </p>
      <p className="text-gray-500 font-light text-xs lg:text-sm">
        {t("startup-form-data-governance.explain-text-second-part")}
      </p>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label
          htmlFor="isStartupOfficiallyRegistered"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-governance.question-37")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="isStartupOfficiallyRegistered"
          {...register("isStartupOfficiallyRegistered")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.isStartupOfficiallyRegistered?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.isStartupOfficiallyRegistered.message}
          </p>
        )}
        <label
          htmlFor="isTherePartnersAgreementSigned"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-governance.question-38")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="flex flex-col gap-5 mb-3">
          <p className="text-gray-500 font-light text-sm">
            {t("startup-form-data-governance.question-38-text-first-part")}
          </p>
          <p className="text-gray-500 font-light text-sm">
            {t("startup-form-data-governance.question-38-text-second-part")}
          </p>
          <p className="text-gray-500 font-light text-sm">
            {t("startup-form-data-governance.question-38-text-third-part")}
          </p>
        </div>
        <select
          id="isTherePartnersAgreementSigned"
          {...register("isTherePartnersAgreementSigned")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
          <option value="maybe">{t("startup-form-question-maybe-text")}</option>
        </select>
        {errors.isTherePartnersAgreementSigned?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.isTherePartnersAgreementSigned.message}
          </p>
        )}
        <label htmlFor="haveLegalAdvice" className="flex items-center mt-5">
          <span>{t("startup-form-data-governance.question-39")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="haveLegalAdvice"
          {...register("haveLegalAdvice")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.haveLegalAdvice?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.haveLegalAdvice.message}
          </p>
        )}
        <label
          htmlFor="haveAccountingConsultancy"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-governance.question-40")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="haveAccountingConsultancy"
          {...register("haveAccountingConsultancy")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.haveAccountingConsultancy?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.haveAccountingConsultancy.message}
          </p>
        )}
        <label
          htmlFor="relationshipsRegisteredInContract"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-governance.question-41")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="relationshipsRegisteredInContract"
          {...register("relationshipsRegisteredInContract")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">{t("startup-form-question-select-text")}</option>
          <option value="yes">{t("startup-form-question-yes-text")}</option>
          <option value="no">{t("startup-form-question-no-text")}</option>
        </select>
        {errors.relationshipsRegisteredInContract?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.relationshipsRegisteredInContract.message}
          </p>
        )}
      </div>
      <div className="flex justify-between">
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
