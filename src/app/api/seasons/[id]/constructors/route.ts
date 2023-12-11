import { getSeasonConstructors } from "@/backend/repositories/season/constructors/getSeasonConstructors";
import { getSeasonById } from "@/backend/repositories/season/getSeasonById";
import { createDefaultResponse } from "@/utils/createDefaultResponse";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const season = await getSeasonById(id);
  if (!season) return createDefaultResponse(null, false, "Season not found", { status: 404 });

  const seasonDrivers = await getSeasonConstructors(id);

  return createDefaultResponse(seasonDrivers);
}
