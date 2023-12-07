import { Table } from "@/components/table/table";
import { Box, Typography } from "@mui/material";
import { SeasonsPage } from "./seasonsPage";

export default function Page() {
  return (
    <Box>
      <Typography variant="h3">Seasons</Typography>
      <Box>
        <SeasonsPage />
      </Box>
    </Box>
  );
}
