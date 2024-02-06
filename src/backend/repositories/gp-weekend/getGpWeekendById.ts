import { prisma } from "@/backend/lib/prisma";
import { GpWeekend } from "@/backend/types/dbTypes";

export const getGpWeekendById = async (id: string) => {
  const data = await prisma.gpWeekend.findUnique({
    where: {
      id: id,
    },
    include: {
      Season: true,
    },
  });

  if (!data) {
    return null;
  }

  return data as GpWeekend;
};
