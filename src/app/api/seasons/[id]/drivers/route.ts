import {getSeasonDrivers} from "@/backend/repositories/season/drivers/getSeasonDrivers";
import {getSeasonById} from "@/backend/repositories/season/getSeasonById";
import {createDefaultResponse} from "@/utils/createDefaultResponse";
import {Driver} from "@prisma/client";
import {z} from "zod";
import {getConstructorById} from "@/backend/repositories/constructor/getConstructorById";
import {getDriverInfoById} from "@/backend/repositories/driver-info/getDriverInfoById";
import {createOrUpdateSeasonDriver} from "@/backend/repositories/season/drivers/createOrUpdateSeasonDriver";

export async function GET(request: Request, {params}: { params: { id: string } }) {
  const {id} = params;
  const season = await getSeasonById(id);
  if (!season) return createDefaultResponse(null, false, "Season not found", {status: 404});

  const seasonDrivers = await getSeasonDrivers(id);

  return createDefaultResponse(seasonDrivers);
}

const driverValidation = z.object({
  id: z.string(),
  driverInfoId: z.string().min(1),
  constructorTeamId: z.string().min(1),
  seasonId: z.string().min(1),
  number: z.number().min(1).max(99),
});

export async function POST(request: Request) {
  const {id, driverInfoId, constructorTeamId, seasonId, number}: Driver = await request.json();
  const data = driverValidation.safeParse({id, driverInfoId, constructorTeamId, seasonId, number});

  if (!data.success) {
    return createDefaultResponse({}, false, "Invalid driver data", {status: 400});
  }

  const season = await getSeasonById(seasonId);
  if (!season) return createDefaultResponse(null, false, "Season not found", {status: 404});

  const constructor = await getConstructorById(constructorTeamId);
  if (!constructor) return createDefaultResponse(null, false, "Constructor not found", {status: 404});

  const driverInfo = await getDriverInfoById(driverInfoId);
  if (!driverInfo) return createDefaultResponse(null, false, "Driver info not found", {status: 404});

  const driver = await createOrUpdateSeasonDriver(data.data);
  return createDefaultResponse(driver);
}
