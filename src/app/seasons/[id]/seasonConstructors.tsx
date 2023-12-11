import { useGetAllSeasonConstructors } from "@/api/season/constructor/useGetAllSeasonsConstructors";
import { Button } from "@/components/global/button";
import { DialogType, useDialog } from "@/hooks/layout/useDialog";
import { Box, Typography } from "@mui/material";

interface Props {
  seasonId: string;
}

export const SeasonConstructors = ({ seasonId }: Props) => {
  const { data, isLoading } = useGetAllSeasonConstructors(seasonId);
  const { openDialog } = useDialog();
  return (
    <>
      <Box sx={{ background: (theme) => theme.palette.background.paper, borderRadius: "10px", padding: "20px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Typography variant="h4">Constructors</Typography>
          <Button onClick={() => openDialog(DialogType.AddSeasonDriver, {})} color="primary">
            Add constructor
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data?.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                padding: "10px",
                flex: 1,
                minWidth: { sx: "100%", sm: "calc(50% - 10px)", md: "calc(33% - 10px)", lg: "calc(25% - 10px)" },
                background: (theme) => theme.palette.background.paper,
                borderRadius: "10px",
              }}
            >
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="h6">{item.countryOrigin}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
