import { prisma } from "@/backend/lib/prisma";

export const createQualifingResult = async (position: number, seconds: number, driverId: string, gpWeekendId: string) => {
  return await prisma.qualifyingResult.create({
    data: {
      id: crypto.randomUUID(),
      driverId,
      gpWeekendId,
      time: seconds,
      position,
    },
  });
};
