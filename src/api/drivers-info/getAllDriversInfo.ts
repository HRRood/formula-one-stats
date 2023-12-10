import { ApiOptions, api } from "../api";
import { Pagination } from "@/utils/calculatePagination";
import { defaultPagination } from "../season/getAllSeasons";
import { DriverInfo } from "@prisma/client";

export interface DriversInfoResponse {
  items: DriverInfo[];
  pagination: Pagination;
}

export const getAllDriversInfo = async (options?: ApiOptions): Promise<DriversInfoResponse> => {
  const response = await api.get<DriversInfoResponse>(`/api/drivers-info`, options);

  if (!response.succeeded) {
    return { items: [], pagination: defaultPagination };
  }

  if (!response.data) {
    return { items: [], pagination: defaultPagination };
  }

  return response.data;
};
