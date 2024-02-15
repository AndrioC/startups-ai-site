"use client";
import { useCallback, useState } from "react";
import _ from "lodash";
import { useTranslations } from "next-intl";

import { StartupSummary } from "@/app/api/startups/route";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  dataSource: StartupSummary[];
  setFilteredData(data: StartupSummary[]): void;
}

export default function HeaderStartupsFilter({
  dataSource,
  setFilteredData,
}: Props) {
  const t = useTranslations("Startup");
  const [country, setCountry] = useState("");
  const [vertical, setVertical] = useState("");
  const [businessModel, setBusinessModel] = useState("");

  const options = setFilter(dataSource);

  const handleClearFilters = useCallback(() => {
    setCountry("");
    setVertical("");
    setBusinessModel("");
    setFilteredData(dataSource);
  }, []);

  const handleFilterByCountry = useCallback(
    (country_value: string) => {
      applyFilters(country_value, vertical, businessModel);
    },
    [vertical, businessModel]
  );

  const handleFilterByVertical = useCallback(
    (vertical_value: string) => {
      applyFilters(country, vertical_value, businessModel);
    },
    [country, businessModel]
  );

  const handleFilterByBusinessModel = useCallback(
    (business_model_value: string) => {
      applyFilters(country, vertical, business_model_value);
    },
    [country, vertical]
  );

  const applyFilters = (
    country_value: string,
    vertical_value: string,
    business_model_value: string
  ) => {
    let newFilteredData = [...dataSource];

    if (country_value) {
      newFilteredData = newFilteredData.filter(
        (startup) => startup.country === country_value
      );
    }

    if (vertical_value) {
      newFilteredData = newFilteredData.filter(
        (startup) => startup.vertical === vertical_value
      );
    }

    if (business_model_value) {
      newFilteredData = newFilteredData.filter(
        (startup) => startup?.business_model === business_model_value
      );
    }

    setFilteredData(newFilteredData);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 place-items-center">
      <Select
        value={country}
        onValueChange={(value) => {
          handleFilterByCountry(value);
          setCountry(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("header-filter-country")} />
        </SelectTrigger>
        <SelectContent>
          {options[0].map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={vertical}
        onValueChange={(value) => {
          handleFilterByVertical(value);
          setVertical(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Vertical" />
        </SelectTrigger>
        <SelectContent>
          {options[1].map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={businessModel}
        onValueChange={(value) => {
          handleFilterByBusinessModel(value);
          setBusinessModel(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("header-filter-model-business")} />
        </SelectTrigger>
        <SelectContent>
          {options[2].map((option, index) => (
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

function setFilter(dataSource: StartupSummary[]) {
  const dataFilter = [...dataSource];

  const uniqueCountry = _.uniqBy(dataSource, "country");

  const countryFilter = uniqueCountry
    .sort((a, b) => {
      if (a.country < b.country) {
        return -1;
      }
      if (a.country > b.country) {
        return 1;
      }
      return 0;
    })
    .map((value) => ({
      value: value.country,
      label: value.country,
    }));

  const uniqueVertical = _.uniqBy(dataSource, "vertical");

  const verticalFilter = uniqueVertical
    .sort((a, b) => {
      if (a.vertical < b.vertical) {
        return -1;
      }
      if (a.vertical! > b.vertical!) {
        return 1;
      }
      return 0;
    })
    .map((value) => ({
      value: value.vertical,
      label: value.vertical,
    }));

  const uniqueBusinessModel = _.uniqBy(dataFilter, "business_model");

  const businessModelFilter = uniqueBusinessModel
    .sort((a, b) => {
      if (a.business_model < b.business_model) {
        return -1;
      }
      if (a.business_model > b.business_model) {
        return 1;
      }
      return 0;
    })
    .map((value) => ({
      value: value.business_model,
      label: value.business_model,
    }));

  return [countryFilter, verticalFilter, businessModelFilter];
}
