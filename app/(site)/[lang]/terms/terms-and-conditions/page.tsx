import { useTranslations } from "next-intl";

import Container from "@/components/site/home/container";
import { Term } from "@/components/site/support/term";

export default function TermsAndConditionPage() {
  const t = useTranslations("Support");
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col items-center w-[300px] lg:w-[750px] text-gray-600">
            <h1 className="text-xl lg:text-2xl font-normal text-center lg:text-left">
              {t("terms-and-conditions.title")}
            </h1>
            <Term
              title={t("terms-and-conditions.first-term-title")}
              text={t("terms-and-conditions.first-term-text")}
            />
            <Term
              title={t("terms-and-conditions.second-term-title")}
              text={t("terms-and-conditions.second-term-text.first-paragraph")}
            />
            <Term
              text={t("terms-and-conditions.second-term-text.second-paragraph")}
            />
            <Term
              text={t("terms-and-conditions.second-term-text.third-paragraph")}
            />
            <Term
              title={t("terms-and-conditions.third-term-title")}
              text={t("terms-and-conditions.third-term-text")}
            />

            <div className="flex self-start text-xs font-medium mt-5 mb-5">
              <span>{t("terms-and-conditions.last-update")}</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
