import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Home");
  const lang = useLocale();
  return (
    <footer className="flex-shrink-0">
      <div className="flex flex-col text-sm items-center justify-between text-center px-40 py-10 gap-10 lg:h-80 lg:flex-row lg:text-base lg:text-left lg:gap-36 bg-dark-blue">
        <div className="flex flex-col gap-3 h-full">
          <span className="font-medium" style={{ color: "#2594EA" }}>
            STARTUPS GLOBAL LINK
          </span>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} - Startups Global Link
          </p>
          <p className="text-sm text-gray-300 w-[320px]">
            {t("footer-address")}
          </p>
          <p className="text-sm text-gray-300">{t("footer-zip-code")}</p>
          <p className="text-sm text-gray-300">startups-globallink@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3 h-full">
          <span className="font-medium text-purple-500">
            {t("footer-support-title")}
          </span>
          <ul className="flex flex-col text-gray-300">
            <li className="mb-4 font-semibold">
              <Link href={`/${lang}/terms/terms-and-conditions`}>
                {t("footer-support-first-text")}
              </Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href={`/${lang}/terms/privacy-policy`}>
                {t("footer-support-second-text")}
              </Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href={`/${lang}/terms/return-refund-policy`}>
                {t("footer-support-third-text")}
              </Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link
                href={`/${lang}/terms/delivery-policy-for-digital-products`}
              >
                {t("footer-support-fourth-text")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 h-full">
          <span className="font-medium text-purple-500">
            {t("footer-social-title")}
          </span>
          <ul className="text-gray-300">
            <li className="mb-4 font-semibold">
              <a
                href="https://www.linkedin.com/company/startups-global-link"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="mb-4 font-semibold">
              <a
                href="https://www.youtube.com/@StartupsGlobalLink-fy2te"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
