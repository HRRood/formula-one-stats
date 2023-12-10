import { getConstructorById } from "@/backend/repositories/constructor/getConstructorById";
import { createDefaultResponse } from "@/utils/createDefaultResponse";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const constructor = await getConstructorById(id);
  return createDefaultResponse(constructor);
}
