import { useGetAllSeasonDrivers } from "@/datafetching/season/driver/useGetAllSeasons";
import { Button } from "@/components/global/button";
import { DialogType, useDialog } from "@/hooks/layout/useDialog";
import { Box, Typography } from "@mui/material";
import { createOrUpdateSeasonDriver } from "@/datafetching/season/driver/createOrUpdateSeasonDriver";
import { DataTable } from "@/components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { Driver } from "@/backend/types/dbTypes";

interface Props {
  seasonId: string;
}

const cols: GridColDef<Driver>[] = [
  {
    flex: 0.3,
    field: "DriverInfo.name",
    headerName: "Name",
    renderCell: ({ row }) => <Typography>{row.DriverInfo.name}</Typography>,
  },
  {
    flex: 0.3,
    field: "number",
    headerName: "Number",
    renderCell: ({ row }) => <Typography>{row.number}</Typography>,
  },
  {
    flex: 0.3,
    field: "ConstructorTeam.name",
    headerName: "Team",
    renderCell: ({ row }) => <Typography>{row.ConstructorTeam.name}</Typography>,
  },
];

export const SeasonDrivers = ({ seasonId }: Props) => {
  const { data, isLoading, mutate } = useGetAllSeasonDrivers(seasonId);
  const { openDialog, closeDialog } = useDialog();

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{ background: (theme) => theme.palette.background.paper, borderRadius: "10px", padding: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography variant="h4">Drivers</Typography>
        <Button
          onClick={() =>
            openDialog(DialogType.AddSeasonDriver, {
              seasonId,
              onCreate: async (data) => {
                await createOrUpdateSeasonDriver(data);
                await mutate();
                closeDialog();
              },
            })
          }
          color="primary"
        >
          Add driver
        </Button>
      </Box>
      <Box>
        <DataTable columns={cols} rows={data || []} isLoading={isLoading} />
      </Box>
    </Box>
  );
};
