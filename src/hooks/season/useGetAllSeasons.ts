import { useSWR } from "../utils/useSWR";
import { getAllSeasons } from "@/api/season/getAllSeasons";

export const useGetAllSeasons = (pageNumber = 1, pageSize = 10) => {
  return useSWR(`useGetAllSeasons-pagenumber${pageNumber}-pagesize${pageSize}`, () => getAllSeasons({ pageNumber, pageSize }));
};
