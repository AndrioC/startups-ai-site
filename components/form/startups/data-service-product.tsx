"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";

import { SelectDataProps } from "@/app/(site)/[lang]/__oldform__/startups/page";
import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";
import { DataServiceProductSchema } from "@/lib/schema-startups";

interface ValueProps {
  id: number;
  label: string;
}

interface Props {
  is_review?: boolean;
  data: SelectDataProps;
}

export default function DataServiceProduct({ is_review = false, data }: Props) {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const t = useTranslations("Form");
  const lang = useLocale();

  const formSchema = DataServiceProductSchema(t);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: formData,
    resolver: zodResolver(formSchema),
  });

  const serviceProductData: ValueProps[] = data.service_products.map(
    (value) => ({
      ...value,
      label: lang === "en" ? value.name_en : value.name_pt,
    })
  );

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
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }

  function onHandleBack() {
    const currentFormData = watch();
    setFormData((prevFormData) => ({ ...prevFormData, ...currentFormData }));
    handleBack();
  }

  const sdgoals = [
    {
      id: 1,
      value: "none",
      label: t("startups-form.startup-form-sgd-option-one"),
    },
    {
      id: 2,
      value: "1 or more",
      label: t("startups-form.startup-form-sgd-option-two"),
    },
    {
      id: 3,
      value: "i don't know",
      label: t("startups-form.startup-form-sgd-option-three"),
    },
  ];

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="text-sm lg:text-xl font-semibold uppercase">
        {t("startups-form.startup-form-data-service-product.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label
          htmlFor="startupProductService"
          className="flex items-center mt-5"
        >
          <span>
            {t("startups-form.startup-form-data-service-product.question-30")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sortedServiceProduct.map((option: any) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`service-product-option-${option.id}`}
              value={option.id}
              className="w-[15px] h-[15px]"
              {...register("startupProductService")}
            />
            <label
              htmlFor={`service-product-option-${option.id}`}
              className="ml-2"
            >
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
              <span>
                {t(
                  "startups-form.startup-form-data-service-product.question-31"
                )}
              </span>
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
          <span>
            {t("startups-form.startup-form-data-service-product.question-32")}
          </span>
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
          <span>
            {t("startups-form.startup-form-data-service-product.question-33")}
          </span>
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
          <span>
            {t("startups-form.startup-form-data-service-product.question-34")}
          </span>
          <span className="text-red-500 ml-1">*</span>
        </label>
        {sdgoals.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.value}
              value={item.value}
              {...register("quantityOdsGoals")}
            />
            <label htmlFor={item.value} className="ml-2">
              {item.label}
            </label>
          </div>
        ))}
        {errors.quantityOdsGoals?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.quantityOdsGoals.message}
          </p>
        )}
      </div>
      {!is_review && (
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
      )}
    </form>
  );
}
