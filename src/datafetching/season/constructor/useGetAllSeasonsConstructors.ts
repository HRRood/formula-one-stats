import { ApiOptions } from "@/datafetching/api";
import { useSWRConfig } from "swr";
import { useSWR } from "@/datafetching/utils/useSWR";
import { getAllSeasonConstructors } from "./getAllSeasonConstructors";
import { SEASON_KEY } from "@/datafetching/season/utils";

export const useGetAllSeasonConstructors = (seasonId: string, options?: ApiOptions) => {
  const { mutate } = useSWRConfig();

  const returnData = useSWR(`${SEASON_KEY}useGetAllSeasonConstructors-${JSON.stringify(options)}-${seasonId}`, () =>
    getAllSeasonConstructors(seasonId, options)
  );

  return {
    ...returnData,
    mutate: async () => {
      await mutate((key: string) => key.startsWith(SEASON_KEY), undefined, true);
    },
  };
};
