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
    })
  ).map((driverInfo) => ({ ...driverInfo, birthday: new Date(driverInfo.birthday) }));
}
