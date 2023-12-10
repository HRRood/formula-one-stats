"use client";

import { createOrUpdateConstructor } from "@/api/constructor/createOrUpdateConstructor";
import { useGetConstructorById } from "@/api/constructor/useGetConstructorById";
import { createOrUpdateSeason } from "@/api/season/createOrUpdateSeason";
import { useGetAllSeasons } from "@/api/season/useGetAllSeasons";
import { useGetSeasonById } from "@/api/season/useGetSeasonById";
import { FormHeader } from "@/components/global/form/FormHeader/formHeader";
import { InputField } from "@/components/global/form/fields/inputField";
import { SelectField } from "@/components/global/form/fields/selectField";
import { Form } from "@/wrappers/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Grid, TextField } from "@mui/material";
import { ConstructorTeam, Season } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  id: string;
}

const validation = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  countryOrigin: z.string().min(1, { message: "Country Origin is required" }),
  seasonId: z.string().min(1, { message: "Season is required" }),
});

export const ConstrutorDetailPage = ({ id }: Props) => {
  const router = useRouter();
  const { data, mutate } = useGetConstructorById(id);
  const { data: seasonData } = useGetAllSeasons();

  const constructor = (id.startsWith("new") ? { id: "new-constructor", countryOrigin: "", name: "New Construtor", seasonId: "" } : data) as ConstructorTeam;
  const form = useForm({
    resolver: zodResolver(validation),
    defaultValues: constructor,
  });

  const onSubmit = async (data: ConstructorTeam) => {
    const constructorResponse = await createOrUpdateConstructor(data);
    await mutate();
    if (!constructorResponse.succeeded) {
      return;
    }

    router.push(`/constructors`);
  };

  return (
    <Form {...form} onSubmit={onSubmit}>
      <FormHeader overviewUrl="/constructors" titleFormKey="name" mutate={mutate} onDelete={async () => console.log("delete")} />
      <Grid container spacing="5px">
        <Grid item xs={12} md={6}>
          <InputField name="countryOrigin" label="Country Origin" />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectField name="seasonId" options={seasonData?.items?.map((x) => ({ label: x.year.toString(), value: x.id })) || []} label="Season" />
        </Grid>
      </Grid>
    </Form>
  );
};
