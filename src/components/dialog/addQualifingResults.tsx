import { QualifyingResult } from "@/backend/types/dbTypes";
import { useGetGpWeekendById } from "@/datafetching/gp-weekend/useGetGpWeekendById";
import { useGetAllSeasonDrivers } from "@/datafetching/season/driver/useGetAllSeasons";
import { useGetSeasonById } from "@/datafetching/season/useGetSeasonById";
import { DialogPropsMap, useDialog } from "@/hooks/layout/useDialog";
import { Form } from "@/wrappers/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SelectField } from "../global/form/fields/selectField";
import { InputField } from "../global/form/fields/inputField";
import { DateField } from "../global/form/fields/dateField";
import { DriverPositionInputs, positionType } from "../qualifingResultsForm/driverPositionInputs";
import { Button } from "../global/button";
import { addQualifingResults } from "@/datafetching/gp-weekend/qualifiing-result/addQualifingResults";
import { useGetQualifingResults } from "@/datafetching/gp-weekend/qualifiing-result/useGetQualifiingResults";

interface QualifingData {
  driverId: string;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface QualifingResultsFormState {
  first: QualifingData;
  second: QualifingData;
  third: QualifingData;
  fourth: QualifingData;
  fifth: QualifingData;
  sixth: QualifingData;
  seventh: QualifingData;
  eighth: QualifingData;
  ninth: QualifingData;
  tenth: QualifingData;
  eleventh: QualifingData;
  twelfth: QualifingData;
  thirteenth: QualifingData;
  fourteenth: QualifingData;
  fifteenth: QualifingData;
  sixteenth: QualifingData;
  seventeenth: QualifingData;
  eighteenth: QualifingData;
  nineteenth: QualifingData;
  twentieth: QualifingData;
}

const QualifingDataSchema = z.object({
  driverId: z.string().min(1),
  minutes: z.coerce.number().optional(),
  seconds: z.coerce.number().optional(),
  milliseconds: z.coerce.number().optional(),
});

const validation = z.object({
  first: QualifingDataSchema,
  second: QualifingDataSchema,
  third: QualifingDataSchema,
  fourth: QualifingDataSchema,
  fifth: QualifingDataSchema,
  sixth: QualifingDataSchema,
  seventh: QualifingDataSchema,
  eighth: QualifingDataSchema,
  ninth: QualifingDataSchema,
  tenth: QualifingDataSchema,
  eleventh: QualifingDataSchema,
  twelfth: QualifingDataSchema,
  thirteenth: QualifingDataSchema,
  fourteenth: QualifingDataSchema,
  fifteenth: QualifingDataSchema,
  sixteenth: QualifingDataSchema,
  seventeenth: QualifingDataSchema,
  eighteenth: QualifingDataSchema,
  nineteenth: QualifingDataSchema,
  twentieth: QualifingDataSchema,
});

const position = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
];

export const AddQualifingResultsDialog = ({ gpWeekendId }: DialogPropsMap["addQualifingResultsDialog"]) => {
  const { data } = useGetGpWeekendById(gpWeekendId);
  const { mutate } = useGetQualifingResults(gpWeekendId);
  const form = useForm<QualifingResultsFormState>({
    resolver: zodResolver(validation),
  });

  const { closeDialog } = useDialog();

  const onSubmit = async (data: QualifingResultsFormState) => {
    await addQualifingResults(data, gpWeekendId);
    await mutate();
    closeDialog();
  };

  return (
    <Box sx={{ padding: "20px", width: "80vw" }}>
      <Form {...form} onSubmit={onSubmit}>
        {position.map((pos) => {
          const position = pos as positionType;
          return <DriverPositionInputs key={position} position={position} seasonId={data?.seasonId || ""} />;
        })}
        <Button type={"submit"} color={"primary"}>
          Save
        </Button>
      </Form>
    </Box>
  );
};
