"use client";

import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";
import { Dialog } from "@headlessui/react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PlanCardProps {
  title: string;
  price: string;
  original_price: string;
  features: string[];
  buttonText: string;
}

export default function PlanCard({
  title,
  price,
  original_price,
  features,
  buttonText,
}: PlanCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const t = useTranslations("PlansPrograms");
  const lang = useLocale();

  const currency = lang === "pt-BR" ? "R$" : "$";

  const hoverText = `${t(
    "plans-billing-info-hover-first"
  )} ${currency} ${original_price}, ${t("plans-billing-info-hover-second")}}`;

  return (
    <>
      <div className="flex flex-col bg-white rounded-[25px] shadow-md p-6 m-4 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[300px]">
        <h2 className="text-xl font-semibold mb-2 text-[#424242]">{title}</h2>
        <div className="flex justify-between">
          <div className="flex relative space-x-6">
            <span className="text-[18px] font-normal mb-2 absolute bottom-2">
              {currency}
            </span>
            <h1 className="text-[40px] font-normal mb-2">{price}</h1>
          </div>
          <div className="flex justify-center gap-1">
            <span className="mt-[-2px]">{currency}</span>
            <p className="text-sm line-through">{original_price}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-xs text-[#747D8C] font-semibold">
            {t("plans-billing-info")}
          </p>
          <TooltipDemo text={hoverText} />
        </div>
        <div className="w-full h-[1px] bg-[#9F9F9F] mb-2 opacity-30"></div>
        <Button
          onClick={openModal}
          className="bg-blue-600 text-white font-semibold rounded-lg mb-4 hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out"
        >
          {buttonText}
        </Button>
        <ul className="w-full">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start mb-3 text-[15px]">
              <div className="flex gap-3 items-start flex-shrink-0 mt-[2px]">
                <LiaCheckCircle className="text-[#179A43] flex-shrink-0 w-5 h-5" />
              </div>
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="bg-[#699BF7] rounded max-w-sm mx-auto p-6 text-white">
            <Dialog.Title className="text-lg font-medium">
              {lang === "en" ? "Warning" : "Aviso"}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm">
              {t("plans-functionality-not-available")}
            </Dialog.Description>
            <Button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
              onClick={closeModal}
            >
              {lang === "en" ? "Close" : "Fechar"}
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function TooltipDemo({ text }: { text: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-pointer">
            <FiInfo className="text-[#699BF7]" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-[#699BF7] text-white">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
