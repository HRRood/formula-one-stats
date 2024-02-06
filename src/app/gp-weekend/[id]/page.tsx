import { getGpWeekendById } from "@/backend/repositories/gp-weekend/getGpWeekendById";
import { GpWeekendDetail } from "./gpWeekendDetail";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getGpWeekendById(params.id);

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>GP Weekend</h1>
      <GpWeekendDetail initData={data} />
    </div>
  );
}
