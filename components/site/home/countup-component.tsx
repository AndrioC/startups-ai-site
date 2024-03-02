"use client";

import { useTranslations } from "next-intl";

import globeImage from "@/assets/img/globe-image.svg";
import expertImage from "@/assets/img/plans-expert-image.svg";
import startupImage from "@/assets/img/plans-rocket-image.svg";

import CountUpNumbers from "./countup-numbers";

interface Props {
  startupsQuantity: number;
  expertsQuantity: number;
  countriesQuantity: number;
}

export default function CountUpComponent({
  startupsQuantity,
  expertsQuantity,
  countriesQuantity,
}: Props) {
  const t = useTranslations("Home");

  return (
    <div className="container grid sm:grid-cols-1 md:grid-cols-3 w-[300px] md:w-[500px] gap-y-3 place-items-center">
      <CountUpNumbers
        title={t("countup-startup-title")}
        img={startupImage}
        value={startupsQuantity}
      />
      <CountUpNumbers
        title={t("countup-experts-title")}
        img={expertImage}
        value={expertsQuantity}
      />
      <CountUpNumbers
        title={t("countup-country-title")}
        img={globeImage}
        value={countriesQuantity}
      />
    </div>
  );
}
