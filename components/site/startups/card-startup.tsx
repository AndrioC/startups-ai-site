import Image from "next/image";
import { useTranslations } from "next-intl";

import { infoFlags, StartupProps } from "@/app/(site)/data";
import startupPlaceHolder from "@/assets/startup-placeholder.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CardStartup({
  startup_name,
  logo,
  foundation_year,
  value_proposal,
  last_update,
  vertical,
  business_model,
  country,
  flag,
}: StartupProps) {
  const t = useTranslations("Startup");
  return (
    <div
      className="flex flex-col shadow-lg w-[370px] md:w-[450px] h-[200px] mb-10"
      style={{ position: "relative" }}
    >
      <div className="flex justify-between p-5 items-center">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="mr-5 text-sm font-semibold w-[250px]">
              {startup_name}
              <p className="text-gray-400">{foundation_year}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[70px] h-[70px] overflow-hidden">
            <Image
              width={70}
              height={70}
              src={logo ?? startupPlaceHolder}
              style={{ width: "auto", height: "auto" }}
              alt="startup-image"
            />
          </div>
          <span className="text-xs text-gray-400 font-medium text-center">
            {t("startup-card-last-update-text")}
          </span>
          <p className="text-xs text-gray-400 font-medium">{last_update}</p>
        </div>
      </div>
      <div className="px-5">
        <p className="font-normal text-sm text-gray-500">{value_proposal}</p>
      </div>
      <div
        id="footer"
        className="flex items-center justify-between bg-gray-200 w-full px-5"
        style={{ position: "absolute", bottom: "0" }}
      >
        <div>
          <span className="uppercase">
            {vertical} • {business_model}
          </span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                width={25}
                height={25}
                src={infoFlags[flag]}
                style={{ width: "25px", height: "25px" }}
                alt={country}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{country}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
