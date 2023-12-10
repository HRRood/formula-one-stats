"use client";

import { useGetSeasonById } from "@/api/season/useGetSeasonById";
import { Season } from "@prisma/client";
import { SeasonInfoForm } from "./seasonInfoForm";
import { SeasonInfo } from "./seasonInfo";

interface Props {
  id: string;
}

export const SeasonDetailPage = ({ id }: Props) => {
  const { data, mutate } = useGetSeasonById(id);
  const season = id.startsWith("new") ? { id: "new-season", year: 0 } : (data as Season);

  return (
    <>
      <SeasonInfoForm season={season} mutate={mutate} />
      <SeasonInfo id={id} />
    </>
  );
};
