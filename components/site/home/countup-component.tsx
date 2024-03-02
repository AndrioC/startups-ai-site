import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";

import { InitialCardValues } from "@/app/api/initial-card-values/route";
import globeImage from "@/assets/img/globe-image.svg";
import expertImage from "@/assets/img/plans-expert-image.svg";
import startupImage from "@/assets/img/plans-rocket-image.svg";

import CountUpNumbers from "./countup-numbers";

interface Props {
  data?: InitialCardValues;
}

export default function CountUpComponent({ data }: Props) {
  const t = useTranslations("Home");
  const lang = useLocale();

  const { data: initialCardValuesData } = useInitialCardValues(lang);

  return (
    <div className="container grid sm:grid-cols-1 md:grid-cols-3 w-[300px] md:w-[500px] gap-y-3 place-items-center">
      <CountUpNumbers
        title={t("countup-startup-title")}
        img={startupImage}
        value={initialCardValuesData?.startups_quantity!}
      />
      <CountUpNumbers
        title={t("countup-experts-title")}
        img={expertImage}
        value={initialCardValuesData?.experts_quantity!}
      />
      <CountUpNumbers
        title={t("countup-country-title")}
        img={globeImage}
        value={initialCardValuesData?.countries_quantity!}
      />
    </div>
  );
}

const useInitialCardValues = (lang: string) =>
  useQuery<InitialCardValues>({
    queryKey: ["initial-card-data", lang],
    queryFn: () =>
      axios.get("/api/initial-card-values").then((res) => {
        return res.data;
      }),
  });
