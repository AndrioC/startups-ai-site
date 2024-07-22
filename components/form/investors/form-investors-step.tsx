import { SelectDataProps } from "@/app/(site)/[lang]/__oldform__/investors/page";
import DataAboutGeneralData from "@/components/form/investors/data-about-general-data";
import DataAboutManagement from "@/components/form/investors/data-about-management";
import DataAboutMatchingMaking from "@/components/form/investors/data-about-matchmaking";
import DataInvestorsSignUpUser from "@/components/form/investors/data-investors-sign-up-user";
import FinishedInvestorsForm from "@/components/form/investors/finished-investors-form";
import FormInvestorsAboutTheProgram from "@/components/form/investors/form-investors-about-the-program";
import { useFormInvestorState } from "@/contexts/FormInvestorContext";

interface Props {
  data: SelectDataProps;
}

export default function FormInvestorsStep({ data }: Props) {
  const { step } = useFormInvestorState();

  switch (step) {
    case 0:
      return <FormInvestorsAboutTheProgram />;
    case 1:
      return <DataInvestorsSignUpUser />;
    case 2:
      return <DataAboutGeneralData data={data} />;
    case 3:
      return <DataAboutManagement data={data} />;
    case 4:
      return <DataAboutMatchingMaking />;
    case 5:
      return <FinishedInvestorsForm />;
    default:
      return null;
  }
}
