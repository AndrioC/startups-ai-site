import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

const BUCKET_SGL_EBOOKS = process.env.S3_SGL_EBOOKS;

export type StartupsEbooksProps = {
  id: number;
  title: string;
  img: string;
  link: string;
};

export async function GET(
  req: NextRequest
): Promise<NextResponse<StartupsEbooksProps[]>> {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const startupsEbooks: StartupsEbooksProps[] = await prisma.ebooks
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
      where: { type: "STARTUP" },
    })
    .then((startupsEbooks) =>
      startupsEbooks.map((startupEbook) => {
        const ebookTitle =
          lang === "en" ? startupEbook.title_en : startupEbook.title_pt;
        const ebookImage =
          lang === "en" ? startupEbook.img_en : startupEbook.img_pt;

        const ebookLink =
          lang === "en" ? startupEbook.link_en : startupEbook.link_pt;
        return {
          id: startupEbook.id,
          title: ebookTitle,
          img: `https://${BUCKET_SGL_EBOOKS}.s3.amazonaws.com/${ebookImage}`,
          link: `https://${BUCKET_SGL_EBOOKS}.s3.amazonaws.com/${ebookLink}`,
        };
      })
    );

  return NextResponse.json(startupsEbooks, { status: 201 });
}
