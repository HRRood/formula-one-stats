import { getSeasonDrivers } from "@/backend/repositories/season/drivers/getSeasonDrivers";
import { getSeasonById } from "@/backend/repositories/season/getSeasonById";
import { createDefaultResponse } from "@/utils/createDefaultResponse";
import { Driver } from "@prisma/client";
import { z } from "zod";
import { getConstructorById } from "@/backend/repositories/constructor/getConstructorById";
import { getDriverInfoById } from "@/backend/repositories/driver-info/getDriverInfoById";
import { createOrUpdateSeasonDriver } from "@/backend/repositories/season/drivers/createOrUpdateSeasonDriver";
import { getSeasonGpWeekends } from "@/backend/repositories/season/gp-weekend/getSeasonGpWeekends";
import { GpWeekend } from "@/backend/types/dbTypes";
import { createOrUpdateSeasonGpWeekend } from "@/backend/repositories/season/gp-weekend/createOrUpdateSeasonGpWeekend";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const season = await getSeasonById(id);
  if (!season) return createDefaultResponse(null, false, "Season not found", { status: 404 });

  const seasonGpWeekends = await getSeasonGpWeekends(id);

  return createDefaultResponse(seasonGpWeekends);
}

const driverValidation = z.object({
  id: z.string(),
  seasonId: z.string().min(1),
  name: z.string().min(1),
  date: z.coerce.date().min(new Date(1900, 1, 1)),
  type: z.string().min(1),
});

export async function POST(request: Request) {
  const { id, name, date, type, seasonId }: GpWeekend = await request.json();
  const data = driverValidation.safeParse({ id, seasonId, name, date, type });

  if (!data.success) {
    return createDefaultResponse({}, false, "Invalid gp data " + data.error, { status: 400 });
  }

  const season = await getSeasonById(seasonId);
  if (!season) return createDefaultResponse(null, false, "Season not found", { status: 404 });

  const driver = await createOrUpdateSeasonGpWeekend(data.data);
  return createDefaultResponse(driver);
}
