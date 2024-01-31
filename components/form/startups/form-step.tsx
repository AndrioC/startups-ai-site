import { useFormState } from "@/contexts/FormContext";

import DataAboutFinanceAndMarketPage from "./data-about-finance-and-market";
import DataAboutGovernancePage from "./data-about-governance";
import DataAboutStartupsForm from "./data-about-startups-form";
import DataAboutTeam from "./data-about-team";
import DataFinal from "./data-final";
import DataMaturationLevelDeepTechForm from "./data-maturation-level-deep-tech";
import DataServiceProduct from "./data-service-product";
import FormAboutTheProgram from "./form-about-the-program";

export default function FormStep() {
  const { step } = useFormState();

  switch (step) {
    case 0:
      return <FormAboutTheProgram />;
    case 1:
      return <DataAboutStartupsForm />;
    case 2:
      return <DataMaturationLevelDeepTechForm />;
    case 3:
      return <DataServiceProduct />;
    case 4:
      return <DataAboutTeam />;
    case 5:
      return <DataAboutGovernancePage />;
    case 6:
      return <DataAboutFinanceAndMarketPage />;
    case 7:
      return <DataFinal />;
    default:
      return null;
  }
}
