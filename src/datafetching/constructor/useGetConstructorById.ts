import { ApiOptions } from "@/datafetching/api";
import { useSWR } from "../utils/useSWR";
import { getConstructorById } from "./getConstructorById";
import { mutate } from "swr";
import { CONSTRUCTOR_KEY } from "./utils";

export const useGetConstructorById = (id: string, options?: ApiOptions) => {
  const returnData = useSWR(`${CONSTRUCTOR_KEY}useGetConstructorById-${JSON.stringify(options)}-${id}`, () => getConstructorById(id, options));

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(CONSTRUCTOR_KEY), undefined, true);
    },
  };
};
