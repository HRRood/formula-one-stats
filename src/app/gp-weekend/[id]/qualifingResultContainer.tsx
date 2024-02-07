import { Box } from "@mui/material";
import { QualifingResults } from "./qualifingResults";

interface Props {
  gpWeekendId: string;
}

export const QualifingResultContainer = ({ gpWeekendId }: Props) => {
  return (
    <Box sx={{ background: (theme) => theme.palette.background.paper, borderRadius: "10px", padding: "20px" }}>
      <QualifingResults gpWeekendId={gpWeekendId} />
    </Box>
  );
};
