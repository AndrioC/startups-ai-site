import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

const BUCKET_IMG_LOGO_NAME = process.env.S3_STARTUP_LOGO_IMGS_BUCKET_NAME;
const BUCKET_FLAGS_NAME = process.env.S3_STARTUP_COUNTRY_FLAGS;

export type StartupSummary = {
  id: number;
  name: string;
  foundation_year: string;
  value_proposal: string;
  updated_at: Date;
  logo_img: string;
  logo_img_url: string;
  vertical: string;
  country: string;
  business_model: string;
  last_update: string;
  flag: string;
};

export async function GET(
  req: NextRequest
): Promise<NextResponse<StartupSummary[]>> {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const startups: StartupSummary[] = await prisma.startups
    .findMany({
      select: {
        id: true,
        name: true,
        foundation_date: true,
        value_proposal_en: true,
        value_proposal_pt: true,
        updated_at: true,
        logo_img: true,
        vertical: {
          select: {
            name_en: true,
            name_pt: true,
          },
        },
        country: {
          select: {
            code: true,
            name_en: true,
            name_pt: true,
          },
        },
        business_model: {
          select: {
            name: true,
          },
        },
      },
    })
    .then((startups) =>
      startups.map((startup) => ({
        ...startup,
        logo_img_url: `https://${BUCKET_IMG_LOGO_NAME}.s3.amazonaws.com/${startup.logo_img}`,
        vertical:
          lang === "en"
            ? startup.vertical?.name_en || "-"
            : startup.vertical?.name_pt || "-",
        country:
          lang === "en"
            ? startup.country?.name_en || "-"
            : startup.country?.name_pt || "-",
        business_model: startup.business_model?.name || "-",
        value_proposal:
          lang === "en"
            ? startup.value_proposal_en || "-"
            : startup.value_proposal_pt || "-",
        foundation_year: startup.foundation_date
          ? new Date(startup.foundation_date)
              .toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })
              .split("/")[2]
          : "-",
        last_update:
          lang === "en"
            ? new Date(startup.updated_at).toLocaleDateString("en-US", {
                timeZone: "UTC",
              })
            : new Date(startup.updated_at).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              }),
        flag: `https://${BUCKET_FLAGS_NAME}.s3.amazonaws.com/${startup.country?.code}.svg`,
      }))
    );

  return NextResponse.json(startups, { status: 201 });
}
