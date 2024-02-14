import { createContext, useContext, useState } from "react";

export interface FormData {
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
  employeesQuantity: number;
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
  quantityOdsGoals: number;
  partnersHaveAlreadyBeenInOtherBusiness: string;
  parnertsHaveComplementaryAreaOfActivity: string;
  oneOrMoreDedicationPartner: string;
  oneOrMorePartnersHasProvenExperience: string;
  isStartupOfficiallyRegistered: string;
  isTherePartnersAgreementSigned: string;
  haveLegalAdvice: string;
  haveAccountingConsultancy: string;
  relationshipsRegisteredInContract: string;
  customersQuantity: number;
  lastRevenue: number;
  lastSixMonthsRevenue: number;
  lastTwelveMonthsRevenue: number;
  alreadyRaisedInvestment: string;
  amountRaised: number;
  howMuchEquityWasDistributed: string;
  fullNameSignUp: string;
  emailSignUp: string;
  passwordSignUp: string;
  confirmPasswordSignUp: string;
}
interface FormContext {
  handleNext: () => void;
  handleBack: () => void;
  //handleStepChange: (step: number) => void;
  step: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  //updateFormData: (data: Partial<FormData>) => void;
}

export const initialFormData: FormData = {
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
  employeesQuantity: 0,
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
  quantityOdsGoals: 0,
  partnersHaveAlreadyBeenInOtherBusiness: "",
  parnertsHaveComplementaryAreaOfActivity: "",
  oneOrMoreDedicationPartner: "",
  oneOrMorePartnersHasProvenExperience: "",
  isStartupOfficiallyRegistered: "",
  isTherePartnersAgreementSigned: "",
  haveLegalAdvice: "",
  haveAccountingConsultancy: "",
  relationshipsRegisteredInContract: "",
  customersQuantity: 0,
  lastRevenue: 0,
  lastSixMonthsRevenue: 0,
  lastTwelveMonthsRevenue: 0,
  alreadyRaisedInvestment: "",
  amountRaised: 0,
  howMuchEquityWasDistributed: "",
  fullNameSignUp: "",
  emailSignUp: "",
  passwordSignUp: "",
  confirmPasswordSignUp: "",
};

const FormContext = createContext<FormContext>({
  handleBack: () => {},
  handleNext: () => {},
  //handleStepChange: () => {},
  step: 0,
  formData: initialFormData,
  setFormData: () => {},
  //updateFormData: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function FormProvider({ children }: Props) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  function handleNext() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleBack() {
    setStep((prevStep) => prevStep - 1);
  }

  // function handleStepChange(step: number) {
  //   setStep(step);
  // }

  // function updateFormData(data: Partial<FormData>) {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     ...data,
  //   }));
  // }

  return (
    <FormContext.Provider
      value={{
        handleBack,
        handleNext,
        step,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
