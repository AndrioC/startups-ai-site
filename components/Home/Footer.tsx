import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Home");
  return (
    <footer>
      <div className="flex flex-col text-sm items-center justify-between text-center bg-dark-blue px-40 py-10 gap-10 lg:h-64 lg:flex-row lg:text-base lg:text-left lg:gap-36">
        <div className="flex flex-col gap-3 h-full">
          <span className="font-medium" style={{ color: "#2594EA" }}>
            STARTUPS GLOBAL LINK
          </span>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} - Startups Global Link
          </p>
        </div>
        <div className="flex justify-center flex-col gap-3 h-full">
          <span className="font-medium text-purple-500">
            {t("footer-support-title")}
          </span>
          <ul className="flex flex-col text-gray-300">
            <li className="mb-4 font-semibold">
              <Link href="#">{t("footer-support-first-text")}</Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href="#">{t("footer-support-second-text")}</Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href="#">{t("footer-support-third-text")}</Link>
            </li>
            <li className="mb-4 font-semibold">
              <Link href="#">{t("footer-support-fourth-text")}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 h-full">
          <span className="font-medium text-purple-500">
            {t("footer-social-title")}
          </span>
          <ul className="text-gray-300">
            <li className="mb-4 font-semibold">
              <Link href="#">Linkedin</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
