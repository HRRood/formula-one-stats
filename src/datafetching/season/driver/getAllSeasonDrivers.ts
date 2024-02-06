import { Driver } from "@/backend/types/dbTypes";
import { ApiOptions, api } from "../../api";
import { Pagination } from "@/utils/calculatePagination";

export interface DriverResponse {
  items: Driver[];
  pagination: Pagination;
}

export const getAllSeasonDrivers = async (seasonId: string, options?: ApiOptions): Promise<Driver[]> => {
  const response = await api.get<Driver[]>(`/api/seasons/${seasonId}/drivers`, options);

  // if (!response.succeeded) {
  //   return { items: [], pagination: defaultPagination };
  // }
  //
  // if (!response.data) {
  //   return { items: [], pagination: defaultPagination };
  // }

  return response.data ?? [];
};
