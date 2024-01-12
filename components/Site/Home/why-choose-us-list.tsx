import Image from "next/image";
import { useTranslations } from "next-intl";

import colaborationIcon from "@/assets/img/colaboration-icon.svg";
import globalConnectionsIcon from "@/assets/img/global-connections-icon.svg";
import globalInnovationIcon from "@/assets/img/global-innovation-icon.svg";
import mentorshipIcon from "@/assets/img/mentorship-icon.svg";
import winWinIcon from "@/assets/img/win-win-icon.svg";

export default function WhyChooseUsList() {
  const t = useTranslations("Home");
  return (
    <div className="mt-8 lg:mt-10 flex flex-col items-center lg:items-start">
      <ul className="md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-20">
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={globalConnectionsIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              {t("why-choose-us-first-title")}
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              {t("why-choose-us-first-sub-title")}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={colaborationIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              {t("why-choose-us-second-title")}
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              {t("why-choose-us-second-sub-title")}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={globalInnovationIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              {t("why-choose-us-third-title")}
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              {t("why-choose-us-third-sub-title")}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={mentorshipIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              {t("why-choose-us-fourth-title")}
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              {t("why-choose-us-fourth-sub-title")}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center lg:flex-row lg:mb-0">
          <Image src={winWinIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              {t("why-choose-us-fifth-title")}
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              {t("why-choose-us-fifth-sub-title")}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
