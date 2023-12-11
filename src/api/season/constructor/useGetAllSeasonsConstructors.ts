import { ApiOptions } from "@/api/api";
import { mutate } from "swr";
import { SEASON_CONSTRUCTOR_KEY } from "./utils";
import { useSWR } from "@/api/utils/useSWR";
import { getAllSeasonConstructors } from "./getAllSeasonConstructors";

export const useGetAllSeasonConstructors = (seasonId: string, options?: ApiOptions) => {
  const returnData = useSWR(`${SEASON_CONSTRUCTOR_KEY}useGetAllSeasonConstructors-${JSON.stringify(options)}-${seasonId}`, () =>
    getAllSeasonConstructors(seasonId, options)
  );

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(SEASON_CONSTRUCTOR_KEY), undefined, true);
    },
  };
};
