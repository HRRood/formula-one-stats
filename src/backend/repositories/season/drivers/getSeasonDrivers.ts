import {prisma} from "@/backend/lib/prisma";

export const getSeasonDrivers = async (id: string) => {
  return await prisma.driver.findMany({
    where: {
      ConstructorTeam: {
        Season: {
          id: id,
        },
      },
    },
    include: {
      ConstructorTeam: true,
      DriverInfo: true,
      Season: true,
    },
  });
};
