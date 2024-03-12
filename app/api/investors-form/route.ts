import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { UserType } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

import { FormInvestorData } from "@/contexts/FormInvestorContext";
import { calculateFreeSubscriptionExpirationDate } from "@/lib/free-subscription";
import prisma from "@/prisma/client";

const s3Client = new S3Client({
  region: process.env.S3_REGION as string,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET_KEY as string,
  },
});

const INVESTORS_LOGO_BUCKET = process.env
  .S3_INVESTORS_LOGO_IMGS_BUCKET_NAME as string;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const dataString = formData.get("data") as string;
    const data = JSON.parse(dataString) as FormInvestorData;
    const fileLogo = formData.get("file-logo") as unknown as File;

    // Iniciar transação Prisma
    const createdInvestor = await prisma.$transaction(async (prisma) => {
      const investor = await prisma.investors.create({
        data: {
          organization_id: 3,
          name: data.investorName,
          foundation_date: data.investorFoundationDate,
          country_id: Number(data.investorCountry),
          state_city: data.investorStateAndCity,
          contact_name: data.investorContactName,
          contact_email: data.investorContactEmail,
          contact_number: data.investorContactNumber,
          website: data.investorWebSite,
          linkedin: data.investorLinkedin,
          minimal_investment: data.minimalInvestment,
          average_investiment: data.averageInvestiment,
          maximum_investiment: data.maximumInvestiment,
          pre_requisite_team: data.preRequisiteTeam,
          only_investing_startup_origin_country:
            data.onlyInvestingStartupOriginCountry,
          logo_img: "",
          mini_description_en: data.miniDescription,
          mini_description_pt: data.miniDescription,
          investiment_text: data.investimentText,
          example_invested_startups: data.exampleInvestedStartups,
          is_patent_required: data.isPatentRequired,
          in_case_of_deep_tech: data.inCaseOfDeepTech,
          main_criteria_evaluating_startup: data.mainCriteriaEvaluatingStartup,
          added_values_to_startups: data.addedValuesToStartups,
          expectations_investiment_return: data.expectationsInvestimentReturn,
          open_to_co_invest_with_other_funds: data.openToCoInvestWithOtherFunds,
          have_international_experience_with_startups:
            data.haveInternationalExperienceWithStartups,
          free_subscription_expires_at:
            calculateFreeSubscriptionExpirationDate(),
        },
      });

      const hashedPassword = await bcryptjs.hash(data.passwordSignUp, 10);
      await prisma.user.create({
        data: {
          organization_id: investor.organization_id,
          investor_id: investor.id,
          name: data.fullNameSignUp,
          email: data.emailSignUp,
          hashed_password: hashedPassword,
          type: UserType.INVESTOR,
        },
      });

      const investimentStagesData = data.investimentStages.map((value) => ({
        investor_id: investor.id,
        investment_stage_id: Number(value),
      }));

      const techOfInterestData = data.technologiesOfInterest.map((value) => ({
        investor_id: investor.id,
        vertical_id: Number(value),
      }));

      const businessModelOfInterest = data.businessModelOfInterest.map(
        (value) => ({
          investor_id: investor.id,
          business_id: Number(value),
        })
      );

      const operationalStagesOfInterest = data.operationalStageOfInterest.map(
        (value) => ({
          investor_id: investor.id,
          maturity_level_id: Number(value),
        })
      );

      await prisma.investor_investiment_stages.createMany({
        data: investimentStagesData,
      });

      await prisma.investor_vertical.createMany({
        data: techOfInterestData,
      });

      await prisma.investor_business_model.createMany({
        data: businessModelOfInterest,
      });

      await prisma.investor_maturity_level.createMany({
        data: operationalStagesOfInterest,
      });

      return investor;
    });

    const bufferLogoImage = Buffer.from(await fileLogo.arrayBuffer());
    const logoImageFileName = await uploadFileToS3(
      bufferLogoImage,
      data.investorName + "_logo_img",
      INVESTORS_LOGO_BUCKET
    );

    await prisma.investors.update({
      where: { id: createdInvestor.id },
      data: {
        logo_img: logoImageFileName,
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
