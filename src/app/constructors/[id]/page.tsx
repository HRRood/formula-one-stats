"use client";

import { Container } from "@/components/global/container";
import { ConstrutorDetailPage } from "./constructorDetailPage";
import { useGetAllSeasons } from "@/datafetching/season/useGetAllSeasons";
import { useGetConstructorById } from "@/datafetching/constructor/useGetConstructorById";

export default function Page({ params }: { params: { id: string } }) {
  const { data, mutate, isLoading } = useGetConstructorById(params.id);
  const { isLoading: seasonLoading } = useGetAllSeasons();

  if (isLoading || seasonLoading) return <div>Loading...</div>;

  return (
    <Container>
      <ConstrutorDetailPage id={params.id} />
    </Container>
  );
}
