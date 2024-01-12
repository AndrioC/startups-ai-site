import { TbCalendarSad } from "react-icons/tb";
import { useTranslations } from "next-intl";

import { Alert, AlertTitle } from "@/components/ui/alert";

export default function NotFoundStartups() {
  const t = useTranslations("Startup");
  return (
    <Alert className="flex flex-col justify-center w-[300px] h-[200px]">
      <div className="flex flex-col items-center">
        <TbCalendarSad size={100} color="gray" />
        <AlertTitle className="text-gray-400">
          {t("startup-not-found-results-text")}
        </AlertTitle>
      </div>
    </Alert>
  );
}
