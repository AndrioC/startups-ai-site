import { createContext, useContext, useState } from "react";

export interface FormInvestorData {
  fullNameSignUp: string;
  emailSignUp: string;
  passwordSignUp: string;
  confirmPasswordSignUp: string;
  investorName: string;
  investorFoundationDate: Date;
  investorCountry: string;
  investorStateAndCity: string;
  investorContactName: string;
  investorContactEmail: string;
  investorContactNumber: string;
  investorWebSite: string;
  investorLinkedin: string;

  investimentStages: string[];
  technologiesOfInterest: string[];
  businessModelOfInterest: string[];
  operationalStageOfInterest: string[];
  minimalInvestment: string;
  averageInvestiment: string;
  maximumInvestiment: string;
  preRequisiteTeam: string;
  onlyInvestingStartupOriginCountry: string;
  loadInvestorLogo: File;
  miniDescription: string;
  investimentText: string;
  exampleInvestedStartups: string;
  isPatentRequired: string;
  inCaseOfDeepTech: string;

  mainCriteriaEvaluatingStartup: string;
  addedValuesToStartups: string;
  expectationsInvestimentReturn: string;
  openToCoInvestWithOtherFunds: string;
  haveInternationalExperienceWithStartups: string;
}
interface FormInvestorContext {
  handleNext: () => void;
  handleBack: () => void;
  //handleStepChange: (step: number) => void;
  step: number;
  formData: FormInvestorData;
  setFormData: React.Dispatch<React.SetStateAction<FormInvestorData>>;
  logoFile: string | undefined;
  setLogoFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const initialFormData: FormInvestorData = {
  fullNameSignUp: "",
  emailSignUp: "",
  passwordSignUp: "",
  confirmPasswordSignUp: "",
  investorName: "",
  investorFoundationDate: new Date(),
  investorCountry: "",
  investorStateAndCity: "",
  investorContactName: "",
  investorContactEmail: "",
  investorContactNumber: "",
  investorWebSite: "",
  investorLinkedin: "",

  investimentStages: [],
  technologiesOfInterest: [],
  businessModelOfInterest: [],
  operationalStageOfInterest: [],
  minimalInvestment: "",
  averageInvestiment: "",
  maximumInvestiment: "",
  preRequisiteTeam: "",
  onlyInvestingStartupOriginCountry: "",
  loadInvestorLogo: new File([], ""),
  miniDescription: "",
  investimentText: "",
  exampleInvestedStartups: "",
  isPatentRequired: "",
  inCaseOfDeepTech: "",

  mainCriteriaEvaluatingStartup: "",
  addedValuesToStartups: "",
  expectationsInvestimentReturn: "",
  openToCoInvestWithOtherFunds: "",
  haveInternationalExperienceWithStartups: "",
};

const FormInvestorContext = createContext<FormInvestorContext>({
  handleBack: () => {},
  handleNext: () => {},
  step: 0,
  formData: initialFormData,
  setFormData: () => {},
  logoFile: "",
  setLogoFile: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function FormInvestorProvider({ children }: Props) {
  const [step, setStep] = useState(0);
  const [logoFile, setLogoFile] = useState<string | undefined>("");
  const [formData, setFormData] = useState<FormInvestorData>(initialFormData);

  function handleNext() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleBack() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <FormInvestorContext.Provider
      value={{
        handleBack,
        handleNext,
        step,
        formData,
        setFormData,
        logoFile,
        setLogoFile,
      }}
    >
      {children}
    </FormInvestorContext.Provider>
  );
}

export function useFormInvestorState() {
  return useContext(FormInvestorContext);
}
