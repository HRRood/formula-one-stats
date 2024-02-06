import { ApiOptions } from "@/datafetching/api";
import { useSWR } from "../utils/useSWR";
import { mutate } from "swr";
import { getAllDriversInfo } from "./getAllDriversInfo";
import { DRIVERS_INFO_KEY } from "./utils";

export const useGetAllDriversInfo = (options?: ApiOptions) => {
  const returnData = useSWR(`${DRIVERS_INFO_KEY}useGetAllDriversInfo-${JSON.stringify(options)}`, () => getAllDriversInfo(options));

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(DRIVERS_INFO_KEY), undefined, true);
    },
  };
};
