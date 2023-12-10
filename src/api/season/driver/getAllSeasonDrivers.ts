import { ApiOptions, api } from "../../api";
import { Pagination } from "@/utils/calculatePagination";
import { DriverType } from "@/backend/types/dbTypes";
import { defaultPagination } from "../getAllSeasons";

export interface DriverResponse {
  items: DriverType[];
  pagination: Pagination;
}
export const getAllSeasonDrivers = async (seasonId: string, options?: ApiOptions): Promise<DriverResponse> => {
  const response = await api.get<DriverResponse>(`/api/seasons/${seasonId}/drivers`, options);

  if (!response.succeeded) {
    return { items: [], pagination: defaultPagination };
  }

  if (!response.data) {
    return { items: [], pagination: defaultPagination };
  }

  return response.data;
};
