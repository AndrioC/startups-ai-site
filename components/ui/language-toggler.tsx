import { useState } from "react";
import { useLocale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/navigation";

import { Button } from "./button";
import { DropdownMenuSeparator } from "./dropdown-menu";

export function LanguageToggle() {
  const pathname = usePathname();
  const lang = useLocale();

  const [selectedLanguage, setSelectedLanguage] = useState(lang);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedLanguage === "en" ? "🇺🇸 English" : "🇧🇷 Português"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleLanguageChange("en")}
        >
          <Link href={pathname} locale="en">
            🇺🇸 English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleLanguageChange("pt")}
        >
          <Link href={pathname} locale="pt">
            🇧🇷 Português
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
