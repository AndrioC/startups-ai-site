import { TbCalendarSad } from "react-icons/tb";

import { Alert, AlertTitle } from "@/components/ui/alert";

export default function NotFoundStartups() {
  return (
    <Alert className="flex flex-col justify-center w-[300px] h-[200px]">
      <div className="flex flex-col items-center">
        <TbCalendarSad size={100} color="gray" />
        <AlertTitle className="text-gray-400">
          Nenhuma startup encontrada
        </AlertTitle>
      </div>
    </Alert>
  );
}
