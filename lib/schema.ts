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
    startupName: z.string().min(1, t("startup-form-required-field")).optional(),
    vertical: z.string().min(1, t("startup-form-required-field")).optional(),
    foundationDate: z
      .date({
        required_error: t("startup-form-required-field"),
      })
      .optional(),
    subscriptionNumber: z
      .string()
      .min(3, t("startup-form-required-field"))
      .optional(),
    referenceLink: z
      .string()
      .min(5, t("startup-form-required-field"))
      .optional(),
    country: z.string().min(1, t("startup-form-required-field")).optional(),
    stateAndCity: z
      .string()
      .min(3, t("startup-form-required-field"))
      .optional(),
    mainResponsibleName: z
      .string()
      .min(3, t("startup-form-required-field"))
      .optional(),
    mainResponsibleLinkedin: z
      .string()
      .min(10, t("startup-form-required-field"))
      .optional(),
    contactNumber: z
      .string()
      .min(5, t("startup-form-required-field"))
      .optional(),
    mainResponsibleEmail: z
      .string()
      .min(1, t("startup-form-required-field"))
      .email(t("startup-form-email-field"))
      .optional(),
    partnersQuantity: z.coerce
      .number()
      .min(1, t("startup-form-required-field"))
      .optional(),
    partnersPositionRelation: z
      .string()
      .min(3, t("startup-form-required-field"))
      .optional(),
    exclusiveDedicationPartner: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    employeesQuantity: z.coerce
      .number()
      .min(1, t("startup-form-required-field"))
      .optional(),
    fullTimeEmployeesQuantity: z.coerce
      .number()
      .min(1, t("startup-form-required-field"))
      .optional(),
    businessModel: z
      .string()
      .min(3, t("startup-form-required-field"))
      .optional(),
    operationalStage: z
      .string()
      .min(3, t("startup-form-required-field"))
      .optional(),
    startupChallenges: z
      .array(z.string())
      .refine((data) => data.length > 0, {
        message: t("startup-form-challenges-field"),
      })
      .optional(),
    isDeepTech: z.string().min(3, t("startup-form-required-field")).optional(),
    loadPitchDeck: z
      .custom<File>((v) => v instanceof File, {
        message: t("startup-form-required-field"),
      })
      .optional(),
    loadLogo: z
      .custom<File>((v) => v instanceof File, {
        message: t("startup-form-required-field"),
      })
      .optional(),
    shortDescription: z
      .string()
      .min(10, t("startup-form-required-field"))
      .optional(),
    valueProposal: z
      .string()
      .min(10, t("startup-form-required-field"))
      .optional(),
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
      })
      .optional(),
    problemThatIsSolved: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    competitors: z.string().min(3, t("startup-form-required-field")).optional(),
    competitiveDifferentiator: z
      .string()
      .min(5, t("startup-form-required-field"))
      .optional(),
    quantityOdsGoals: z.coerce
      .number()
      .min(0, t("startup-form-required-field"))
      .optional(),
  });

export const DataAboutTeam = (t: (arg: string) => string) =>
  z.object({
    partnersHaveAlreadyBeenInOtherBusiness: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    parnertsHaveComplementaryAreaOfActivity: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    oneOrMoreDedicationPartner: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    oneOrMorePartnersHasProvenExperience: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
  });

export const DataAboutGovernance = (t: (arg: string) => string) =>
  z.object({
    isStartupOfficiallyRegistered: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    isTherePartnersAgreementSigned: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    haveLegalAdvice: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    haveAccountingConsultancy: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    relationshipsRegisteredInContract: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
  });

export const DataAboutFinanceAndMarket = (t: (arg: string) => string) =>
  z.object({
    customersQuantity: z.coerce
      .number()
      .min(0, t("startup-form-required-field"))
      .optional(),
    lastRevenue: z.coerce
      .number()
      .min(0, t("startup-form-required-field"))
      .optional(),
    lastSixMonthsRevenue: z.coerce
      .number()
      .min(0, t("startup-form-required-field"))
      .optional(),
    lastTwelveMonthsRevenue: z.coerce
      .number()
      .min(0, t("startup-form-required-field"))
      .optional(),
    alreadyRaisedInvestment: z
      .string()
      .min(1, t("startup-form-required-field"))
      .optional(),
    //os dois abaixo são opcionais
    amountRaised: z.coerce.string().optional(),
    howMuchEquityWasDistributed: z.coerce.string().optional(),
  });
