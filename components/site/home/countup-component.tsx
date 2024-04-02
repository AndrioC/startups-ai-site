"use client";

import { useTranslations } from "next-intl";

import globeImage from "@/assets/img/globe-image.svg";
import matchesImage from "@/assets/img/matches-count.svg";
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
    <div className="container grid sm:grid-cols-2 md:grid-cols-4 w-[200px] md:w-[650px] gap-y-4 place-items-center">
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
      <CountUpNumbers
        title={t("countup-matches-title")}
        img={matchesImage}
        value={startupsQuantity - 68}
      />
    </div>
  );
}
