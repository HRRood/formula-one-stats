import useActualSWR, { SWRConfiguration } from "swr";

export const useSWR = <Data = any, Error = any>(url: string, fetcher: () => Promise<Data>, options?: SWRConfiguration<Data, Error>) => {
  const { data, error, isLoading, isValidating, mutate } = useActualSWR(url, () => fetcher(), {
    revalidateOnMount: true,
    refreshInterval: 0,
    dedupingInterval: 60 * 1000 * 30,
    keepPreviousData: true,
    ...options,
  });

  // // Check if data is not available yet and fallbackData is provided
  // const fallbackData = options && "fallbackData" in options ? options.fallbackData : undefined;
  // console.log("rororo", fallbackData, options, options && "fallbackData" in options);
  // const finalData = isLoading && fallbackData !== undefined ? fallbackData : data;
  return { data, error, isLoading, isValidating, mutate };
};
