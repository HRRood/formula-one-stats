import { ApiPagination } from "@/backend/repositories/season/getAllSeasons";
import { api } from "../api";
import { ApiResponse } from "@/utils/createDefaultResponse";
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

export const getAllSeasons = async ({ pageNumber = 1, pageSize = 10 }: ApiPagination): Promise<SeasonResponse> => {
  const response: ApiResponse<SeasonResponse> = await api.get(`/api/seasons?pageNumber=${pageNumber}&pageSize=${pageSize}`);

  if (!response.success) {
    return { items: [], pagination: defaultPagination };
  }

  if (!response.data) {
    return { items: [], pagination: defaultPagination };
  }

  return response.data;
};
