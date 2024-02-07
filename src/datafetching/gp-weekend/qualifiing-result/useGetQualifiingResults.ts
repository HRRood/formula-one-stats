import { ApiOptions } from "@/datafetching/api";
import { useSWR } from "../../utils/useSWR";
import { SWRConfiguration, mutate } from "swr";
import { QUALIFING_RESULTS_KEY } from "./utils";
import { getQualifingResults } from "./getQualifingResults";
import { QualifyingResult } from "@/backend/types/dbTypes";

export const useGetQualifingResults = (gpWeekendId: string, options?: ApiOptions, swrOptions?: SWRConfiguration<QualifyingResult[] | null, Error>) => {
  const returnData = useSWR(
    `${QUALIFING_RESULTS_KEY}useGetQualifingResults-${JSON.stringify(options)}-${gpWeekendId}`,
    () => getQualifingResults(gpWeekendId, options),
    swrOptions
  );

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(QUALIFING_RESULTS_KEY), undefined, true);
    },
  };
};
