import { prisma } from "@/backend/lib/prisma";

export const getConstructorById = async (id: string) => {
  const data = await prisma.constructorTeam.findUnique({
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

  const season = data?.Season;
  if ("season" in data) delete data.season;
  return {
    ...data,
    season,
  };
};
