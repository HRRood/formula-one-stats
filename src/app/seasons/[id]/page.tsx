"use client";

import { Container } from "@/components/global/container";
import { SeasonDetailPage } from "./seasonDetailPage";
import { useGetSeasonById } from "@/api/season/useGetSeasonById";
import { useGetAllSeasonDrivers } from "@/api/season/driver/useGetAllSeasons";

export default function Page({ params }: { params: { id: string } }) {
  const { isLoading } = useGetSeasonById(params.id);
  const { isLoading: seasonDriversLoading } = useGetAllSeasonDrivers(params.id);

  if (isLoading || seasonDriversLoading) return <div>Loading...</div>;

  return (
    <Container>
      <SeasonDetailPage id={params.id} />
    </Container>
  );
}
