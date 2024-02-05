"use client";

import { Box } from "@mui/material";
import { SeasonConstructors } from "./seasonConstructors";
import { SeasonDrivers } from "./seasonDrivers";
import { ToggleButtons } from "@/components/toggleButtons/ToggleButtons";
import { useState } from "react";
import { SeasonGpWeekends } from "./seasonGpWeekends";

interface Props {
  id: string;
}

export const SeasonInfo = ({ id }: Props) => {
  const [view, setView] = useState<"constructors" | "drivers" | "gpweekends">("constructors");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ToggleButtons
        value={view}
        setValue={setView}
        options={[
          { name: "constructors", icon: "mdi:car-multiple" },
          { name: "drivers", icon: "mdi:account" },
          { name: "gpweekends", icon: "mdi:calendar-week" },
        ]}
      />
      {view === "constructors" && <SeasonConstructors seasonId={id} />}
      {view === "drivers" && <SeasonDrivers seasonId={id} />}
      {view === "gpweekends" && <SeasonGpWeekends seasonId={id} />}
    </Box>
  );
};
