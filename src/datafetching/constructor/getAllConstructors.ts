import { ApiOptions, api } from "../api";
import { Pagination } from "@/utils/calculatePagination";
import { defaultPagination } from "../season/getAllSeasons";
import { ConstructorTeam } from "@/backend/types/dbTypes";

export interface ConstructorResponse {
  items: ConstructorTeam[];
  pagination: Pagination;
}

export const getAllConstructors = async (options?: ApiOptions): Promise<ConstructorResponse> => {
  const response = await api.get<ConstructorResponse>(`/api/constructors`, options);

  if (!response.succeeded) {
    return { items: [], pagination: defaultPagination };
  }

  if (!response.data) {
    return { items: [], pagination: defaultPagination };
  }

  return response.data;
};
