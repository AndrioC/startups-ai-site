import DataAboutFinanceAndMarketPage from "@/components/form/startups/data-about-finance-and-market";
import DataAboutGovernancePage from "@/components/form/startups/data-about-governance";
import DataAboutStartupsForm from "@/components/form/startups/data-about-startups-form";
import DataAboutTeam from "@/components/form/startups/data-about-team";
import DataFinal from "@/components/form/startups/data-final";
import DataMaturationLevelDeepTechForm from "@/components/form/startups/data-maturation-level-deep-tech";
import DataServiceProduct from "@/components/form/startups/data-service-product";
import DataSignUpUser from "@/components/form/startups/data-sign-up-user";
import FormAboutTheProgram from "@/components/form/startups/form-about-the-program";
import { useFormState } from "@/contexts/FormContext";

export default function FormStep() {
  const { step } = useFormState();

  switch (step) {
    case 0:
      return <FormAboutTheProgram />;
    case 1:
      return <DataSignUpUser />;
    case 2:
      return <DataAboutStartupsForm />;
    case 3:
      return <DataMaturationLevelDeepTechForm />;
    case 4:
      return <DataServiceProduct />;
    case 5:
      return <DataAboutTeam />;
    case 6:
      return <DataAboutGovernancePage />;
    case 7:
      return <DataAboutFinanceAndMarketPage />;
    case 8:
      return <DataFinal />;
    default:
      return null;
  }
}
