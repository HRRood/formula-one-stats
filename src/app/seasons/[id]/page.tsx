import { Container } from "@/components/global/container";

export default function Page({ params }: { params: { id: string } }) {
  return <Container>Season: {params.id}</Container>;
}
