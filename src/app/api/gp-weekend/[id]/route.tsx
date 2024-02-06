import { getGpWeekendById } from "@/backend/repositories/gp-weekend/getGpWeekendById";
import { createDefaultResponse } from "@/utils/createDefaultResponse";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const gpWeekend = await getGpWeekendById(id);
  return createDefaultResponse(gpWeekend);
}
