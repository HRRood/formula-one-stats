import { ApiOptions } from "@/api/api";
import { useSWR } from "../utils/useSWR";
import { getDriverInfoById } from "./getDriverInfoById";
import { mutate } from "swr";
import { DRIVERS_INFO_KEY } from "./utils";

export const useGetDriverInfoById = (id: string, options?: ApiOptions) => {
  const returnData = useSWR(`${DRIVERS_INFO_KEY}useGetDriverInfoById-${JSON.stringify(options)}-${id}`, () => getDriverInfoById(id, options));

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(DRIVERS_INFO_KEY), undefined, true);
    },
  };
};
