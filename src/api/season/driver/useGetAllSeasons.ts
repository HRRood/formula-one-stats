import { ApiOptions } from "@/api/api";
import { useSWR } from "@/api/utils/useSWR";
import { getAllSeasonDrivers } from "./getAllSeasonDrivers";
import { useSWRConfig } from "swr";
import { SEASON_KEY } from "@/api/season/utils";

export const useGetAllSeasonDrivers = (seasonId: string, options?: ApiOptions) => {
  const { mutate } = useSWRConfig();
  const returnData = useSWR(`${SEASON_KEY}useGetAllSeasonDrivers-${JSON.stringify(options)}-${seasonId}`, () => getAllSeasonDrivers(seasonId, options));

  return {
    ...returnData,
    mutate: async () => {
      await mutate((key: string) => key.startsWith(SEASON_KEY), undefined, true);
    },
  };
};
