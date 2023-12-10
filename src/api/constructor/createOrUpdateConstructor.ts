import { ConstructorTeam } from "@prisma/client";
import { api } from "../api";
import { ConstructorTeamType } from "@/backend/types/dbTypes";

export const createOrUpdateConstructor = async (data: ConstructorTeam) => {
  return await api.post<ConstructorTeamType>("/api/constructors", data);
};
