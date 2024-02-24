import { UserType } from "@prisma/client";

import prisma from "@/prisma/client";

export const getUserByEmail = async (email: string, type: UserType) => {
  try {
    const user = await prisma.user.findFirst({ where: { email, type } });
    return user;
  } catch {
    return null;
  }
};
