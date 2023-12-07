import { prisma } from "@/lib/prisma";

export interface ApiPagination {
  pageNumber: number;
  pageSize: number;
}

interface GetAllSeasonsProps {
  pagination: ApiPagination;
}

export async function getAllSeasons({ pagination }: GetAllSeasonsProps) {
  const { pageNumber = 1, pageSize = 99999 } = pagination;
  return await prisma.season.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
  });
}
