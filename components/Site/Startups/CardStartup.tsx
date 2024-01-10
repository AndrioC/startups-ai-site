import Image from "next/image";
import { useTranslations } from "next-intl";

import { startupFlags, StartupProps } from "@/app/(site)/data";
import startupPlaceHolder from "@/assets/startup-placeholder.png";
import sglFull from "@/assets/startups/sgl_full.svg";
import sglJunior from "@/assets/startups/sgl_junior.svg";
import sglMaster from "@/assets/startups/sgl_master.svg";
import sglSenior from "@/assets/startups/sgl_senior.svg";
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
  sgl_badge,
  last_update,
  vertical,
  business_model,
  country,
  flag,
}: StartupProps) {
  const t = useTranslations("Startup");
  return (
    <div
      className="flex flex-col shadow-lg w-[390px] md:w-[450px] h-[200px] mb-10"
      style={{ position: "relative" }}
    >
      <div className="flex justify-between p-5 items-center">
        <div className="flex flex-col">
          <div className="w-[70px] h-[70px] overflow-hidden">
            <Image
              className="flex-shrink-0 object-center"
              width={70}
              height={70}
              src={logo ?? startupPlaceHolder}
              alt="startup-image"
              objectFit=""
            />
          </div>
          <div className="flex flex-col">
            <span className="mr-5 text-xs font-semibold w-[250px]">
              {startup_name}
              <p className="text-gray-400">{foundation_year}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={60}
            height={60}
            src={sglBadgeLogo(sgl_badge as SglBadge)}
            alt="sgl-image"
          />
          <span className="text-xs text-gray-400 font-medium">
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
                src={startupFlags[flag]}
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

type SglBadge = "junior" | "full" | "senior" | "master";

type SglImages = {
  [key in SglBadge]: string;
};

const sglBadgeLogo = (sgl_badge: SglBadge): string => {
  const images: SglImages = {
    junior: sglJunior,
    full: sglFull,
    senior: sglSenior,
    master: sglMaster,
  };

  return images[sgl_badge];
};
