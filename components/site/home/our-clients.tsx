"use client";

import { useTranslations } from "next-intl";

import ClientLogos from "./client-logos";
import Container from "./container";

export default function OurClients() {
  const t = useTranslations("Home");

  return (
    <section id="OurClients" className="py-20 sm:py-32 lg:pb-5 xl:pb-5">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center">
          <div className="flex gap-2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              {t("our-clients-title-first")}
            </h2>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold"
              style={{ color: "#2594EA" }}
            >
              {t("our-clients-title-second")}
            </h2>
          </div>
          <ClientLogos />
        </div>
      </Container>
    </section>
  );
}
