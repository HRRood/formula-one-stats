import { getGpWeekendById } from "@/backend/repositories/gp-weekend/getGpWeekendById";
import { GpWeekendDetail } from "./gpWeekendDetail";
import { Container } from "@mui/material";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getGpWeekendById(params.id);

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <Container>
      <GpWeekendDetail initData={data} />
    </Container>
  );
}
