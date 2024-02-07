"use client";
import { QualifyingResult } from "@/backend/types/dbTypes";
import { DataTable } from "@/components/dataTable/DataTable";
import { Button } from "@/components/global/button";
import { useGetQualifingResults } from "@/datafetching/gp-weekend/qualifiing-result/useGetQualifiingResults";
import { DialogType, useDialog } from "@/hooks/layout/useDialog";
import { formatSecondsToTime } from "@/utils/format/secondsToTime";
import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

interface Props {
  gpWeekendId: string;
}

const cols: GridColDef<QualifyingResult>[] = [
  {
    flex: 1,
    field: "position",
    headerName: "Position",
    renderCell: ({ row }) => <Typography>{row.position}</Typography>,
  },
  {
    flex: 1,
    field: "name",
    headerName: "Name",
    renderCell: ({ row }) => <Typography>{row.Driver.DriverInfo.name}</Typography>,
  },
  {
    flex: 1,
    field: "time",
    headerName: "Time",
    renderCell: ({ row }) => <Typography>{row.time === 0 ? "-" : formatSecondsToTime(row.time)}</Typography>,
  },
];

export const QualifingResults = ({ gpWeekendId }: Props) => {
  const { data, isLoading } = useGetQualifingResults(gpWeekendId);
  const { openDialog } = useDialog();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "10px" }}>
        <Typography variant="h4">Qualifing results</Typography>
        {data && data?.length <= 0 && (
          <Button
            onClick={() =>
              openDialog(DialogType.AddQualifingResults, {
                gpWeekendId,
              })
            }
            color="primary"
          >
            Add Qualifing results
          </Button>
        )}
      </Box>
      <Box>{data && <DataTable columns={cols} rows={data || []} isLoading={isLoading} />}</Box>
    </Box>
  );
};
