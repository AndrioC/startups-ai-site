import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

import { FormData } from "@/contexts/FormContext";
import prisma from "@/prisma/client";

const s3Client = new S3Client({
  region: process.env.S3_REGION as string,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET_KEY as string,
  },
});

const STARTUPS_LOGO_BUCKET = process.env
  .S3_STARTUP_LOGO_IMGS_BUCKET_NAME as string;
const STARTUPS_PITCH_BUCKET = process.env
  .S3_STARTUP_PITCH_DECK_FILES_BUCKET_NAME as string;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const dataString = formData.get("data") as string;
    const data = JSON.parse(dataString) as FormData;
    const fileLogo = formData.get("file-logo") as unknown as File;
    const filePitch = formData.get("file-pitch") as unknown as File;

    const bufferLogoImage = Buffer.from(await fileLogo.arrayBuffer());
    const logoImageFileName = await uploadFileToS3(
      bufferLogoImage,
      fileLogo.name,
      STARTUPS_LOGO_BUCKET
    );

    const bufferPitchDeck = Buffer.from(await filePitch.arrayBuffer());
    const pitchDeckFileName = await uploadFileToS3(
      bufferPitchDeck,
      filePitch.name,
      STARTUPS_PITCH_BUCKET
    );

    const startup = await prisma.startups.create({
      data: {
        organization_id: 3,
        name: data.startupName,
        vertical_id: Number(data.vertical),
        foundation_date: data.foundationDate,
        subscription_number: data.subscriptionNumber,
        reference_link: data.referenceLink,
        country_id: Number(data.country),
        state_city: data.stateAndCity,
        main_responsible_name: data.mainResponsibleName,
        main_responsible_linkedin: data.mainResponsibleLinkedin,
        contact_number: data.contactNumber,
        main_responsible_email: data.mainResponsibleEmail,
        connections_only_on_origin_country:
          data.connectionsOnlyOnStartupCountryOrigin,
        partners_quantity: data.partnersQuantity,
        partners_position_relation: data.partnersPositionRelation,
        exclusive_dedication_partner: data.exclusiveDedicationPartner,
        employees_quantity: Number(data.employeesQuantity),
        fulltime_employees_quantity: Number(data.fullTimeEmployeesQuantity),
        business_model_id: Number(data.businessModel),
        operation_stage_id: Number(data.operationalStage),
        is_deep_tech: data.isDeepTech,
        pitch_deck: pitchDeckFileName,
        logo_img: logoImageFileName,
        short_description_en: data.shortDescription,
        short_description_pt: data.shortDescription,
        value_proposal_en: data.valueProposal,
        value_proposal_pt: data.valueProposal,
        maturity_level_id: Number(data.maturityLevel) || null,
        has_patent: data.hasPatent,
        patent_and_code: data.patentAndCode,
        problem_that_is_solved_en: data.problemThatIsSolved,
        problem_that_is_solved_pt: data.problemThatIsSolved,
        competitors: data.competitors,
        competitive_differentiator_en: data.competitiveDifferentiator,
        competitive_differentiator_pt: data.competitiveDifferentiator,
        quantity_ods_goals: Number(data.quantityOdsGoals),
        partners_have_already_been_in_other_business:
          data.partnersHaveAlreadyBeenInOtherBusiness,
        partners_have_complementary_area_of_activity:
          data.partnersHaveAlreadyBeenInOtherBusiness,
        one_or_more_dedication_partner: data.oneOrMoreDedicationPartner,
        one_or_more_partners_has_proven_experience:
          data.oneOrMorePartnersHasProvenExperience,
        is_startup_officially_registered: data.isStartupOfficiallyRegistered,
        is_there_partners_agreement_signed: data.isTherePartnersAgreementSigned,
        have_legal_advice: data.haveLegalAdvice,
        have_accounting_advice: data.haveAccountingConsultancy,
        relationships_registered_in_contract:
          data.relationshipsRegisteredInContract,
        customers_quantity: Number(data.customersQuantity),
        last_revenue: Number(data.lastRevenue),
        last_six_months_revenue: Number(data.lastSixMonthsRevenue),
        last_twelve_months_revenue: Number(data.lastTwelveMonthsRevenue),
        already_raised_investment: data.alreadyRaisedInvestment,
        amount_raised: Number(data.amountRaised),
        how_much_equity_was_distributed: data.subscriptionNumber,
      },
    });

    const hashedPassword = await bcryptjs.hash(data.passwordSignUp, 10);
    await prisma.user.create({
      data: {
        organization_id: startup.organization_id,
        startup_id: startup.id,
        name: data.fullNameSignUp,
        email: data.emailSignUp,
        hashed_password: hashedPassword,
      },
    });

    const objectivesData = data.startupObjectives.map((value) => ({
      startup_id: startup.id,
      objective_id: Number(value),
    }));

    const challegensData = data.startupChallenges.map((value) => ({
      startup_id: startup.id,
      challenge_id: Number(value),
    }));

    const serviceProductsData = data.startupProductService.map((value) => ({
      startup_id: startup.id,
      service_products_id: Number(value),
    }));

    await prisma.startup_objectives.createMany({
      data: objectivesData,
    });

    await prisma.startup_challenges.createMany({
      data: challegensData,
    });

    await prisma.startup_service_products.createMany({
      data: serviceProductsData,
    });

    return NextResponse.json({ status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error, code: 500 }, { status: 500 });
  }
}

async function uploadFileToS3(
  file: Buffer,
  fileName: string,
  bucket_name: string
): Promise<string> {
  const fileBuffer = file;

  const params = {
    Bucket: bucket_name,
    Key: `${Date.now()}-${fileName}`,
    Body: fileBuffer,
    ContentType: "application/octet-stream",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  return fileName;
}
