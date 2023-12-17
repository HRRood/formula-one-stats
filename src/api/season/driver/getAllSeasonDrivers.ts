import {ApiOptions, api} from "../../api";
import {Pagination} from "@/utils/calculatePagination";
import {DriverType} from "@/backend/types/dbTypes";

export interface DriverResponse {
  items: DriverType[];
  pagination: Pagination;
}

export const getAllSeasonDrivers = async (seasonId: string, options?: ApiOptions): Promise<DriverType[]> => {
  const response = await api.get<DriverType[]>(`/api/seasons/${seasonId}/drivers`, options);


  // if (!response.succeeded) {
  //   return { items: [], pagination: defaultPagination };
  // }
  //
  // if (!response.data) {
  //   return { items: [], pagination: defaultPagination };
  // }

  return response.data ?? [];
};
