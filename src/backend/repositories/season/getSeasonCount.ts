import { prisma } from "@/lib/prisma";

export const getSeasonCount = async () => {
  return await prisma.season.count();
};
