import { prisma } from "@/backend/lib/prisma";

export const getConstructorCount = async () => {
  return await prisma.constructorTeam.count();
};
