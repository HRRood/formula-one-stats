import { ApiOptions } from "@/datafetching/api";
import { useSWR } from "../utils/useSWR";
import { getSeasonById } from "./getSeasonById";
import { SEASON_KEY } from "./utils";
import { mutate } from "swr";

export const useGetSeasonById = (id: string, options?: ApiOptions) => {
  const returnData = useSWR(`${SEASON_KEY}useGetSeasonById-${JSON.stringify(options)}-${id}`, () => getSeasonById(id, options));

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(SEASON_KEY), undefined, true);
    },
  };
};
