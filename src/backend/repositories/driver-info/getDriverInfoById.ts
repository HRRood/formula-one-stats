import { prisma } from "@/backend/lib/prisma";

export const getDriverInfoById = async (id: string) => {
  const data = await prisma.driverInfo.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return null;
  }

  return {
    ...data,
    birthday: new Date(data.birthday),
  };
};
