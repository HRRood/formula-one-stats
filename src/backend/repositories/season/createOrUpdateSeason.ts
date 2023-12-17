import {prisma} from "@/backend/lib/prisma";
import {Season} from "@prisma/client";

export const createOrUpdateSeason = async (season: Season) => {
  if (season.id.startsWith("new-")) {
    season.id = crypto.randomUUID();
    return prisma.season.create({
      data: season,
    });
  }
  return await prisma.season.update({
    where: {
      id: season.id,
    },
    data: season,
  });
};
