import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

export type InvestorSummary = {
  id: number;
  name: string;
  country: string;
  country_flag: string;
  linkedin: string;
  logo_img_url: string;
  mini_description: string;
};

const BUCKET_INVESTORS_LOGO = process.env.S3_INVESTORS_LOGO_IMGS_BUCKET_NAME;
const BUCKET_FLAGS_NAME = process.env.S3_STARTUP_COUNTRY_FLAGS;

export async function GET(
  req: NextRequest
): Promise<NextResponse<InvestorSummary[]>> {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const investors: InvestorSummary[] = await prisma.investors
    .findMany({
      select: {
        id: true,
        name: true,
        country_id: true,
        linkedin: true,
        logo_img: true,
        mini_description_en: true,
        mini_description_pt: true,
        country: true,
      },
      where: { is_approved: true },
    })
    .then((investors) =>
      investors.map((investor) => ({
        id: investor.id,
        name: investor.name,
        country:
          lang === "en"
            ? investor.country?.name_en || "-"
            : investor.country?.name_pt || "-",
        country_flag: `https://${BUCKET_FLAGS_NAME}.s3.amazonaws.com/${investor.country?.code}.svg`,
        linkedin: investor.linkedin,
        logo_img_url: `https://${BUCKET_INVESTORS_LOGO}.s3.amazonaws.com/${investor.logo_img}`,
        mini_description:
          lang === "en"
            ? investor.mini_description_en || "-"
            : investor.mini_description_pt || "-",
      }))
    );

  return NextResponse.json(investors, { status: 201 });
}
