import { useGetAllSeasonDrivers } from "@/api/season/driver/useGetAllSeasons";
import { Button } from "@/components/global/button";
import { DialogType, useDialog } from "@/hooks/layout/useDialog";
import { Box, Typography } from "@mui/material";

interface Props {
  seasonId: string;
}

export const SeasonDrivers = ({ seasonId }: Props) => {
  const { data } = useGetAllSeasonDrivers(seasonId);
  const { openDialog } = useDialog();
  return (
    <Box sx={{ background: (theme) => theme.palette.background.paper, borderRadius: "10px", padding: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography variant="h4">Drivers</Typography>
        <Button onClick={() => openDialog(DialogType.AddSeasonDriver, { seasonId })} color="primary">
          Add driver
        </Button>
      </Box>
    </Box>
  );
};
