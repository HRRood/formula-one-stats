import { ConstructorTeam } from "@prisma/client";
import { ApiOptions, api } from "../api";

export const getConstructorById = async (id: string, options?: ApiOptions): Promise<ConstructorTeam | null> => {
  const response = await api.get<ConstructorTeam>(`/api/constructors/${id}`, options);

  if (!response.succeeded) {
    return null;
  }

  if (!response.data) {
    return null;
  }

  return response.data;
};
