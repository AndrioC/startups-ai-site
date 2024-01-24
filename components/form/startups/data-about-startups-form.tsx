"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useFormState } from "@/contexts/FormContext";
import { DataAbourStartupsSchema } from "@/lib/schema";

type Inputs = z.infer<typeof DataAbourStartupsSchema>;

export default function DataAboutStartupsForm() {
  const { handleNext, setFormData, formData } = useFormState();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: formData,
    resolver: zodResolver(DataAbourStartupsSchema),
  });

  function onHandleFormSubmit(data: Inputs) {
    console.log(data);
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="startupName">Startup Name</label>
        <input
          id="startupName"
          type="text"
          placeholder="Startup name"
          className="h-11 px-4 border rounded-md"
          {...register("startupName")}
        />
        {errors.startupName?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.startupName.message}
          </p>
        )}
      </div>
      <div className="flex justify-end">
        <button className="h-11 px-6 bg-black text-white rounded-md">
          Next
        </button>
      </div>
    </form>
  );
}
