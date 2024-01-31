"use client";

import { useFormState } from "@/contexts/FormContext";

export default function HeaderSteps() {
  const { step } = useFormState();

  const steps = ["Step 1", "Step 2", "Step 4", "Step 5", "Step 6", "Step 7"];

  if (step === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center w-[350px] lg:w-[720px] h-[70px] bg-gray-100">
      {steps.map((_label, index) => (
        <div
          key={index + 1}
          className={`w-7 h-7 lg:w-10 text-sm lg:text-base lg:h-10 rounded-full flex items-center justify-center mx-2 
          ${index + 1 < step ? "bg-blue-400 text-white" : ""} 
          ${index + 1 === step ? "bg-blue-900 text-white" : ""}
          ${index + 1 > step ? "bg-white text-black" : ""}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
