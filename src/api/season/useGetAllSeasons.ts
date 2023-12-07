import { ApiOptions } from "@/api/api";
import { useSWR } from "../utils/useSWR";
import { getAllSeasons } from "@/api/season/getAllSeasons";

export const useGetAllSeasons = (options?: ApiOptions) => {
  return useSWR(`useGetAllSeasons-${JSON.stringify(options)}`, () => getAllSeasons(options));
};
