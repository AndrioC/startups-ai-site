"use server";

import { getUserByEmail } from "@/data/user";

export const checkEmailExists = async (email: string, message: string) => {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: message };
  }

  return { success: "New email!" };
};
