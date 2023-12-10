import { prisma } from "@/backend/lib/prisma";
import { ApiPagination } from "../season/getAllSeasons";

interface GetAllConstructorsProps {
  pagination: ApiPagination;
}

export async function getAllConstructors({ pagination }: GetAllConstructorsProps) {
  const { pageNumber = 1, pageSize = 99999 } = pagination;
  return (
    await prisma.constructorTeam.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      include: {
        Season: true,
      },
    })
  ).map((constructor) => {
    const season = constructor.Season;
    if ("season" in constructor) delete constructor.season;
    return {
      ...constructor,
      season,
    };
  });
}
