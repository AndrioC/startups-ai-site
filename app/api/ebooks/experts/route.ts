import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

const BUCKET_SGL_EBOOKS = process.env.S3_SGL_EBOOKS;

export type ExpertsEbooksProps = {
  id: number;
  title: string;
  img: string;
  link: string;
};

export async function GET(
  req: NextRequest
): Promise<NextResponse<ExpertsEbooksProps[]>> {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang");
  const expertsEbooks: ExpertsEbooksProps[] = await prisma.ebooks
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
    .then((expertsEbooks) =>
      expertsEbooks.map((expertEbook) => {
        const ebookTitle =
          lang === "en" ? expertEbook.title_en : expertEbook.title_pt;
        const ebookImage =
          lang === "en" ? expertEbook.img_en : expertEbook.img_pt;

        const ebookLink =
          lang === "en" ? expertEbook.link_en : expertEbook.link_pt;
        return {
          id: expertEbook.id,
          title: ebookTitle,
          img: `https://${BUCKET_SGL_EBOOKS}.s3.amazonaws.com/${ebookImage}`,
          link: `https://${BUCKET_SGL_EBOOKS}.s3.amazonaws.com/${ebookLink}`,
        };
      })
    );

  return NextResponse.json(expertsEbooks, { status: 201 });
}
