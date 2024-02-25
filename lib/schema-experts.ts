import { z } from "zod";
const MAX_IMAGE_FILE = 1024 * 1024;
export const DataExpertsSignUpSchema = (t: (arg: string) => string) =>
  z
    .object({
      fullNameSignUp: z
        .string()
        .min(1, t("experts-form.experts-form-required-field")),
      emailSignUp: z
        .string()
        .min(1, t("experts-form.experts-form-required-field"))
        .email(t("experts-form.experts-form-required-field")),
      passwordSignUp: z
        .string()
        .min(6, t("experts-form.experts-form-password-field")),
      confirmPasswordSignUp: z
        .string()
        .min(6, { message: t("experts-form.experts-form-password-field") }),
    })
    .refine((data) => data.passwordSignUp === data.confirmPasswordSignUp, {
      path: ["confirmPasswordSignUp"],
      message: t("experts-form.experts-form-sign-up.password-does-not-match"),
    });

export const DataPersonalDataSchema = (t: (arg: string) => string) =>
  z.object({
    expertName: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
    expertGender: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
    expertDob: z.date({
      required_error: t("experts-form.experts-form-required-field"),
    }),
    expertCountry: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
    expertCityState: z
      .string()
      .min(3, t("experts-form.experts-form-required-field")),
    expertLinkedin: z
      .string()
      .min(5, t("experts-form.experts-form-required-field")),
    expertContactNumber: z
      .string()
      .min(5, t("experts-form.experts-form-required-field")),
    expertContactEmail: z
      .string()
      .min(1, t("experts-form.experts-form-required-field"))
      .email(t("experts-form.experts-form-email-field")),
    expertLevelOfEducation: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
    expertPictureImage: z
      .custom<File | undefined>((v) => v instanceof File || v === undefined, {
        message: t("experts-form.experts-form-required-field"),
      })
      .refine((v) => v !== undefined && v.name !== "" && v.size > 0, {
        message: t("experts-form.experts-form-required-field"),
      })
      .refine((file) => {
        if (file) {
          return file.size <= MAX_IMAGE_FILE;
        }
        return true;
      }, t("experts-form.error-when-image-is-too-large")),
  });

export const DataProfessionalDataSchema = (t: (arg: string) => string) =>
  z.object({
    occupation: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
    company: z.string().min(1, t("experts-form.experts-form-required-field")),
    positionHeld: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
    experienceTime: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
  });

export const DataStartupsConsultancySchema = (t: (arg: string) => string) =>
  z.object({
    experienceWithStartups: z.string(),
    languages: z.array(z.string()).refine((data) => data.length > 0, {
      message: t("experts-form.experts-form-select-at-least-one-field"),
    }),
    participationAccelerationProgram: z
      .string()
      .min(1, t("experts-form.experts-form-required-field")),
    expertiseAreas: z.array(z.string()).refine((data) => data.length > 0, {
      message: t("experts-form.experts-form-select-at-least-one-field"),
    }),
    verticalsConsultancy: z
      .array(z.string())
      .refine((data) => data.length > 0, {
        message: t("experts-form.experts-form-select-at-least-one-field"),
      }),
  });
