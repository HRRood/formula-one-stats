import { prisma } from "@/backend/lib/prisma";
import { Driver, GpWeekend } from "@prisma/client";

export const createOrUpdateSeasonGpWeekend = async (gpWeekend: GpWeekend) => {
  if (gpWeekend.id.startsWith("new-")) {
    gpWeekend.id = crypto.randomUUID();
    return prisma.gpWeekend.create({
      data: gpWeekend,
    });
  }
  return prisma.gpWeekend.update({
    where: {
      id: gpWeekend.id,
    },
    data: gpWeekend,
  });
};
