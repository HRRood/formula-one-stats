import { prisma } from "@/backend/lib/prisma";

export const getDriversInfoCount = async () => {
  return await prisma.driverInfo.count();
};
