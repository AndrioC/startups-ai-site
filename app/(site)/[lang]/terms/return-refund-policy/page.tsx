import { useTranslations } from "next-intl";

import Container from "@/components/site/home/container";
import { Term, TextWithBullet } from "@/components/site/support/term";

export default function ReturnRefundPolicyPage() {
  const t = useTranslations("Support");
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col items-center w-[300px] lg:w-[750px] text-gray-600">
            <h1 className="text-xl lg:text-2xl font-normal text-center lg:text-left">
              {t("return-refund-policy.title")}
            </h1>
            <Term
              title={t("return-refund-policy.first-term-title")}
              text={t("return-refund-policy.first-term-text")}
            />
            <Term
              title={t("return-refund-policy.second-term-title")}
              text={t("return-refund-policy.second-term-text")}
            />
            <Term text={t("return-refund-policy.third-term-text")} />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.first-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.first-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.second-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.second-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.third-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.third-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.fourth-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.fourth-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.fifth-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.fifth-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.sixth-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.sixth-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.seventh-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.seventh-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "return-refund-policy.fourth-term-bullets.eighth-bullet-title"
              )}
              text={t(
                "return-refund-policy.fourth-term-bullets.eighth-bullet-text"
              )}
            />
            <Term text={t("return-refund-policy.fith-term-text")} />
            <div className="flex self-start text-xs font-medium mt-5 mb-5">
              <span>{t("return-refund-policy.last-update")}</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
