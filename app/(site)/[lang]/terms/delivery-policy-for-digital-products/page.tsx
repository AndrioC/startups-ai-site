import { useTranslations } from "next-intl";

import Container from "@/components/site/home/container";
import { Term, TextWithBullet } from "@/components/site/support/term";

export default function DeliveryPolicyForDigitalProductsPage() {
  const t = useTranslations("Support");
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col items-center w-[300px] lg:w-[750px] text-gray-600">
            <h1 className="text-xl lg:text-2xl font-normal text-center lg:text-left">
              {t("delivery-for-digital-products-policy.title")}
            </h1>
            <Term
              title={t("delivery-for-digital-products-policy.first-term-title")}
              text={t("delivery-for-digital-products-policy.first-term-text")}
            />
            <Term
              title={t(
                "delivery-for-digital-products-policy.second-term-title"
              )}
              text={t("delivery-for-digital-products-policy.second-term-text")}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.first-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.first-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.second-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.second-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.third-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.third-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.fourth-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.fourth-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.fifth-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.fifth-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.sixth-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.sixth-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.seventh-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.seventh-bullet-text"
              )}
            />
            <TextWithBullet
              title={t(
                "delivery-for-digital-products-policy.third-term-bullets.eighth-bullet-title"
              )}
              text={t(
                "delivery-for-digital-products-policy.third-term-bullets.eighth-bullet-text"
              )}
            />
            <Term
              text={t("delivery-for-digital-products-policy.fourth-term-text")}
            />
            <div className="flex self-start text-xs font-medium mt-5 mb-5">
              <span>
                {t("delivery-for-digital-products-policy.last-update")}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
