"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useFormState } from "@/contexts/FormContext";
import { DataMaturationLevelDeepTechSchema } from "@/lib/schema";

type Inputs = z.infer<typeof DataMaturationLevelDeepTechSchema>;

export default function DataMaturationLevelDeepTechForm() {
  const { handleBack, handleNext, setFormData, formData } = useFormState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: formData,
  });

  function onHandleFormSubmit(data: Inputs) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }

  function handlePreviousForm(data: Inputs) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleBack();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="patentsQuantity">Patents quantity</label>
        <input
          id="patentsQuantity"
          type="text"
          placeholder="Patents quantity"
          className="h-11 px-4 border rounded-md"
          {...register("patentsQuantity")}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="h-11 px-6 bg-black text-white rounded-md"
          onClick={handleSubmit(handlePreviousForm)}
        >
          Back
        </button>
        <button
          className="h-11 px-6 bg-black text-white rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </form>
  );
}
