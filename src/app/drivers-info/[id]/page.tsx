"use client";

import { Container } from "@/components/global/container";
import { DriversInfoDetailPage } from "./driversInfoDetailPage";
import { useGetDriverInfoById } from "@/api/drivers-info/useGetDriverInfoById";

export default function Page({ params }: { params: { id: string } }) {
  const { isLoading } = useGetDriverInfoById(params.id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <DriversInfoDetailPage id={params.id} />
    </Container>
  );
}
