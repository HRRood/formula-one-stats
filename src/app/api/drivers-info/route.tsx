import { createOrUpdateDriverInfo } from "@/backend/repositories/driver-info/createOrUpdateDriverInfo";
import { getAllDriversInfo } from "@/backend/repositories/driver-info/getAllDriversInfo";
import { getDriversInfoCount } from "@/backend/repositories/driver-info/getDriversInfoCount";
import { DriverInfo } from "@/backend/types/dbTypes";
import { calculatePagination } from "@/utils/calculatePagination";
import { createDefaultResponse } from "@/utils/createDefaultResponse";
import { z } from "zod";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageNumber = parseInt(searchParams.get("pageNumber") ?? "1");
  const pageSize = parseInt(searchParams.get("pageSize") ?? "10");
  const constructors = await getAllDriversInfo({ pagination: { pageNumber, pageSize } });
  const constructorCount = await getDriversInfoCount();
  const pagination = calculatePagination(constructorCount, pageSize, pageNumber);
  return createDefaultResponse({ items: constructors, pagination });
}

const driverInfoValidation = z.object({
  id: z.string(),
  name: z.string().min(1),
  shortName: z.string().min(3),
  birthday: z.coerce.date().min(new Date(1900, 1, 1)),
  nationality: z.string().min(1),
  championships: z.coerce.number().min(0),
  wins: z.coerce.number().min(0),
  podiums: z.coerce.number().min(0),
  fastestLaps: z.coerce.number().min(0),
  polepositions: z.coerce.number().min(0),
  dnfs: z.coerce.number().min(0),
  dnss: z.coerce.number().min(0),
  dsqs: z.coerce.number().min(0),
  raceStarts: z.coerce.number().min(0),
});
export async function POST(request: Request) {
  const { id, name, birthday, championships, dnfs, dnss, dsqs, fastestLaps, nationality, podiums, polepositions, shortName, wins, raceStarts }: DriverInfo =
    await request.json();
  const data = driverInfoValidation.safeParse({
    id,
    name,
    birthday,
    championships,
    dnfs,
    dnss,
    dsqs,
    fastestLaps,
    nationality,
    podiums,
    polepositions,
    shortName,
    wins,
    raceStarts,
  });

  if (!data.success) {
    return createDefaultResponse({}, false, "Invalid season data", { status: 400 });
  }

  const driverInfo = await createOrUpdateDriverInfo(data.data);

  return createDefaultResponse(driverInfo, true, "Driver created");
}
