import { ConstructorTeam } from "@/backend/types/dbTypes";
import { ApiOptions, api } from "../../api";

export const getAllSeasonConstructors = async (seasonId: string, options?: ApiOptions): Promise<ConstructorTeam[]> => {
  const response = await api.get<ConstructorTeam[]>(`/api/seasons/${seasonId}/constructors`, options);

  if (!response.succeeded) {
    return [];
  }

  if (!response.data) {
    return [];
  }

  return response.data;
};
