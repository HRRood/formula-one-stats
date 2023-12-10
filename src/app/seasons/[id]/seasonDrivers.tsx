import { useGetAllSeasonDrivers } from "@/api/season/driver/useGetAllSeasons";
import { Button } from "@/components/global/button";
import { DialogType, useDialog } from "@/hooks/layout/useDialog";
import { Box, Typography } from "@mui/material";

interface Props {
  id: string;
}

export const SeasonDrivers = ({ id }: Props) => {
  const { data } = useGetAllSeasonDrivers(id);
  const { openDialog } = useDialog();
  return (
    <Box sx={{ background: (theme) => theme.palette.background.paper, borderRadius: "10px", padding: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography variant="h4">Drivers</Typography>
        <Button onClick={() => openDialog(DialogType.AddSeasonDriver, {})} color="primary">
          Add driver
        </Button>
      </Box>
    </Box>
  );
};
