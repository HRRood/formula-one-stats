import { ConstructorTeamType } from "@/backend/types/dbTypes";
import { ApiOptions, api } from "../../api";
import { defaultPagination } from "../getAllSeasons";
import { ConstructorResponse } from "@/api/constructor/getAllConstructors";

export const getAllSeasonConstructors = async (seasonId: string, options?: ApiOptions): Promise<ConstructorTeamType[]> => {
  const response = await api.get<ConstructorTeamType[]>(`/api/seasons/${seasonId}/constructors`, options);

  if (!response.succeeded) {
    return [];
  }

  if (!response.data) {
    return [];
  }

  return response.data;
};
