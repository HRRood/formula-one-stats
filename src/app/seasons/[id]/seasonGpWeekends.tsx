import { Button } from "@/components/global/button";
import { DialogType, useDialog } from "@/hooks/layout/useDialog";
import { Box, Link, Typography } from "@mui/material";
import { DataTable } from "@/components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { GpWeekend } from "@/backend/types/dbTypes";
import { useGetAllSeasonGpWeekends } from "@/datafetching/season/gp-weekend/useGetAllSeasonGpWeekends";
import { format } from "date-fns";
import { createOrUpdateSeasonGpWeekend } from "@/datafetching/season/gp-weekend/createOrUpdateSeasonGpWeekend";

interface Props {
  seasonId: string;
}

const cols: GridColDef<GpWeekend>[] = [
  {
    flex: 1,
    field: "name",
    headerName: "Name",
    renderCell: ({ row }) => (
      <Link href={`/gp-weekend/${row.id}`}>
        <Typography>{row.name}</Typography>
      </Link>
    ),
  },
  {
    flex: 1,
    field: "date",
    headerName: "Date",
    renderCell: ({ row }) => <Typography>{format(new Date(row.date), "dd-MM-yyyy")}</Typography>,
  },
  {
    flex: 1,
    field: "Type",
    headerName: "Number",
    renderCell: ({ row }) => <Typography>{row.type}</Typography>,
  },
];

export const SeasonGpWeekends = ({ seasonId }: Props) => {
  const { data, isLoading, mutate } = useGetAllSeasonGpWeekends(seasonId);
  const { openDialog, closeDialog } = useDialog();

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{ background: (theme) => theme.palette.background.paper, borderRadius: "10px", padding: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "10px" }}>
        <Typography variant="h4">Gp Weekends</Typography>
        <Button
          onClick={() =>
            openDialog(DialogType.AddSeasonGpWeekend, {
              seasonId,
              onCreate: async (data) => {
                await createOrUpdateSeasonGpWeekend(data);
                await mutate();
                closeDialog();
              },
            })
          }
          color="primary"
        >
          Add Gp Weekend
        </Button>
      </Box>
      <Box>
        <DataTable columns={cols} rows={data || []} isLoading={isLoading} />
      </Box>
    </Box>
  );
};
