import { prisma } from "@/backend/lib/prisma";

export const getSeasonGpWeekends = async (id: string) => {
  return await prisma.gpWeekend.findMany({
    where: {
      Season: {
        id: id,
      },
    },
    include: {
      Season: true,
    },
  });
};
