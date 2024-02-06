"use client";

import { GpWeekend } from "@/backend/types/dbTypes";
import { useGetGpWeekendById } from "@/datafetching/gp-weekend/useGetGpWeekendById";

interface Props {
  initData: GpWeekend;
}

export const GpWeekendDetail = ({ initData }: Props) => {
  const { data, isLoading } = useGetGpWeekendById(
    initData.id,
    {},
    {
      fallbackData: initData,
      keepPreviousData: true,
    }
  );

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
};
