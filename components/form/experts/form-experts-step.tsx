import { SelectDataProps } from "@/app/(site)/[lang]/form/experts/page";
import DataAboutPersonalData from "@/components/form/experts/data-about-personal-data";
import DataAboutProfessionalData from "@/components/form/experts/data-about-professional-data";
import DataAboutStartupConsultancy from "@/components/form/experts/data-about-startup-consultancy";
import DataExpertsSignUpUser from "@/components/form/experts/data-investors-sign-up-user";
import FinishedExpertsForm from "@/components/form/experts/finished-experts-form";
import FormExpertsAboutTheProgram from "@/components/form/experts/form-experts-about-the-program";
import { useFormExpertState } from "@/contexts/FormExpertContext";

interface Props {
  data: SelectDataProps;
}

export default function FormExpertsStep({ data }: Props) {
  const { step } = useFormExpertState();

  switch (step) {
    case 0:
      return <FormExpertsAboutTheProgram />;
    case 1:
      return <DataExpertsSignUpUser />;
    case 2:
      return <DataAboutPersonalData data={data} />;
    case 3:
      return <DataAboutProfessionalData data={data} />;
    case 4:
      return <DataAboutStartupConsultancy data={data} />;
    case 5:
      return <FinishedExpertsForm />;
    default:
      return null;
  }
}
