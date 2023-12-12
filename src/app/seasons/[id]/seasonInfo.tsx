"use client";

import { Box } from "@mui/material";
import { SeasonConstructors } from "./seasonConstructors";
import { SeasonDrivers } from "./seasonDrivers";

interface Props {
  id: string;
}

export const SeasonInfo = ({ id }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <SeasonConstructors seasonId={id} />
      <SeasonDrivers seasonId={id} />
    </Box>
  );
};
