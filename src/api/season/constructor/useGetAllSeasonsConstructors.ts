import {ApiOptions} from "@/api/api";
import {useSWRConfig} from "swr";
import {useSWR} from "@/api/utils/useSWR";
import {getAllSeasonConstructors} from "./getAllSeasonConstructors";
import {SEASON_KEY} from "@/api/season/utils";

export const useGetAllSeasonConstructors = (seasonId: string, options?: ApiOptions) => {
  const {mutate} = useSWRConfig();

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
