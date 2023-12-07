import { createSeason } from "@/backend/repositories/season/createSeason";
import { getAllSeasons } from "@/backend/repositories/season/getAllSeasons";
import { getSeasonCount } from "@/backend/repositories/season/getSeasonCount";
import { calculatePagination } from "@/utils/calculatePagination";
import { createDefaultResponse } from "@/utils/createDefaultResponse";
import { Season } from "@prisma/client";
import { z } from "zod";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageNumber = parseInt(searchParams.get("pageNumber") ?? "1");
  const pageSize = parseInt(searchParams.get("pageSize") ?? "10");
  const seasons = await getAllSeasons({ pagination: { pageNumber, pageSize } });
  const seasonCount = await getSeasonCount();
  const pagination = calculatePagination(seasonCount, pageSize, pageNumber);
  return createDefaultResponse({ items: seasons, pagination });
}

const seasonValidation = z.object({
  year: z
    .number()
    .min(1950)
    .max(new Date().getFullYear() + 1),
});

export async function POST(request: Request) {
  const { year }: Season = await request.json();
  const data = seasonValidation.safeParse({ year });

  if (!data.success) {
    return createDefaultResponse({}, false, "Invalid season data", { status: 400 });
  }

  const uuid = crypto.randomUUID();

  const season = await createSeason({ id: uuid, ...data.data });
  return createDefaultResponse(season, true, "Season created", { status: 201 });
}
