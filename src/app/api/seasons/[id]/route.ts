import { getSeasonById } from "@/backend/repositories/season/getSeasonById";
import { createDefaultResponse } from "@/utils/createDefaultResponse";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const season = await getSeasonById(id);
  return createDefaultResponse(season);
}
