"use client";

import { createOrUpdateSeason } from "@/datafetching/season/createOrUpdateSeason";
import { FormHeader } from "@/components/global/form/FormHeader/formHeader";
import { Form } from "@/wrappers/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useGetSeasonById } from "@/datafetching/season/useGetSeasonById";
import { Season } from "@/backend/types/dbTypes";

const validation = z.object({
  id: z.string(),
  year: z.coerce.number(),
});

interface Props {
  id: string;
}

export const SeasonForm = ({ id }: Props) => {
  const { data, mutate } = useGetSeasonById(id);
  const season = id.startsWith("new") ? { id: "new-season", year: 0 } : (data as Season);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(validation),
    defaultValues: season,
  });

  const onSubmit = async (data: Season) => {
    const seasonResponse = await createOrUpdateSeason(data);
    await mutate();
    if (!seasonResponse.succeeded) {
      return;
    }

    router.push(`/seasons`);
  };
  return (
    <Form {...form} onSubmit={onSubmit}>
      <FormHeader titleFormKey="year" mutate={mutate} onDelete={async () => console.log("delete")} />
    </Form>
  );
};
