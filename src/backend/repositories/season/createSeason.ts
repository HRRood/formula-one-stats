import { prisma } from "@/lib/prisma";
import { Season } from "@prisma/client";

export const createSeason = async (season: Season) => {
  return await prisma.season.create({
    data: season,
  });
};
