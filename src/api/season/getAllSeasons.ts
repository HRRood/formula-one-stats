import { ApiOptions, api } from "../api";
import { Season } from "@prisma/client";
import { Pagination } from "@/utils/calculatePagination";

export interface SeasonResponse {
  items: Season[];
  pagination: Pagination;
}

export const defaultPagination: Pagination = {
  totalItems: 1,
  currentPage: 1,
  pageSize: 10,
  totalPages: 1,
  startPage: 1,
  endPage: 1,
  startIndex: 0,
  endIndex: 0,
  pages: [1],
};

export const getAllSeasons = async (options?: ApiOptions): Promise<SeasonResponse> => {
  const response = await api.get<SeasonResponse>(`/api/seasons`, options);

  if (!response.succeeded) {
    return { items: [], pagination: defaultPagination };
  }

  if (!response.data) {
    return { items: [], pagination: defaultPagination };
  }

  return response.data;
};
