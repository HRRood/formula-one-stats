import {prisma} from "@/backend/lib/prisma";
import {Driver} from "@prisma/client";

export const createOrUpdateSeasonDriver = async (driver: Driver) => {
  if (driver.id.startsWith("new-")) {
    driver.id = crypto.randomUUID();
    return prisma.driver.create({
      data: driver,
    });
  }
  return prisma.driver.update({
    where: {
      id: driver.id,
    },
    data: driver,
  });
};
