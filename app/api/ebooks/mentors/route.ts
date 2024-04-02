import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

const BUCKET_SGL_EBOOKS = process.env.S3_SGL_EBOOKS;

export type MentorsEbooksProps = {
  id: number;
  title: string;
  img: string;
  link: string;
};

export async function GET(
  req: NextRequest
): Promise<NextResponse<MentorsEbooksProps[]>> {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const mentorsEbooks: MentorsEbooksProps[] = await prisma.ebooks
    .findMany({
      select: {
        id: true,
        title_en: true,
        title_pt: true,
        img_en: true,
        img_pt: true,
        link_en: true,
        link_pt: true,
      },
      where: { type: "EXPERT" },
    })
    .then((mentorsEbooks) =>
      mentorsEbooks.map((mentorEbook) => {
        const ebookTitle =
          lang === "en" ? mentorEbook.title_en : mentorEbook.title_pt;
        const ebookImage =
          lang === "en" ? mentorEbook.img_en : mentorEbook.img_pt;

        const ebookLink =
          lang === "en" ? mentorEbook.link_en : mentorEbook.link_pt;
        return {
          id: mentorEbook.id,
          title: ebookTitle,
          img: `https://${BUCKET_SGL_EBOOKS}.s3.amazonaws.com/${ebookImage}`,
          link: `https://${BUCKET_SGL_EBOOKS}.s3.amazonaws.com/${ebookLink}`,
        };
      })
    );

  return NextResponse.json(mentorsEbooks, { status: 201 });
}
