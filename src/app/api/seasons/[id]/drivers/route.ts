import { getSeasonDrivers } from "@/backend/repositories/season/drivers/getSeasonDrivers";
import { getSeasonById } from "@/backend/repositories/season/getSeasonById";
import { createDefaultResponse } from "@/utils/createDefaultResponse";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const season = await getSeasonById(id);
  if (!season) return createDefaultResponse(null, false, "Season not found", { status: 404 });

  const seasonDrivers = await getSeasonDrivers(id);

  return createDefaultResponse(seasonDrivers);
}
