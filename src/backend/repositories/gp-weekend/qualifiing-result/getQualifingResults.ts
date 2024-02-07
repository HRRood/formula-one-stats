import { prisma } from "@/backend/lib/prisma";
import { GpWeekend } from "@prisma/client";

export const getQualifingResults = async (gpWeekendId: string) => {
  const data = await prisma.qualifyingResult.findMany({
    where: {
      gpWeekendId,
    },
    orderBy: {
      position: "asc",
    },
    include: {
      Driver: {
        include: {
          DriverInfo: true,
        },
      },
    },
  });

  return data;
};
