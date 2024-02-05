import { Driver, GpWeekend } from "@/backend/types/dbTypes";
import { ApiOptions, api } from "../../api";
import { Pagination } from "@/utils/calculatePagination";

export interface DriverResponse {
  items: Driver[];
  pagination: Pagination;
}

export const getAllSeasonGpWeekends = async (seasonId: string, options?: ApiOptions) => {
  const response = await api.get<GpWeekend[]>(`/api/seasons/${seasonId}/gp-weekends`, options);

  // if (!response.succeeded) {
  //   return { items: [], pagination: defaultPagination };
  // }
  //
  // if (!response.data) {
  //   return { items: [], pagination: defaultPagination };
  // }

  return response.data ?? [];
};
