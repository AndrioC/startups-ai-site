import { createContext, useContext, useState } from "react";

export interface FormData {
  fullNameSignUp: string;
  emailSignUp: string;
  passwordSignUp: string;
  confirmPasswordSignUp: string;
  startupName: string;
  vertical: string;
  foundationDate: Date;
  subscriptionNumber: string;
  referenceLink: string;
  country: string;
  stateAndCity: string;
  mainResponsibleName: string;
  mainResponsibleLinkedin: string;
  contactNumber: string;
  mainResponsibleEmail: string;
  startupObjectives: string[];
  connectionsOnlyOnStartupCountryOrigin: string;
  partnersQuantity: number;
  partnersPositionRelation: string;
  exclusiveDedicationPartner: string;
  employeesQuantity: string;
  fullTimeEmployeesQuantity: number;
  businessModel: string;
  operationalStage: string;
  startupChallenges: string[];
  isDeepTech: string;
  loadPitchDeck: File;
  loadLogo: File;
  shortDescription: string;
  valueProposal: string;
  maturityLevel?: string;
  hasPatent?: string;
  patentAndCode?: string;
  startupProductService: string[];
  problemThatIsSolved: string;
  competitors: string;
  competitiveDifferentiator: string;
  quantityOdsGoals: string;
  partnersHaveAlreadyBeenInOtherBusiness: string;
  parnertsHaveComplementaryAreaOfActivity: string;
  oneOrMoreDedicationPartner: string;
  oneOrMorePartnersHasProvenExperience: string;
  isStartupOfficiallyRegistered: string;
  isTherePartnersAgreementSigned: string;
  haveLegalAdvice: string;
  haveAccountingConsultancy: string;
  relationshipsRegisteredInContract: string;
  customersQuantity: string;
  lastRevenue: string;
  lastSixMonthsRevenue: string;
  lastTwelveMonthsRevenue: string;
  alreadyRaisedInvestment: string;
  amountRaised: number;
  howMuchEquityWasDistributed: string;
}
interface FormContext {
  handleNext: () => void;
  handleBack: () => void;
  //handleStepChange: (step: number) => void;
  step: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  pitchDeckFile: string | undefined;
  setPitchDeckFile: React.Dispatch<React.SetStateAction<string | undefined>>;
  logoFile: string | undefined;
  setLogoFile: React.Dispatch<React.SetStateAction<string | undefined>>;
  //updateFormData: (data: Partial<FormData>) => void;
}

export const initialFormData: FormData = {
  fullNameSignUp: "",
  emailSignUp: "",
  passwordSignUp: "",
  confirmPasswordSignUp: "",
  startupName: "",
  vertical: "",
  foundationDate: new Date(),
  subscriptionNumber: "",
  referenceLink: "",
  country: "",
  stateAndCity: "",
  mainResponsibleName: "",
  mainResponsibleLinkedin: "",
  contactNumber: "",
  mainResponsibleEmail: "",
  startupObjectives: [],
  connectionsOnlyOnStartupCountryOrigin: "",
  partnersQuantity: 0,
  partnersPositionRelation: "",
  exclusiveDedicationPartner: "",
  employeesQuantity: "",
  fullTimeEmployeesQuantity: 0,
  businessModel: "",
  operationalStage: "",
  startupChallenges: [],
  isDeepTech: "",
  loadPitchDeck: new File([], ""),
  loadLogo: new File([], ""),
  shortDescription: "",
  valueProposal: "",
  maturityLevel: undefined,
  hasPatent: undefined,
  patentAndCode: undefined,
  startupProductService: [],
  problemThatIsSolved: "",
  competitors: "",
  competitiveDifferentiator: "",
  quantityOdsGoals: "",
  partnersHaveAlreadyBeenInOtherBusiness: "",
  parnertsHaveComplementaryAreaOfActivity: "",
  oneOrMoreDedicationPartner: "",
  oneOrMorePartnersHasProvenExperience: "",
  isStartupOfficiallyRegistered: "",
  isTherePartnersAgreementSigned: "",
  haveLegalAdvice: "",
  haveAccountingConsultancy: "",
  relationshipsRegisteredInContract: "",
  customersQuantity: "",
  lastRevenue: "",
  lastSixMonthsRevenue: "",
  lastTwelveMonthsRevenue: "",
  alreadyRaisedInvestment: "",
  amountRaised: 0,
  howMuchEquityWasDistributed: "",
};

const FormContext = createContext<FormContext>({
  handleBack: () => {},
  handleNext: () => {},
  //handleStepChange: () => {},
  step: 0,
  formData: initialFormData,
  setFormData: () => {},
  pitchDeckFile: "",
  setPitchDeckFile: () => {},
  logoFile: "",
  setLogoFile: () => {},
  //updateFormData: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function FormProvider({ children }: Props) {
  const [step, setStep] = useState(0);
  const [pitchDeckFile, setPitchDeckFile] = useState<string | undefined>("");
  const [logoFile, setLogoFile] = useState<string | undefined>("");
  const [formData, setFormData] = useState<FormData>(initialFormData);

  function handleNext() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleBack() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <FormContext.Provider
      value={{
        handleBack,
        handleNext,
        step,
        formData,
        setFormData,
        pitchDeckFile,
        setPitchDeckFile,
        logoFile,
        setLogoFile,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
