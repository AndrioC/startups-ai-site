import { SiLinkedin } from "react-icons/si";
import Image from "next/image";
import { useTranslations } from "next-intl";

import userPlaceHolder from "@/assets/user-placeholder.jpeg";

export interface CardExpertProps {
  name: string;
  linkedin: string;
  description: string | null;
  country: string;
  photo: string | null;
  flag: string;
}

export default function CardInvestor({
  name,
  linkedin,
  description,
  country,
  photo,
  flag,
}: CardExpertProps) {
  const t = useTranslations("Investor");
  let newLink = linkedin;

  if (!/^https?:\/\//i.test(linkedin)) {
    newLink = "https://" + linkedin;
  }

  return (
    <div className="border-2 border-gray-100 p-4 w-[320px] rounded-[30px] lg:h-[350px] flex flex-col justify-center">
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
              <span className="text-xs font-semibold">{name}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[90px] gap-3">
          <div className="flex items-center gap-2">
            <Image
              width={25}
              height={25}
              src={flag}
              alt={country}
              style={{ width: "25px", height: "25px" }}
            />
            <p>{country}</p>
          </div>
          <a href={newLink} target="_blank" rel="noreferrer">
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
    </div>
  );
}
