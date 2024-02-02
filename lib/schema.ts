import { z } from "zod";

export const DataSignUpSchema = (t: (arg: string) => string) =>
  z
    .object({
      fullNameSignUp: z.string().min(1, t("startup-form-required-field")),
      emailSignUp: z
        .string()
        .min(1, t("startup-form-required-field"))
        .email(t("startup-form-required-field")),
      passwordSignUp: z.string().min(6, t("startup-form-password-field")),
      confirmPasswordSignUp: z
        .string()
        .min(6, { message: t("startup-form-password-field") }),
    })
    .refine((data) => data.passwordSignUp === data.confirmPasswordSignUp, {
      path: ["confirmPasswordSignUp"],
      message: t("startup-form-sign-up.password-does-not-match"),
    });

export const FormDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
});

export const DataAboutStartupsSchema = (t: (arg: string) => string) =>
  z.object({
    startupName: z.string().min(1, t("startup-form-required-field")),
    vertical: z.string().min(1, t("startup-form-required-field")),
    foundationDate: z.date({
      required_error: t("startup-form-required-field"),
    }),
    subscriptionNumber: z.string().min(3, t("startup-form-required-field")),
    referenceLink: z.string().min(5, t("startup-form-required-field")),
    country: z.string().min(1, t("startup-form-required-field")),
    stateAndCity: z.string().min(3, t("startup-form-required-field")),
    mainResponsibleName: z.string().min(3, t("startup-form-required-field")),
    mainResponsibleLinkedin: z
      .string()
      .min(10, t("startup-form-required-field")),
    contactNumber: z.string().min(5, t("startup-form-required-field")),
    mainResponsibleEmail: z
      .string()
      .min(1, t("startup-form-required-field"))
      .email(t("startup-form-email-field")),
    partnersQuantity: z.coerce
      .number()
      .min(1, t("startup-form-required-field")),
    partnersPositionRelation: z
      .string()
      .min(3, t("startup-form-required-field")),
    exclusiveDedicationPartner: z
      .string()
      .min(1, t("startup-form-required-field")),
    employeesQuantity: z.coerce
      .number()
      .min(1, t("startup-form-required-field")),
    fullTimeEmployeesQuantity: z.coerce
      .number()
      .min(1, t("startup-form-required-field")),
    businessModel: z.string().min(3, t("startup-form-required-field")),
    operationalStage: z.string().min(3, t("startup-form-required-field")),
    startupChallenges: z.array(z.string()).refine((data) => data.length > 0, {
      message: t("startup-form-challenges-field"),
    }),
    isDeepTech: z.string().min(3, t("startup-form-required-field")),
    loadPitchDeck: z
      .custom<File | undefined>((v) => v instanceof File || v === undefined, {
        message: t("startup-form-required-field"),
      })
      .refine((v) => v !== undefined && v.name !== "" && v.size > 0, {
        message: t("startup-form-required-field"),
      }),
    loadLogo: z
      .custom<File | undefined>((v) => v instanceof File || v === undefined, {
        message: t("startup-form-required-field"),
      })
      .refine((v) => v !== undefined && v.name !== "" && v.size > 0, {
        message: t("startup-form-required-field"),
      }),
    shortDescription: z.string().min(10, t("startup-form-required-field")),
    valueProposal: z.string().min(10, t("startup-form-required-field")),
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
        message: t("startup-form-challenges-field"),
      }),
    problemThatIsSolved: z.string().min(1, t("startup-form-required-field")),
    competitors: z.string().min(3, t("startup-form-required-field")),
    competitiveDifferentiator: z
      .string()
      .min(5, t("startup-form-required-field")),
    quantityOdsGoals: z.coerce
      .number()
      .min(0, t("startup-form-required-field")),
  });

export const DataAboutTeam = (t: (arg: string) => string) =>
  z.object({
    partnersHaveAlreadyBeenInOtherBusiness: z
      .string()
      .min(1, t("startup-form-required-field")),
    parnertsHaveComplementaryAreaOfActivity: z
      .string()
      .min(1, t("startup-form-required-field")),
    oneOrMoreDedicationPartner: z
      .string()
      .min(1, t("startup-form-required-field")),
    oneOrMorePartnersHasProvenExperience: z
      .string()
      .min(1, t("startup-form-required-field")),
  });

export const DataAboutGovernance = (t: (arg: string) => string) =>
  z.object({
    isStartupOfficiallyRegistered: z
      .string()
      .min(1, t("startup-form-required-field")),
    isTherePartnersAgreementSigned: z
      .string()
      .min(1, t("startup-form-required-field")),
    haveLegalAdvice: z.string().min(1, t("startup-form-required-field")),
    haveAccountingConsultancy: z
      .string()
      .min(1, t("startup-form-required-field")),
    relationshipsRegisteredInContract: z
      .string()
      .min(1, t("startup-form-required-field")),
  });

export const DataAboutFinanceAndMarket = (t: (arg: string) => string) =>
  z.object({
    customersQuantity: z.coerce
      .number()
      .min(0, t("startup-form-required-field")),
    lastRevenue: z.coerce.number().min(0, t("startup-form-required-field")),
    lastSixMonthsRevenue: z.coerce
      .number()
      .min(0, t("startup-form-required-field")),
    lastTwelveMonthsRevenue: z.coerce
      .number()
      .min(0, t("startup-form-required-field")),
    alreadyRaisedInvestment: z
      .string()
      .min(1, t("startup-form-required-field")),
    //os dois abaixo são opcionais
    amountRaised: z.coerce.string().optional(),
    howMuchEquityWasDistributed: z.coerce.string().optional(),
  });
