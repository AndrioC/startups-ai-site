import { createContext, useContext, useState } from "react";

export interface FormExpertData {
  fullNameSignUp: string;
  emailSignUp: string;
  passwordSignUp: string;
  confirmPasswordSignUp: string;
  expertName: string;
  expertGender: string;
  expertDob: Date;
  expertCountry: string;
  expertCityState: string;
  expertLinkedin: string;
  expertContactNumber: string;
  expertContactEmail: string;
  expertLevelOfEducation: string;
  expertPictureImage: File;

  occupation: string;
  company: string;
  positionHeld: string;
  experienceTime: string;

  experienceWithStartups: string;
  languages: string[];
  participationAccelerationProgram: string;
  expertiseAreas: string[];
  verticalsConsultancy: string[];
}
interface FormExpertContext {
  handleNext: () => void;
  handleBack: () => void;
  step: number;
  formData: FormExpertData;
  setFormData: React.Dispatch<React.SetStateAction<FormExpertData>>;
  pictureImage: string | undefined;
  setPictureImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const initialFormData: FormExpertData = {
  fullNameSignUp: "",
  emailSignUp: "",
  passwordSignUp: "",
  confirmPasswordSignUp: "",
  expertName: "",
  expertGender: "",
  expertDob: new Date(),
  expertCountry: "",
  expertCityState: "",
  expertLinkedin: "",
  expertContactNumber: "",
  expertContactEmail: "",
  expertLevelOfEducation: "",
  expertPictureImage: new File([], ""),

  occupation: "",
  company: "",
  positionHeld: "",
  experienceTime: "",

  experienceWithStartups: "",
  languages: [],
  participationAccelerationProgram: "",
  expertiseAreas: [],
  verticalsConsultancy: [],
};

const FormExpertContext = createContext<FormExpertContext>({
  handleBack: () => {},
  handleNext: () => {},
  step: 0,
  formData: initialFormData,
  setFormData: () => {},
  pictureImage: "",
  setPictureImage: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function FormExpertProvider({ children }: Props) {
  const [step, setStep] = useState(0);
  const [pictureImage, setPictureImage] = useState<string | undefined>("");
  const [formData, setFormData] = useState<FormExpertData>(initialFormData);

  function handleNext() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleBack() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <FormExpertContext.Provider
      value={{
        handleBack,
        handleNext,
        step,
        formData,
        setFormData,
        pictureImage,
        setPictureImage,
      }}
    >
      {children}
    </FormExpertContext.Provider>
  );
}

export function useFormExpertState() {
  return useContext(FormExpertContext);
}
