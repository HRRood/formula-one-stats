import { prisma } from "@/backend/lib/prisma";

export const getSeasonById = async (id: string) => {
  return await prisma.season.findUnique({
    where: {
      id: id,
    },
  });
};
