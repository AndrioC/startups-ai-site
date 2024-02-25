"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import finishedFormBadge from "@/assets/img/finished-form-badge.svg";

export default function FinishedExpertsForm() {
  const t = useTranslations("Form");

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <Image
        src={finishedFormBadge}
        alt="experts-form.finished-form-badge"
        priority
        width={400}
        height={400}
      />
      <h1 className="text-3xl font-semibold mb-4">
        {t("experts-form.finished-form-congrats-text")}
      </h1>
      <p className="text-center mb-4">
        {t("experts-form.finished-form-text-first-part")}
      </p>
      <p className="text-center mb-4">
        {t("experts-form.finished-form-text-second-part")}
      </p>
      <p className="text-center">
        {t("experts-form.finished-form-text-third-part")}
      </p>
    </div>
  );
}
