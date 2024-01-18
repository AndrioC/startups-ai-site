"use server";
import { sendEmailFromWebSite } from "@/lib/email";

export const sendEmailFromContact = async (
  name: string,
  contact_email: string,
  message: string
) => {
  await sendEmailFromWebSite(name, contact_email, message);
};
