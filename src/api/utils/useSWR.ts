import useActualSWR, { SWRConfiguration } from "swr";

export const useSWR = <Data = any, Error = any>(url: string, fetcher: () => Promise<Data>, options?: SWRConfiguration<Data, Error>) => {
  const { data, error, isLoading, isValidating, mutate } = useActualSWR(url, () => fetcher(), {
    ...options,
    revalidateOnMount: true,
    refreshInterval: 0,
    dedupingInterval: 60 * 1000 * 30,
    keepPreviousData: false,
  });

  return { data, error, isLoading, isValidating, mutate };
};
