import { prisma } from "@/backend/lib/prisma";
import { DriverInfo } from "@prisma/client";

export const createOrUpdateDriverInfo = async (driverInfo: DriverInfo) => {
  if (driverInfo.id.startsWith("new-")) {
    driverInfo.id = crypto.randomUUID();
    return await prisma.driverInfo.create({
      data: driverInfo,
    });
  }
  return await prisma.driverInfo.update({
    where: {
      id: driverInfo.id,
    },
    data: driverInfo,
  });
};
