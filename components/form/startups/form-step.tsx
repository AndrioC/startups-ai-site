import { SelectDataProps } from "@/app/(site)/[lang]/form/startups/page";
import DataAboutFinanceAndMarketPage from "@/components/form/startups/data-about-finance-and-market";
import DataAboutGovernancePage from "@/components/form/startups/data-about-governance";
import DataAboutStartupsForm from "@/components/form/startups/data-about-startups-form";
import DataAboutTeam from "@/components/form/startups/data-about-team";
import DataMaturationLevelDeepTechForm from "@/components/form/startups/data-maturation-level-deep-tech";
import DataReview from "@/components/form/startups/data-review";
import DataServiceProduct from "@/components/form/startups/data-service-product";
import DataSignUpUser from "@/components/form/startups/data-sign-up-user";
import FormAboutTheProgram from "@/components/form/startups/form-about-the-program";
import { useFormState } from "@/contexts/FormContext";

import FinishedForm from "./finished-form";

interface Props {
  data: SelectDataProps;
}

export default function FormStep({ data }: Props) {
  const { step } = useFormState();

  switch (step) {
    case 0:
      return <FormAboutTheProgram />;
    case 1:
      return <DataSignUpUser />;
    case 2:
      return <DataAboutStartupsForm data={data} />;
    case 3:
      return <DataMaturationLevelDeepTechForm data={data} />;
    case 4:
      return <DataServiceProduct data={data} />;
    case 5:
      return <DataAboutTeam />;
    case 6:
      return <DataAboutGovernancePage />;
    case 7:
      return <DataAboutFinanceAndMarketPage />;
    // case 8:
    //   return <DataReview data={data} />;
    case 8:
      return <FinishedForm />;
    default:
      return null;
  }
}
