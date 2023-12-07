import { Box, Typography } from "@mui/material";
import { SeasonsPage } from "./seasonsPage";
import { Container } from "@/components/global/container";
import { Button } from "@/components/global/button";

export default function Page() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
        <Typography variant="h4">Seasons</Typography>
        <Button size="small" variant="contained" color="primary">
          New
        </Button>
      </Box>
      <Box>
        <SeasonsPage />
      </Box>
    </Container>
  );
}
