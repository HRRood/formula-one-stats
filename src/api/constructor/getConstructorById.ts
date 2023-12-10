import { ApiOptions, api } from "../api";
import { ConstructorTeamType } from "@/backend/types/dbTypes";

export const getConstructorById = async (id: string, options?: ApiOptions): Promise<ConstructorTeamType | null> => {
  const response = await api.get<ConstructorTeamType>(`/api/constructors/${id}`, options);

  if (!response.succeeded) {
    return null;
  }

  if (!response.data) {
    return null;
  }

  return response.data;
};
