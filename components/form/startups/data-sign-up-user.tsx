"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useFormState } from "@/contexts/FormContext";
import { DataSignUpSchema } from "@/lib/schema";

export default function DataSignUpUser() {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const [iconPassword, setIconPassword] = useState(<EyeOffIcon />);
  const [iconConfirmPassword, setIconConfirmPassword] = useState(
    <EyeOffIcon />
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const t = useTranslations("Form");

  const formSchema = DataSignUpSchema(t);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (!showPassword) {
      setIconPassword(<EyeIcon />);
    } else {
      setIconPassword(<EyeOffIcon />);
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
    if (!showConfirmPassword) {
      setIconConfirmPassword(<EyeIcon />);
    } else {
      setIconConfirmPassword(<EyeOffIcon />);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="text-sm lg:text-xl font-semibold uppercase">
        {t("startup-form-sign-up.title")}
      </h1>
      <div className="flex flex-col gap-1 text-xs lg:text-base">
        <label htmlFor="fullNameSignUp" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-sign-up.name-field")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
          </div>
        </label>
        <input
          id="fullNameSignUp"
          type="text"
          className="h-11 px-4 border rounded-md"
          {...register("fullNameSignUp")}
        />
        {errors.fullNameSignUp?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.fullNameSignUp.message}
          </p>
        )}

        <label htmlFor="emailSignUp" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-sign-up.email-field")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
          </div>
        </label>
        <input
          id="emailSignUp"
          type="email"
          className="h-11 px-4 border rounded-md"
          {...register("emailSignUp")}
        />
        {errors.emailSignUp?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.emailSignUp.message}
          </p>
        )}
        <label htmlFor="passwordSignUp" className="flex items-center mt-5">
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-sign-up.password-field")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
          </div>
        </label>
        <div className="relative w-full">
          <input
            id="passwordSignUp"
            type={showPassword ? "text" : "password"}
            className="h-11 px-4 border rounded-md w-full"
            {...register("passwordSignUp")}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
            }}
          >
            {iconPassword}
          </button>
        </div>
        {errors.passwordSignUp?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.passwordSignUp.message}
          </p>
        )}
        <label
          htmlFor="confirmPasswordSignUp"
          className="flex items-center mt-5"
        >
          <div className="flex flex-col">
            <div>
              <span>{t("startup-form-sign-up.confirm-password-field")}</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
          </div>
        </label>
        <div className="relative w-full">
          <input
            id="confirmPasswordSignUp"
            type={showConfirmPassword ? "text" : "password"}
            className="h-11 px-4 border rounded-md w-full"
            {...register("confirmPasswordSignUp")}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
            }}
          >
            {iconConfirmPassword}
          </button>
        </div>
        {errors.confirmPasswordSignUp?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.confirmPasswordSignUp.message}
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <Button
          variant="blue"
          onClick={() => onHandleBack()}
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
