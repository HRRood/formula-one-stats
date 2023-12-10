"use client";

import { createOrUpdateConstructor } from "@/api/constructor/createOrUpdateConstructor";
import { useGetConstructorById } from "@/api/constructor/useGetConstructorById";
import { createOrUpdateDriverInfo } from "@/api/drivers-info/createOrUpdateDriverInfo";
import { useGetDriverInfoById } from "@/api/drivers-info/useGetDriverInfoById";
import { createOrUpdateSeason } from "@/api/season/createOrUpdateSeason";
import { useGetAllSeasons } from "@/api/season/useGetAllSeasons";
import { useGetSeasonById } from "@/api/season/useGetSeasonById";
import { FormHeader } from "@/components/global/form/FormHeader/formHeader";
import { DateField } from "@/components/global/form/fields/dateField";
import { InputField } from "@/components/global/form/fields/inputField";
import { SelectField } from "@/components/global/form/fields/selectField";
import { Form } from "@/wrappers/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Grid, TextField } from "@mui/material";
import { ConstructorTeam, DriverInfo, Season } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  id: string;
}

const driverInfoValidation = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  shortName: z.string().min(3, { message: "Short Name is required" }).max(3, { message: "Short Name must be 3 characters" }),
  birthday: z.coerce.date().min(new Date(1900, 1, 1), { message: "Birthday must be after 1900" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  championships: z.coerce.number().min(0, { message: "Championships is required" }),
  wins: z.coerce.number().min(0, { message: "Wins is required" }),
  podiums: z.coerce.number().min(0, { message: "Podiums is required" }),
  fastestLaps: z.coerce.number().min(0, { message: "Fastest Laps is required" }),
  polepositions: z.coerce.number().min(0, { message: "Polepositions is required" }),
  dnfs: z.coerce.number().min(0, { message: "DNFs is required" }),
  dnss: z.coerce.number().min(0, { message: "DNSs is required" }),
  dsqs: z.coerce.number().min(0, { message: "DSQs is required" }),
  raceStarts: z.coerce.number().min(0, { message: "Racestarts is required" }),
});

export const defaultDriverInfo: DriverInfo = {
  id: "new-driver-info",
  name: "New Driver",
  birthday: new Date(),
  championships: 0,
  dnfs: 0,
  wins: 0,
  dnss: 0,
  dsqs: 0,
  polepositions: 0,
  fastestLaps: 0,
  nationality: "",
  podiums: 0,
  shortName: "",
  raceStarts: 0,
};

export const DriversInfoDetailPage = ({ id }: Props) => {
  const router = useRouter();
  const { data, mutate } = useGetDriverInfoById(id);

  const driverInfo = (id.startsWith("new") ? defaultDriverInfo : data) as DriverInfo;
  const form = useForm({
    resolver: zodResolver(driverInfoValidation),
    defaultValues: driverInfo,
  });
  console.log(form.getValues("birthday"));

  const onSubmit = async (data: DriverInfo) => {
    const constructorResponse = await createOrUpdateDriverInfo(data);
    await mutate();
    if (!constructorResponse.succeeded) {
      return;
    }
    router.push(`/drivers-info`);
  };

  return (
    <Form {...form} onSubmit={onSubmit}>
      <FormHeader overviewUrl="/drivers-info" titleFormKey="name" mutate={mutate} onDelete={async () => console.log("delete")} />
      {/* <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <InputField name="shortName" label="Short Name" />
          {/* <InputField name="birthday" type="date" /> */}
          <DateField name="birthday" label="Birthday" />
          <InputField name="nationality" label="Nationality" />
          <InputField name="raceStarts" label="Race Starts" type="number" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <InputField name="championships" label="Championships" type="number" />
          <InputField name="wins" label="Wins" type="number" />
          <InputField name="polepositions" label="Pole Positions" type="number" />
          <InputField name="fastestLaps" label="Fastest Laps" type="number" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <InputField name="podiums" label="Podiums" type="number" />
          <InputField name="dnfs" label="DNFs" type="number" />
          <InputField name="dnss" label="DNSs" type="number" />
          <InputField name="dsqs" label="DSQs" type="number" />
        </Grid>
      </Grid>
      {/* </Box> */}
    </Form>
  );
};
