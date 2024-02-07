import { Box } from "@mui/material";
import { InputField } from "../global/form/fields/inputField";
import { SelectField } from "../global/form/fields/selectField";
import { useFormContext } from "react-hook-form";
import { useGetAllSeasonDrivers } from "@/datafetching/season/driver/useGetAllSeasons";

export type positionType =
  | "first"
  | "second"
  | "third"
  | "fourth"
  | "fifth"
  | "sixth"
  | "seventh"
  | "eighth"
  | "ninth"
  | "tenth"
  | "eleventh"
  | "twelfth"
  | "thirteenth"
  | "fourteenth"
  | "fifteenth"
  | "sixteenth"
  | "seventeenth"
  | "eighteenth"
  | "nineteenth"
  | "twentieth";
export const DriverPositionInputs = ({ position, seasonId }: { position: positionType; seasonId: string }) => {
  const form = useFormContext();
  const { data: drivers } = useGetAllSeasonDrivers(seasonId);

  const currentDirver = form.watch(`${position}.driverId`);

  const availableDrivers = drivers?.filter((x) => {
    return (
      Object.values(form.watch())
        .filter((x) => x)
        .find((y) => y.driverId === x.id) === undefined || x.id === currentDirver
    );
  });
  return (
    <Box sx={{ display: "flex", gap: " 10px", margin: "5px" }} key={position}>
      <SelectField
        includeSearchHeader
        label={`Driver position ${position}`}
        name={`${position}.driverId`}
        options={
          availableDrivers?.map((x) => ({
            label: x.DriverInfo.name,
            value: x.id,
          })) || []
        }
      />
      <InputField name={`${position}.minutes`} type={"number"} label={"Minutes"} />
      <InputField name={`${position}.seconds`} type={"number"} label={"Seconds"} />
      <InputField name={`${position}.milliseconds`} type={"number"} label={"Milliseconds"} />
    </Box>
  );
};
