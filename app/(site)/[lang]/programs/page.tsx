import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import ifiaAbipirProgramsLogo from "@/assets/img/ifia-abipir-programs-logo.svg";
import ifiaProgramsLogo from "@/assets/img/ifia-programs-logo.svg";
import rocketBg from "@/assets/img/programs-en-bg.svg";
import { Button } from "@/components/ui/button";

export default function ProgramsPage() {
  const t = useTranslations("Programs");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-10">
      <main className="flex flex-col items-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-4xl md:text-[64px] font-medium">
          {t("programs-title-first")}{" "}
          <span className="font-bold">{t("programs-title-second")}</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl">{t("programs-subtitle")}</p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-5 md:space-y-0 md:space-x-10">
          <Image
            src={ifiaProgramsLogo}
            alt="IFIA Logo"
            width={310}
            height={310}
          />
          <Image
            src={ifiaAbipirProgramsLogo}
            alt="IFIA ABIPIR Logo"
            width={210}
            height={210}
          />
        </div>
        <div className="flex justify-center md:justify-end mt-10 w-full">
          <Image
            src={rocketBg}
            alt="Rocket Image"
            width={400}
            height={400}
            className="mt-[-50px] md:mt-[-150px] mr-0 md:mr-[-50px]"
          />
        </div>
        <p className="mt-10 text-base md:text-lg">{t("programs-plans-text")}</p>
        <Link href="plans" className="mt-5">
          <Button
            variant="blue"
            className="mt-5 text-xs sm:text-sm md:text-base shadow-lg"
          >
            {t("programs-plans-button-text")}
          </Button>
        </Link>
      </main>
    </div>
  );
}
