import { ApiOptions } from "@/api/api";
import { mutate } from "swr";
import { SEASON_DRIVER_KEY } from "./utils";
import { useSWR } from "@/api/utils/useSWR";
import { getAllSeasonDrivers } from "./getAllSeasonDrivers";

export const useGetAllSeasonDrivers = (seasonId: string, options?: ApiOptions) => {
  const returnData = useSWR(`${SEASON_DRIVER_KEY}useGetAllSeasonDrivers-${JSON.stringify(options)}-${seasonId}`, () => getAllSeasonDrivers(seasonId, options));

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(SEASON_DRIVER_KEY), undefined, true);
    },
  };
};
