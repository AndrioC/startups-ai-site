import { SiLinkedin } from "react-icons/si";
import { TbMessage2 } from "react-icons/tb";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { infoFlags } from "@/app/(site)/data";
import userPlaceHolder from "@/assets/user-placeholder.jpeg";
import { Button } from "@/components/ui/button";

export interface CardExpertProps {
  name: string;
  last_name: string;
  linkedin: string;
  description: string | null;
  languages: string;
  work_field: string[];
  country: string;
  photo: string | null;
  flag: string;
}

export default function CardExpert({
  name,
  last_name,
  linkedin,
  description,
  languages,
  work_field,
  country,
  photo,
  flag,
}: CardExpertProps) {
  const t = useTranslations("Expert");

  return (
    <div className="border-4 border-gray-200 p-4 w-[400px] rounded-[100px] h-[520px] flex flex-col justify-center">
      <div className="flex items-center gap-3 h-[190px]">
        <div className="flex flex-col w-[200px]">
          <div className="flex flex-col w-[120px] items-center text-center">
            <div className="w-[120px] h-[120px] overflow-hidden rounded-full border-4 border-blue-600">
              <Image
                className="flex-shrink-0 object-center rounded-full"
                width={120}
                height={120}
                src={photo ?? userPlaceHolder}
                alt={`${name}-image`}
              />
            </div>
            <div className="flex mt-2">
              <span className="text-xs font-semibold">
                {name + " " + last_name}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[90px] gap-3">
          <div className="flex items-center gap-2">
            <Image width={25} height={25} src={infoFlags[flag]} alt={country} />
            <p>{country}</p>
          </div>
          <div className="flex items-center">
            <TbMessage2 size={30} className="text-gray-500 -ml-0.5" />
            <span className="ml-2">{languages}</span>
          </div>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <SiLinkedin size={30} className="text-blue-500" />
          </a>
        </div>
      </div>
      <div className="mt-8 h-[100px] px-1">
        <p
          className="text-xs font-medium text-gray-500"
          style={{
            WebkitLineClamp: 5,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description ?? t("no-description-card-text")}
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-2 gap-0.5 mt-3 h-[150px]">
        {work_field.slice(0, 6).map((value) => (
          <div
            key={value}
            className="flex items-center justify-center border-2 border-gray-400 rounded-full p-2 w-[150px] h-[40px] text-xs text-gray-500 text-center"
          >
            <span className="py-2">{value}</span>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center mt-10">
        <Button variant="blue">{t("expert-learn-more")}</Button>
      </div> */}
    </div>
  );
}
