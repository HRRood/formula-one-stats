"use client";

import { Container } from "@/components/global/container";
import { SeasonDetailPage } from "./seasonDetailPage";
import { useGetSeasonById } from "@/api/season/useGetSeasonById";

export default function Page({ params }: { params: { id: string } }) {
  const { data, mutate, isLoading } = useGetSeasonById(params.id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <SeasonDetailPage id={params.id} />
    </Container>
  );
}
