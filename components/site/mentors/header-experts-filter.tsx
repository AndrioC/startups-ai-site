"use client";
import { useCallback, useState } from "react";
import _ from "lodash";
import { useTranslations } from "next-intl";

import { ExpertProps } from "@/app/(site)/data";
import { ExpertSummary } from "@/app/api/mentors/route";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface HeaderExpertsFiltersProps extends ExpertProps {
  languages_array: string[];
  description: string | null;
  languages: string;
  work_field: string[];
  country: string;
}

interface Props {
  dataSource: ExpertSummary[];
  setFilteredData(data: ExpertSummary[]): void;
}

export default function HeaderExpertsFilter({
  dataSource,
  setFilteredData,
}: Props) {
  const t = useTranslations("Expert");
  const [language, setLanguage] = useState("");
  const [workField, setWorkField] = useState("");

  const options = setFilter(dataSource);

  const handleClearFilters = useCallback(() => {
    setLanguage("");
    setWorkField("");
    setFilteredData(dataSource);
  }, []);

  const handleFilterByLanguage = useCallback(
    (language_value: string) => {
      applyFilters(language_value, workField);
    },
    [workField]
  );

  const handleFilterByWorkField = useCallback(
    (work_field_value: string) => {
      applyFilters(language, work_field_value);
    },
    [language]
  );

  const applyFilters = (language_value: string, work_field_value: string) => {
    let newFilteredData = [...dataSource];

    if (language_value) {
      newFilteredData = newFilteredData.filter((expert) =>
        expert.languages.includes(language_value)
      );
    }

    if (work_field_value) {
      newFilteredData = newFilteredData.filter((expert) =>
        expert.work_field.includes(work_field_value)
      );
    }

    setFilteredData(newFilteredData);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 place-items-center w-[300px] lg:w-[700px]">
      <Select
        value={language}
        onValueChange={(value) => {
          handleFilterByLanguage(value);
          setLanguage(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("header-filter-language")} />
        </SelectTrigger>
        <SelectContent>
          {options[0].map((option, index) => (
            <SelectItem key={index} value={option.label}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={workField}
        onValueChange={(value) => {
          handleFilterByWorkField(value);
          setWorkField(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("header-filter-work-field")} />
        </SelectTrigger>
        <SelectContent>
          {options[1].map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <Button
          variant="link"
          onClick={handleClearFilters}
          className="text-blue-600 font-normal uppercase lg:ml-0 ml-20"
        >
          {t("header-filter-clear")}
        </Button>
      </div>
    </div>
  );
}

function setFilter(dataSource: ExpertSummary[]) {
  const uniqueLanguages = _.uniq(
    dataSource.flatMap((language) => language.languages)
  );

  const languagesFilter = uniqueLanguages.map((value) => ({
    value,
    label: value,
  }));

  const uniqueWorkFields = _.uniq(
    dataSource.flatMap((expert) => expert.work_field)
  );

  const workFieldsFilter = uniqueWorkFields.map((value) => ({
    value,
    label: value,
  }));

  languagesFilter.sort(sortByLabel);
  workFieldsFilter.sort(sortByLabel);

  return [languagesFilter, workFieldsFilter];
}
type FilterItem = {
  value: string;
  label: string;
};

const sortByLabel = (a: FilterItem, b: FilterItem): number =>
  a.label.localeCompare(b.label);
