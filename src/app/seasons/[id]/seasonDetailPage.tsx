"use client";

import { createOrUpdateSeason } from "@/api/season/createOrUpdateSeason";
import { useGetSeasonById } from "@/api/season/useGetSeasonById";
import { FormHeader } from "@/components/global/form/formHeader";
import { Form } from "@/wrappers/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Season } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  id: string;
}

const validation = z.object({
  id: z.string(),
  year: z.coerce.number(),
});

export const SeasonDetailPage = ({ id }: Props) => {
  const router = useRouter();
  const { data, mutate } = useGetSeasonById(id);

  const season = id.startsWith("new") ? { id: "new-season", year: 0 } : (data as Season);
  const form = useForm({
    resolver: zodResolver(validation),
    defaultValues: season,
  });

  const onSubmit = async (data: Season) => {
    const seasonResponse = await createOrUpdateSeason(data);
    console.log(seasonResponse);
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
