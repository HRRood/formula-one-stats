import { ApiOptions } from "@/datafetching/api";
import { useSWR } from "../utils/useSWR";
import { getAllSeasons } from "@/datafetching/season/getAllSeasons";
import { SEASON_KEY } from "./utils";
import { mutate } from "swr";

export const useGetAllSeasons = (options?: ApiOptions) => {
  const returnData = useSWR(`${SEASON_KEY}useGetAllSeasons-${JSON.stringify(options)}`, () => getAllSeasons(options));

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(SEASON_KEY), undefined, true);
    },
  };
};
