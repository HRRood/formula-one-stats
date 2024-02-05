import { prisma } from "@/backend/lib/prisma";
import { ApiPagination } from "../season/getAllSeasons";

interface GetAllDriversInfoProps {
  pagination: ApiPagination;
}

export async function getAllDriversInfo({ pagination }: GetAllDriversInfoProps) {
  const { pageNumber = 1, pageSize = 99999 } = pagination;
  return (
    await prisma.driverInfo.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      orderBy: {
        name: "asc",
      },
    })
  ).map((driverInfo) => ({ ...driverInfo, birthday: new Date(driverInfo.birthday || 0) }));
}
