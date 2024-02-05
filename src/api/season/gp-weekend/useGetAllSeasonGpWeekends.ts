import { ApiOptions } from "@/api/api";
import { useSWR } from "@/api/utils/useSWR";
import { getAllSeasonGpWeekends } from "./getAllSeasonGpWeekends";
import { useSWRConfig } from "swr";
import { SEASON_KEY } from "@/api/season/utils";

export const useGetAllSeasonGpWeekends = (seasonId: string, options?: ApiOptions) => {
  const { mutate } = useSWRConfig();
  const returnData = useSWR(`${SEASON_KEY}useGetAllSeasonGpWeekends-${JSON.stringify(options)}-${seasonId}`, () => getAllSeasonGpWeekends(seasonId, options));

  return {
    ...returnData,
    mutate: async () => {
      await mutate((key: string) => key.startsWith(SEASON_KEY), undefined, true);
    },
  };
};
