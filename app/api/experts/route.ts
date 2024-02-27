import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

export type ExpertSummary = {
  id: number;
  name: string;
  country: string;
  country_flag: string;
  linkedin: string;
  picture_img_url: string;
  description: string;
  work_field: string[];
  languages: string[];
  languages_code: string[];
};

const BUCKET_EXPERTS_LOGO = process.env.S3_EXPERTS_LOGO_IMGS_BUCKET_NAME;
const BUCKET_FLAGS_NAME = process.env.S3_STARTUP_COUNTRY_FLAGS;

export async function GET(
  req: NextRequest
): Promise<NextResponse<ExpertSummary[]>> {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const experts: ExpertSummary[] = await prisma.experts
    .findMany({
      select: {
        id: true,
        name: true,
        country_id: true,
        linkedin: true,
        picture_img: true,
        experience_with_startups_en: true,
        experience_with_startups_pt: true,
        country: true,
        experts_languages: {
          select: {
            languages: true,
          },
        },
        experts_challenges: {
          select: {
            challenges: true,
          },
        },
      },
      where: { is_approved: true },
    })
    .then((experts) =>
      experts.map((expert) => ({
        id: expert.id,
        name: expert.name,
        country:
          lang === "en"
            ? expert.country?.name_en || "-"
            : expert.country?.name_pt || "-",
        country_flag: `https://${BUCKET_FLAGS_NAME}.s3.amazonaws.com/${expert.country?.code}.svg`,
        linkedin: expert.linkedin,
        picture_img_url: `https://${BUCKET_EXPERTS_LOGO}.s3.amazonaws.com/${expert.picture_img}`,
        description:
          lang === "en"
            ? expert.experience_with_startups_en || "-"
            : expert.experience_with_startups_pt || "-",
        languages: expert.experts_languages?.map((language) =>
          lang === "en"
            ? language.languages.name_en
            : language.languages.name_pt
        ),
        languages_code: expert.experts_languages?.map((language) =>
          lang === "en"
            ? language.languages?.code_en || "-"
            : language.languages?.code_pt || "-"
        ),
        work_field: expert.experts_challenges?.map((language) =>
          lang === "en"
            ? language.challenges.name_en
            : language.challenges.name_pt
        ),
      }))
    );

  return NextResponse.json(experts, { status: 201 });
}
