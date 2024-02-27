import { NextResponse } from "next/server";

import prisma from "@/prisma/client";

export type InitialCardValues = {
  startups_quantity: number;
  experts_quantity: number;
  countries_quantity: number;
};

export async function GET(): Promise<NextResponse<InitialCardValues>> {
  const expertsQuantity = await prisma.experts.count({
    where: { is_approved: true },
  });

  const startupsQuantity = await prisma.startups.count({
    where: { is_approved: true },
  });

  const countriesQuantity = await prisma.startups.findMany({
    select: {
      country_id: true,
    },
    distinct: ["country_id"],
  });

  const response: InitialCardValues = {
    experts_quantity: expertsQuantity,
    startups_quantity: startupsQuantity,
    countries_quantity: countriesQuantity.length,
  };

  return NextResponse.json(response, { status: 201 });
}
