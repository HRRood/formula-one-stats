import { ConstructorTeam } from "@/backend/types/dbTypes";
import { api } from "../api";

export const createOrUpdateConstructor = async (data: ConstructorTeam) => {
  return await api.post<ConstructorTeam>("/api/constructors", data);
};
