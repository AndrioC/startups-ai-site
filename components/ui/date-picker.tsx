// Import necessary dependencies and components
import * as React from "react";
import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  onChange: (date: Date | null) => void;
  value: Date | null | undefined;
}

// DatePicker component
export function DatePicker({ onChange, value }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | null | undefined>(value);

  const lang = useLocale();

  const localeLanguage = lang === "en" ? enUS : ptBR;
  const formatDate = lang === "en" ? "MM/dd/yyyy" : "dd/MM/yyyy";
  const label = lang === "en" ? "Pick a date" : "Selecione uma data";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, formatDate) : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date || undefined}
          onSelect={(newDate: Date | null | undefined) => {
            if (newDate !== undefined) {
              newDate?.setHours(0, 0, 0, 0);
              setDate(newDate);
              onChange(newDate);
            }
          }}
          initialFocus
          locale={localeLanguage}
        />
      </PopoverContent>
    </Popover>
  );
}
