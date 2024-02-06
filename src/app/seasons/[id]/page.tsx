"use client";

import { Container } from "@/components/global/container";
import { SeasonDetailPage } from "./seasonDetailPage";
import { useGetSeasonById } from "@/datafetching/season/useGetSeasonById";
import { useGetAllSeasonDrivers } from "@/datafetching/season/driver/useGetAllSeasons";
import { useGetAllSeasonConstructors } from "@/datafetching/season/constructor/useGetAllSeasonsConstructors";

export default function Page({ params }: { params: { id: string } }) {
  const { data, isLoading } = useGetSeasonById(params.id);
  const { data: constructorData, isLoading: seasonConstructorLoading } = useGetAllSeasonConstructors(params.id);
  const { data: driverData, isLoading: seasonDriversLoading } = useGetAllSeasonDrivers(params.id);

  if ((isLoading || seasonDriversLoading || seasonConstructorLoading) && !data && !constructorData && !driverData) return <div>Loading...</div>;

  return (
    <Container>
      <SeasonDetailPage id={params.id} />
    </Container>
  );
}
