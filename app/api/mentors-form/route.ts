import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { UserType } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

import { FormExpertData } from "@/contexts/FormExpertContext";
import { calculateFreeSubscriptionExpirationDate } from "@/lib/free-subscription";
import prisma from "@/prisma/client";

const s3Client = new S3Client({
  region: process.env.S3_REGION as string,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET_KEY as string,
  },
});

const EXPERTS_LOGO_BUCKET = process.env
  .S3_EXPERTS_LOGO_IMGS_BUCKET_NAME as string;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const dataString = formData.get("data") as string;
    const data = JSON.parse(dataString) as FormExpertData;
    const fileLogo = formData.get("file-logo") as unknown as File;

    // Iniciar transação Prisma
    const createdExpert = await prisma.$transaction(async (prisma) => {
      const expert = await prisma.experts.create({
        data: {
          organization_id: 3,
          name: data.expertName,
          dob: data.expertDob,
          gender_id: Number(data.expertGender),
          country_id: Number(data.expertCountry),
          state_city: data.expertCityState,
          linkedin: data.expertLinkedin,
          contact_number: data.expertContactNumber,
          contact_email: data.expertContactEmail,
          level_of_education_id: Number(data.expertLevelOfEducation),
          picture_img: "",
          occupation_id: Number(data.occupation),
          company: data.company,
          position_held: data.positionHeld,
          experience_time_id: Number(data.experienceTime),
          experience_with_startups_pt: data.experienceWithStartups,
          experience_with_startups_en: data.experienceWithStartups,
          participation_acceleration_program:
            data.participationAccelerationProgram,
          free_subscription_expires_at:
            calculateFreeSubscriptionExpirationDate(),
        },
      });

      const hashedPassword = await bcryptjs.hash(data.passwordSignUp, 10);
      await prisma.user.create({
        data: {
          organization_id: expert.organization_id,
          expert_id: expert.id,
          name: data.fullNameSignUp,
          email: data.emailSignUp,
          hashed_password: hashedPassword,
          type: UserType.EXPERT,
        },
      });

      const languagesData = data.languages.map((value) => ({
        expert_id: expert.id,
        language_id: Number(value),
      }));

      const challengesData = data.expertiseAreas.map((value) => ({
        expert_id: expert.id,
        challenge_id: Number(value),
      }));

      const verticalData = data.verticalsConsultancy.map((value) => ({
        expert_id: expert.id,
        vertical_id: Number(value),
      }));

      await prisma.experts_languages.createMany({
        data: languagesData,
      });

      await prisma.experts_challenges.createMany({
        data: challengesData,
      });

      await prisma.experts_vertical.createMany({
        data: verticalData,
      });

      return expert;
    });

    const bufferLogoImage = Buffer.from(await fileLogo.arrayBuffer());
    const logoImageFileName = await uploadFileToS3(
      bufferLogoImage,
      data.expertName + "_logo_img",
      EXPERTS_LOGO_BUCKET
    );

    await prisma.experts.update({
      where: { id: createdExpert.id },
      data: {
        picture_img: logoImageFileName,
      },
    });

    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error: error || "Erro desconhecido", code: 500 },
      { status: 500 }
    );
  }
}

async function uploadFileToS3(
  file: Buffer,
  fileName: string,
  bucket_name: string
): Promise<string> {
  const fileBuffer = file;
  const newFileName = `${Date.now()}-${createSlug(fileName)}`;

  const params = {
    Bucket: bucket_name,
    Key: newFileName,
    Body: fileBuffer,
    ContentType: "application/octet-stream",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  return newFileName;
}

function createSlug(name: string): string {
  const slug = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");

  return slug;
}
