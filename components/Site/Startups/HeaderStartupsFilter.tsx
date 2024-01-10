"use client";
import { useCallback, useState } from "react";
import _ from "lodash";

import { StartupProps } from "@/app/(site)/data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  dataSource: StartupProps[];
  setFilteredData(data: StartupProps[]): void;
}

export default function HeaderStartupsFilter({
  dataSource,
  setFilteredData,
}: Props) {
  const [country, setCountry] = useState("");
  const [vertical, setVertical] = useState("");
  const [businessModel, setBusinessModel] = useState("");
  const [sglLabel, setSglLabel] = useState("");

  const options = setFilter(dataSource);

  const handleClearFilters = useCallback(() => {
    setCountry("");
    setVertical("");
    setBusinessModel("");
    setSglLabel("");
    setFilteredData(dataSource);
  }, []);

  const handleFilterByCountry = useCallback(
    (country_value: string) => {
      applyFilters(country_value, vertical, businessModel, sglLabel);
    },
    [vertical, businessModel, sglLabel]
  );

  const handleFilterByVertical = useCallback(
    (vertical_value: string) => {
      applyFilters(country, vertical_value, businessModel, sglLabel);
    },
    [country, businessModel, sglLabel]
  );

  const handleFilterByBusinessModel = useCallback(
    (business_model_value: string) => {
      applyFilters(country, vertical, business_model_value, sglLabel);
    },
    [country, vertical, sglLabel]
  );

  const handleFilterBySglLabel = useCallback(
    (sgl_label_value: string) => {
      applyFilters(country, vertical, businessModel, sgl_label_value);
    },
    [country, vertical, businessModel]
  );

  const applyFilters = (
    country_value: string,
    vertical_value: string,
    business_model_value: string,
    sgl_label_value: string
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
        (startup) => startup.business_model === business_model_value
      );
    }

    if (sgl_label_value) {
      newFilteredData = newFilteredData.filter(
        (startup) => startup.sgl_label === sgl_label_value
      );
    }
    setFilteredData(newFilteredData);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 place-items-center">
        <Select
          value={country}
          onValueChange={(value) => {
            handleFilterByCountry(value);
            setCountry(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="País" />
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
            <SelectValue placeholder="Modelo de negócio" />
          </SelectTrigger>
          <SelectContent>
            {options[2].map((option, index) => (
              <SelectItem key={index} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={sglLabel}
          onValueChange={(value) => {
            handleFilterBySglLabel(value);
            setSglLabel(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selo SGL" />
          </SelectTrigger>
          <SelectContent>
            {options[3].map((option, index) => (
              <SelectItem key={index} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="link"
        onClick={handleClearFilters}
        className="self-end -mr-3 text-blue-600 font-normal uppercase"
      >
        Limpar filtros
      </Button>
    </div>
  );
}

function setFilter(dataSource: StartupProps[]) {
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
      if (a.vertical > b.vertical) {
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

  const uniqueSglLabel = _.uniqBy(dataSource, "sgl_label");

  const sglLabelFilter = uniqueSglLabel
    .sort((a, b) => {
      if (a.sgl_label < b.sgl_label) {
        return -1;
      }
      if (a.sgl_label > b.sgl_label) {
        return 1;
      }
      return 0;
    })
    .map((value) => ({
      value: value.sgl_label,
      label: value.sgl_label.charAt(0).toUpperCase() + value.sgl_label.slice(1),
    }));

  return [countryFilter, verticalFilter, businessModelFilter, sglLabelFilter];
}
