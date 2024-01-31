"use client";

import { useLocale } from "next-intl";

import { useFormState } from "@/contexts/FormContext";

export default function DataFinal() {
  const { formData } = useFormState();

  const lang = useLocale();

  const message = lang === "en" ? "Form finished!" : "Formulário finalizado";
  return (
    <div className="flex items-center justify-center">
      <h1>{message}</h1>
    </div>
  );
}
