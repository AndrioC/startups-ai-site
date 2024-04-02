import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export interface EbooksExpertProps {
  id?: number;
  title: string;
  link: string;
  img: string;
  className?: string;
}

export default function EbookView({
  title,
  link,
  img,
  className,
}: EbooksExpertProps) {
  const t = useTranslations("Expert");

  return (
    <div
      className={`max-w-[250px] lg:max-w-xs rounded overflow-hidden shadow-lg m-4 ${className}`}
    >
      <Image
        src={img}
        alt={title}
        width={400}
        height={300}
        className="border-gray-300 border-b"
        priority
      />
      <div className="flex flex-col items-center px-6 py-4">
        <div className="font-medium text-base lg:text-xl mb-2">{title}</div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="blue">{t("expert-acess-ebook-button")}</Button>
        </a>
      </div>
    </div>
  );
}
