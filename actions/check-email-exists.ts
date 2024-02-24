"use server";

import { UserType } from "@prisma/client";

import { getUserByEmail } from "@/data/user";

export const checkEmailExists = async (
  email: string,
  message: string,
  type: UserType
) => {
  const existingUser = await getUserByEmail(email, type);

  if (existingUser) {
    return { error: message };
  }

  return { success: "New email!" };
};
