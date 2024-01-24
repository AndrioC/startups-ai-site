import { useFormState } from "@/contexts/FormContext";

import DataAboutStartupsForm from "./data-about-startups-form";
import DataFinal from "./data-final";
import DataMaturationLevelDeepTechForm from "./data-maturation-level-deep-tech";

export default function FormStep() {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <DataAboutStartupsForm />;
    case 2:
      return <DataMaturationLevelDeepTechForm />;
    case 3:
      return <DataFinal />;
    default:
      return null;
  }
}
