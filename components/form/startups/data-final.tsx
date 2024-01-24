"use client";

import { useFormState } from "@/contexts/FormContext";

export default function DataFinal() {
  const { formData } = useFormState();

  return (
    <div>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  );
}
