import { getConstructorById } from "@/backend/repositories/constructor/getConstructorById";
import { getDriverInfoById } from "@/backend/repositories/driver-info/getDriverInfoById";
import { createDefaultResponse } from "@/utils/createDefaultResponse";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const constructor = await getDriverInfoById(id);
  return createDefaultResponse(constructor);
}
