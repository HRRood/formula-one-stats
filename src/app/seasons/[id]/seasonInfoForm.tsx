"use client";

import { createOrUpdateSeason } from "@/api/season/createOrUpdateSeason";
import { FormHeader } from "@/components/global/form/FormHeader/formHeader";
import { Form } from "@/wrappers/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Season } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const validation = z.object({
  id: z.string(),
  year: z.coerce.number(),
});

interface Props {
  season: Season;
  mutate: () => Promise<any>;
}

export const SeasonInfoForm = ({ season, mutate }: Props) => {
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
