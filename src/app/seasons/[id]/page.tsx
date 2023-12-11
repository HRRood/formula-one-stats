"use client";

import { Container } from "@/components/global/container";
import { SeasonDetailPage } from "./seasonDetailPage";
import { useGetSeasonById } from "@/api/season/useGetSeasonById";
import { useGetAllSeasonDrivers } from "@/api/season/driver/useGetAllSeasons";
import { useGetAllSeasonConstructors } from "@/api/season/constructor/useGetAllSeasonsConstructors";

export default function Page({ params }: { params: { id: string } }) {
  const { isLoading } = useGetSeasonById(params.id);
  const { isLoading: seasonConstructorLoading } = useGetAllSeasonConstructors(params.id);
  const { isLoading: seasonDriversLoading } = useGetAllSeasonDrivers(params.id);

  if (isLoading || seasonDriversLoading || seasonConstructorLoading) return <div>Loading...</div>;

  return (
    <Container>
      <SeasonDetailPage id={params.id} />
    </Container>
  );
}
