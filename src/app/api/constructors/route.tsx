import { createOrUpdateConstructor } from "@/backend/repositories/constructor/createOrUpdateConstrutor";
import { getAllConstructors } from "@/backend/repositories/constructor/getAllConstructors";
import { getConstructorCount } from "@/backend/repositories/constructor/getConstructorCount";
import { getSeasonById } from "@/backend/repositories/season/getSeasonById";
import { ConstructorTeam } from "@/backend/types/dbTypes";
import { calculatePagination } from "@/utils/calculatePagination";
import { createDefaultResponse } from "@/utils/createDefaultResponse";
import { z } from "zod";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageNumber = parseInt(searchParams.get("pageNumber") ?? "1");
  const pageSize = parseInt(searchParams.get("pageSize") ?? "10");
  const constructors = await getAllConstructors({ pagination: { pageNumber, pageSize } });
  const constructorCount = await getConstructorCount();
  const pagination = calculatePagination(constructorCount, pageSize, pageNumber);
  return createDefaultResponse({ items: constructors, pagination });
}

const constructorValidation = z.object({
  id: z.string(),
  name: z.string(),
  countryOrigin: z.string(),
  seasonId: z.string(),
});

export async function POST(request: Request) {
  const { id, name, countryOrigin, seasonId }: ConstructorTeam = await request.json();
  const data = constructorValidation.safeParse({ id, name, countryOrigin, seasonId });

  if (!data.success) {
    return createDefaultResponse({}, false, "Invalid constructor data", { status: 400 });
  }

  const season = await getSeasonById(seasonId);

  if (!season) {
    return createDefaultResponse({}, false, "Season not found", { status: 404 });
  }

  const constructor = await createOrUpdateConstructor(data.data);

  return createDefaultResponse(constructor, true, "Constructor created");
}
