import { z } from "zod";
const MAX_FILE_SIZE = 3 * 1024 * 1024;
const MAX_IMAGE_FILE = 1024 * 1024;
export const DataSignUpSchema = (t: (arg: string) => string) =>
  z
    .object({
      fullNameSignUp: z
        .string()
        .min(1, t("startups-form.startup-form-required-field")),
      emailSignUp: z
        .string()
        .min(1, t("startups-form.startup-form-required-field"))
        .email(t("startups-form.startup-form-required-field")),
      passwordSignUp: z
        .string()
        .min(6, t("startups-form.startup-form-password-field")),
      confirmPasswordSignUp: z
        .string()
        .min(6, { message: t("startups-form.startup-form-password-field") }),
    })
    .refine((data) => data.passwordSignUp === data.confirmPasswordSignUp, {
      path: ["confirmPasswordSignUp"],
      message: t("startups-form.startup-form-sign-up.password-does-not-match"),
    });

export const DataAboutStartupsSchema = (t: (arg: string) => string) =>
  z.object({
    startupName: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    vertical: z.string().min(1, t("startups-form.startup-form-required-field")),
    foundationDate: z.date({
      required_error: t("startups-form.startup-form-required-field"),
    }),
    subscriptionNumber: z
      .string()
      .min(3, t("startups-form.startup-form-required-field")),
    referenceLink: z
      .string()
      .min(5, t("startups-form.startup-form-required-field")),
    country: z.string().min(1, t("startups-form.startup-form-required-field")),
    stateAndCity: z
      .string()
      .min(3, t("startups-form.startup-form-required-field")),
    mainResponsibleName: z
      .string()
      .min(3, t("startups-form.startup-form-required-field")),
    mainResponsibleLinkedin: z
      .string()
      .min(10, t("startups-form.startup-form-required-field")),
    contactNumber: z
      .string()
      .min(5, t("startups-form.startup-form-required-field")),
    mainResponsibleEmail: z
      .string()
      .min(1, t("startups-form.startup-form-required-field"))
      .email(t("startups-form.startup-form-email-field")),
    startupObjectives: z.array(z.string()).refine((data) => data.length > 0, {
      message: t("startups-form.startup-form-challenges-field"),
    }),
    connectionsOnlyOnStartupCountryOrigin: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    partnersQuantity: z.coerce
      .number()
      .min(1, t("startups-form.startup-form-required-field")),
    partnersPositionRelation: z
      .string()
      .min(3, t("startups-form.startup-form-required-field")),
    exclusiveDedicationPartner: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    employeesQuantity: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    fullTimeEmployeesQuantity: z.coerce
      .number()
      .min(1, t("startups-form.startup-form-required-field")),
    businessModel: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    operationalStage: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    startupChallenges: z.array(z.string()).refine((data) => data.length > 0, {
      message: t("startups-form.startup-form-challenges-field"),
    }),
    isDeepTech: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    loadPitchDeck: z
      .custom<File | undefined>((v) => v instanceof File || v === undefined, {
        message: t("startups-form.startup-form-required-field"),
      })
      .refine((v) => v !== undefined && v.name !== "" && v.size > 0, {
        message: t("startups-form.startup-form-required-field"),
      })
      .refine((file) => {
        if (file) {
          return file.size <= MAX_FILE_SIZE;
        }
        return true;
      }, t("startups-form.error-when-file-is-too-large")),
    loadLogo: z
      .custom<File | undefined>((v) => v instanceof File || v === undefined, {
        message: t("startups-form.startup-form-required-field"),
      })
      .refine((v) => v !== undefined && v.name !== "" && v.size > 0, {
        message: t("startups-form.startup-form-required-field"),
      })
      .refine((file) => {
        if (file) {
          return file.size <= MAX_IMAGE_FILE;
        }
        return true;
      }, t("startups-form.error-when-image-is-too-large")),
    shortDescription: z
      .string()
      .min(10, t("startups-form.startup-form-required-field")),
    valueProposal: z
      .string()
      .min(10, t("startups-form.startup-form-required-field")),
  });

//Todos já são opcionais
export const DataMaturationLevelDeepTechSchema = z.object({
  maturityLevel: z.string().optional(),
  hasPatent: z.string().optional(),
  patentAndCode: z.string().optional(),
});

export const DataServiceProductSchema = (t: (arg: string) => string) =>
  z.object({
    startupProductService: z
      .array(z.string())
      .refine((data) => data.length > 0, {
        message: t("startups-form.startup-form-challenges-field"),
      }),
    problemThatIsSolved: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    competitors: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    competitiveDifferentiator: z
      .string()
      .min(5, t("startups-form.startup-form-required-field")),
    quantityOdsGoals: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
  });

export const DataAboutTeam = (t: (arg: string) => string) =>
  z.object({
    partnersHaveAlreadyBeenInOtherBusiness: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    parnertsHaveComplementaryAreaOfActivity: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    oneOrMoreDedicationPartner: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    oneOrMorePartnersHasProvenExperience: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
  });

export const DataAboutGovernance = (t: (arg: string) => string) =>
  z.object({
    isStartupOfficiallyRegistered: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    isTherePartnersAgreementSigned: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    haveLegalAdvice: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    haveAccountingConsultancy: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    relationshipsRegisteredInContract: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
  });

export const DataAboutFinanceAndMarket = (t: (arg: string) => string) =>
  z.object({
    customersQuantity: z
      .string()
      .min(0, t("startups-form.startup-form-required-field")),
    lastRevenue: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    lastSixMonthsRevenue: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    lastTwelveMonthsRevenue: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    alreadyRaisedInvestment: z
      .string()
      .min(1, t("startups-form.startup-form-required-field")),
    //os dois abaixo são opcionais
    amountRaised: z.coerce.number().optional(),
    howMuchEquityWasDistributed: z.coerce.string().optional(),
  });
