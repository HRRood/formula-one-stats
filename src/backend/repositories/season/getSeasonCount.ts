import { prisma } from "@/backend/lib/prisma";

export const getSeasonCount = async () => {
  return await prisma.season.count();
};
