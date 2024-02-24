import { NextResponse } from "next/server";

import prisma from "@/prisma/client";

export async function GET() {
  const challenges = await prisma.challenges.findMany();
  const country = await prisma.country.findMany();
  const maturity_level = await prisma.maturity_level.findMany();
  const objectives = await prisma.objectives.findMany();
  const business_model = await prisma.business_model.findMany();
  const operational_stage = await prisma.operational_stage.findMany();
  const service_products = await prisma.service_products.findMany();
  const vertical = await prisma.vertical.findMany();
  const investiment_stages = await prisma.investiment_stages.findMany();

  const data = {
    challenges,
    country,
    maturity_level,
    objectives,
    business_model,
    operational_stage,
    service_products,
    vertical,
    investiment_stages,
  };

  return NextResponse.json(data, { status: 201 });
}
