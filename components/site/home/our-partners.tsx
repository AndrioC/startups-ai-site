import { useTranslations } from "next-intl";

import Container from "./container";
import ExtraLogos from "./extra-logos";

export default function OurPartners() {
  const t = useTranslations("Home");

  return (
    <section id="OurPartners" className="py-20 sm:py-32 lg:pb-5 xl:pb-5">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#2594EA" }}
          >
            {t("our-partners-title")}
          </h2>
          <ExtraLogos />
        </div>
      </Container>
    </section>
  );
}
