"use server";
import prisma from "@/prisma/client";

export const loadVerticalData = async (lang: string) => {
  const verticalData = (await prisma.vertical.findMany()).map((value) => ({
    ...value,
    label: lang === "en" ? value.name_en : value.name_pt,
  }));

  return verticalData;
};
