"use client";

import { useFormState } from "@/contexts/FormContext";

export default function HeaderSteps() {
  const { step } = useFormState();

  const steps = ["Step 1", "Step 2", "Step 4", "Step 5", "Step 6", "Step 7"];

  if (step === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center w-[720px] bg-gray-100 h-[100px]">
      {steps.map((_label, index) => (
        <div
          key={index + 1}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor:
              index + 1 < step
                ? "#4890d7"
                : index + 1 === step
                  ? "#0a61a0"
                  : "white",
            color:
              index + 1 < step
                ? "white"
                : index + 1 === step
                  ? "white"
                  : "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
          }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
