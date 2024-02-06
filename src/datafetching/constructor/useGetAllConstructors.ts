import { ApiOptions } from "@/datafetching/api";
import { useSWR } from "../utils/useSWR";
import { mutate } from "swr";
import { CONSTRUCTOR_KEY } from "./utils";
import { getAllConstructors } from "./getAllConstructors";

export const useGetAllConstructors = (options?: ApiOptions) => {
  const returnData = useSWR(`${CONSTRUCTOR_KEY}useGetAllConstructors-${JSON.stringify(options)}`, () => getAllConstructors(options));

  return {
    ...returnData,
    mutate: async () => {
      mutate((key: string) => key.startsWith(CONSTRUCTOR_KEY), undefined, true);
    },
  };
};
