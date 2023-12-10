import { prisma } from "@/backend/lib/prisma";
import { ConstructorTeam } from "@prisma/client";

export const createOrUpdateConstructor = async (constructor: ConstructorTeam) => {
  if (constructor.id.startsWith("new-")) {
    constructor.id = crypto.randomUUID();
    const data = await prisma.constructorTeam.create({
      data: constructor,
      include: {
        Season: true,
      },
    });
    const season = data.Season;
    if ("season" in data) delete data.season;
    return {
      ...data,
      season,
    };
  }
  const data = await prisma.constructorTeam.update({
    where: {
      id: constructor.id,
    },
    data: constructor,
    include: {
      Season: true,
    },
  });
  const season = data.Season;
  if ("season" in data) delete data.season;
  return {
    ...data,
    season,
  };
};
