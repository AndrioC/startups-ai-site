import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

export type MentorSummary = {
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
): Promise<NextResponse<MentorSummary[]>> {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const mentors: MentorSummary[] = await prisma.experts
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
    .then((mentors) =>
      mentors.map((mentor) => ({
        id: mentor.id,
        name: mentor.name,
        country:
          lang === "en"
            ? mentor.country?.name_en || "-"
            : mentor.country?.name_pt || "-",
        country_flag: `https://${BUCKET_FLAGS_NAME}.s3.amazonaws.com/${mentor.country?.code}.svg`,
        linkedin: mentor.linkedin,
        picture_img_url: `https://${BUCKET_EXPERTS_LOGO}.s3.amazonaws.com/${mentor.picture_img}`,
        description:
          lang === "en"
            ? mentor.experience_with_startups_en || "-"
            : mentor.experience_with_startups_pt || "-",
        languages: mentor.experts_languages?.map((language) =>
          lang === "en"
            ? language.languages.name_en
            : language.languages.name_pt
        ),
        languages_code: mentor.experts_languages?.map((language) =>
          lang === "en"
            ? language.languages?.code_en || "-"
            : language.languages?.code_pt || "-"
        ),
        work_field: mentor.experts_challenges?.map((language) =>
          lang === "en"
            ? language.challenges.name_en
            : language.challenges.name_pt
        ),
      }))
    );

  return NextResponse.json(mentors, { status: 201 });
}
