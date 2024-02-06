import { ApiOptions } from "@/datafetching/api";
import { useSWR } from "../utils/useSWR";
import { SWRConfiguration, mutate } from "swr";
import { GP_WEEKEND_KEY } from "./utils";
import { getGpWeekendById } from "./getGpWeekendById";
import { GpWeekend } from "@/backend/types/dbTypes";

export const useGetGpWeekendById = (id: string, options?: ApiOptions, swrOptions?: SWRConfiguration<GpWeekend | null, Error>) => {
  const returnData = useSWR(`${GP_WEEKEND_KEY}useGetGpWeekendById-${JSON.stringify(options)}-${id}`, () => getGpWeekendById(id, options), swrOptions);

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(GP_WEEKEND_KEY), undefined, true);
    },
  };
};
