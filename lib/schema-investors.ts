import { z } from "zod";
const MAX_IMAGE_FILE = 1024 * 1024;
export const DataInvestorsSignUpSchema = (t: (arg: string) => string) =>
  z
    .object({
      fullNameSignUp: z
        .string()
        .min(1, t("investors-form.investor-form-required-field")),
      emailSignUp: z
        .string()
        .min(1, t("investors-form.investor-form-required-field"))
        .email(t("investors-form.investor-form-required-field")),
      passwordSignUp: z
        .string()
        .min(6, t("investors-form.investor-form-password-field")),
      confirmPasswordSignUp: z
        .string()
        .min(6, { message: t("investors-form.investor-form-password-field") }),
    })
    .refine((data) => data.passwordSignUp === data.confirmPasswordSignUp, {
      path: ["confirmPasswordSignUp"],
      message: t(
        "investors-form.investor-form-sign-up.password-does-not-match"
      ),
    });

export const DataGeneralDataSchema = (t: (arg: string) => string) =>
  z.object({
    investorName: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    investorFoundationDate: z.date({
      required_error: t("investors-form.investor-form-required-field"),
    }),
    investorCountry: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    investorStateAndCity: z
      .string()
      .min(3, t("investors-form.investor-form-required-field")),
    investorContactName: z
      .string()
      .min(3, t("investors-form.investor-form-required-field")),
    investorContactEmail: z
      .string()
      .min(1, t("investors-form.investor-form-required-field"))
      .email(t("investors-form.investor-form-email-field")),
    investorContactNumber: z
      .string()
      .min(5, t("investors-form.investor-form-required-field")),
    investorWebSite: z
      .string()
      .min(10, t("investors-form.investor-form-required-field")),
    investorLinkedin: z
      .string()
      .min(5, t("investors-form.investor-form-required-field")),
  });

export const DataAboutManegamentSchema = (t: (arg: string) => string) =>
  z.object({
    investimentStages: z.array(z.string()).refine((data) => data.length > 0, {
      message: t("investors-form.investor-form-select-at-least-one-field"),
    }),
    technologiesOfInterest: z
      .array(z.string())
      .refine((data) => data.length > 0, {
        message: t("investors-form.investor-form-select-at-least-one-field"),
      }),
    businessModelOfInterest: z
      .array(z.string())
      .refine((data) => data.length > 0, {
        message: t("investors-form.investor-form-select-at-least-one-field"),
      }),
    operationalStageOfInterest: z
      .array(z.string())
      .refine((data) => data.length > 0, {
        message: t("investors-form.investor-form-select-at-least-one-field"),
      }),
    minimalInvestment: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    averageInvestiment: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    maximumInvestiment: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    preRequisiteTeam: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    onlyInvestingStartupOriginCountry: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    loadInvestorLogo: z
      .custom<File | undefined>((v) => v instanceof File || v === undefined, {
        message: t("investors-form.investor-form-required-field"),
      })
      .refine((v) => v !== undefined && v.name !== "" && v.size > 0, {
        message: t("investors-form.investor-form-required-field"),
      })
      .refine((file) => {
        if (file) {
          return file.size <= MAX_IMAGE_FILE;
        }
        return true;
      }, t("investors-form.error-when-image-is-too-large")),
    miniDescription: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    investimentText: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    exampleInvestedStartups: z.string(),
    isPatentRequired: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    inCaseOfDeepTech: z.string(),
  });

export const DataMatchMakingSchema = (t: (arg: string) => string) =>
  z.object({
    mainCriteriaEvaluatingStartup: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    addedValuesToStartups: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    expectationsInvestimentReturn: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    openToCoInvestWithOtherFunds: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
    haveInternationalExperienceWithStartups: z
      .string()
      .min(1, t("investors-form.investor-form-required-field")),
  });
