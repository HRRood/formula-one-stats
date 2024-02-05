import { prisma } from "@/backend/lib/prisma";

export const getSeasonConstructors = async (id: string) => {
  return await prisma.constructorTeam.findMany({
    where: {
      Season: {
        id: id,
      },
    },
    include: {
      Season: true,
      Driver: {
        include: {
          DriverInfo: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
};
