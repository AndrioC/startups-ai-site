"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import { serviceProductsList } from "@/app/(site)/data";
import { useFormState } from "@/contexts/FormContext";
import { DataServiceProductSchema } from "@/lib/schema";

export default function DataServiceProduct() {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataServiceProductSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: formData,
    resolver: zodResolver(formSchema),
  });

  const serviceProductData = serviceProductsList.map((value) => ({
    ...value,
    label: lang === "en" ? value.label_en : value.label_pt,
  }));

  const sortedServiceProduct = serviceProductData.slice().sort((a, b) => {
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
    console.log(data);
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }

  function onHandleBack(data: z.infer<typeof formSchema>) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleBack();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="text-xl font-semibold uppercase">
        {t("startup-form-data-service-product.title")}
      </h1>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="startupProductService"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-service-product.question-28")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedServiceProduct.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`option-${option.id}`}
              value={option.value}
              className="w-[15px] h-[15px]"
              {...register("startupProductService")}
            />
            <label htmlFor={`option-${option.id}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
        {errors.startupProductService?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.startupProductService.message}
          </p>
        )}
        <label htmlFor="problemThatIsSolved" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-data-service-product.question-29")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
          </div>
        </label>
        <textarea
          id="problemThatIsSolved"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("problemThatIsSolved")}
        />
        {errors.problemThatIsSolved?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.problemThatIsSolved.message}
          </p>
        )}
        <label htmlFor="competitors" className="flex items-center mt-5">
          <span>{t("startup-form-data-service-product.question-30")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="competitors"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("competitors")}
        />
        {errors.competitors?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.competitors.message}
          </p>
        )}

        <label
          htmlFor="competitiveDifferentiator"
          className="flex items-center mt-5"
        >
          <span>{t("startup-form-data-service-product.question-31")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="competitiveDifferentiator"
          rows={4}
          className="px-4 border rounded-md resize-none h-[120px]"
          {...register("competitiveDifferentiator")}
        />
        {errors.competitiveDifferentiator?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.competitiveDifferentiator.message}
          </p>
        )}
        <label htmlFor="quantityOdsGoals" className="flex items-center mt-5">
          <span>{t("startup-form-data-service-product.question-32")}</span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="quantityOdsGoals"
          type="number"
          className="h-11 px-4 border rounded-md"
          {...register("quantityOdsGoals")}
        />
        {errors.quantityOdsGoals?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.quantityOdsGoals.message}
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          className="h-11 px-6 bg-black text-white rounded-md"
          onClick={handleSubmit(onHandleBack)}
        >
          {t("startup-form-previous-button")}
        </button>
        <button className="h-11 px-6 bg-black text-white rounded-md">
          {t("startup-form-next-button")}
        </button>
      </div>
    </form>
  );
}
