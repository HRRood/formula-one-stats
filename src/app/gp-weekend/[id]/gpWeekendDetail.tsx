"use client";

import { GpWeekend } from "@/backend/types/dbTypes";
import { ToggleButtons } from "@/components/toggleButtons/ToggleButtons";
import { useGetGpWeekendById } from "@/datafetching/gp-weekend/useGetGpWeekendById";
import { useState } from "react";
import { QualifingResultContainer } from "./qualifingResultContainer";
import { Box } from "@mui/material";
import Link from "next/link";
import { Button } from "@/components/global/button";

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
  const [viewMode, setViewMode] = useState<"qualifing">("qualifing");

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Button color="primary" href={`/seasons/${data.seasonId}`} variant="text">
        Back to season
      </Button>
      <h1>{data.name}</h1>
      {/* <ToggleButtons options={[{ icon: "radix-icons:timer", name: "qualifing" }]} value={viewMode} setValue={setViewMode} /> */}
      {viewMode === "qualifing" && <QualifingResultContainer gpWeekendId={initData.id} />}
    </Box>
  );
};
