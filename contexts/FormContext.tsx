import { createContext, useContext, useState } from "react";

interface FormData {
  startupName: string;
  patentsQuantity: number;
}
interface FormContext {
  handleNext: () => void;
  handleBack: () => void;
  step: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContext>({
  handleBack: () => {},
  handleNext: () => {},
  step: 1,
  formData: {
    startupName: "",
    patentsQuantity: 0,
  },
  setFormData: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function FormProvider({ children }: Props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    startupName: "",
    patentsQuantity: 0,
  });

  function handleNext() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleBack() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <FormContext.Provider
      value={{ handleBack, handleNext, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
