"use client";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ padding: "50px", background: (theme) => theme.palette.background.paper }}>
      <Typography>Formula one stats</Typography>
    </Box>
  );
}
