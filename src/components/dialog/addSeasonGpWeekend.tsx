import { useGetAllSeasonConstructors } from "@/api/season/constructor/useGetAllSeasonsConstructors";
import { DialogPropsMap } from "@/hooks/layout/useDialog";
import { Form } from "@/wrappers/form";
import { Box, Select } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/components/global/form/fields/inputField";
import { SelectField } from "@/components/global/form/fields/selectField";
import { useGetAllDriversInfo } from "@/api/drivers-info/useGetAllDriversInfo";
import { Button } from "@/components/global/button";
import { Driver, GpWeekend } from "@/backend/types/dbTypes";
import { DateField } from "../global/form/fields/dateField";

const validation = z.object({
  id: z.string().min(1, { message: "Id is required" }),
  seasonId: z.string().min(1, { message: "Season is required" }),
  date: z.coerce.date().min(new Date(1900, 1, 1), { message: "Date is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  name: z.string().min(1, { message: "Name is required" }),
});
export const AddSeasonGpWeekend = ({ seasonId, onCreate }: DialogPropsMap["addSeasonGpWeekendDialog"]) => {
  const form = useForm<GpWeekend>({
    resolver: zodResolver(validation),
    defaultValues: {
      id: "new-season-gp-weekend",
      seasonId,
      type: "",
      name: "",
      date: new Date(),
    },
  });

  return (
    <Box sx={{ padding: "20px", width: { sx: "90vw", sm: "60vw", md: "40vw", lg: "20vw" } }}>
      <Form {...form} onSubmit={onCreate}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <InputField name={"name"} type={"text"} label={"Name"} />
          <SelectField
            name={"type"}
            label={"Type"}
            options={[
              { label: "Grand Prix", value: "gp" },
              { label: "Sprint", value: "sprint" },
            ]}
          />
          <DateField name="date" label="Date" />

          <Button type={"submit"} color={"primary"}>
            Save
          </Button>
        </Box>
      </Form>
    </Box>
  );
};
