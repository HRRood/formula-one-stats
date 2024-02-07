import { createQualifingResult } from "@/backend/repositories/gp-weekend/qualifiing-result/createQualifingResult";
import { getQualifingResults } from "@/backend/repositories/gp-weekend/qualifiing-result/getQualifingResults";
import { positionType } from "@/components/qualifingResultsForm/driverPositionInputs";
import { createDefaultResponse } from "@/utils/createDefaultResponse";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const qualifiingResults = await getQualifingResults(id);
  const data = qualifiingResults.map((x) => {
    return {
      ...x,
      time: parseFloat(x.time?.toString() || "0"),
    };
  });
  return createDefaultResponse(data);
}

interface QualifingData {
  driverId: string;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

interface QualifingDataSchema {
  first: QualifingData;
  second: QualifingData;
  third: QualifingData;
  fourth: QualifingData;
  fifth: QualifingData;
  sixth: QualifingData;
  seventh: QualifingData;
  eighth: QualifingData;
  ninth: QualifingData;
  tenth: QualifingData;
  eleventh: QualifingData;
  twelfth: QualifingData;
  thirteenth: QualifingData;
  fourteenth: QualifingData;
  fifteenth: QualifingData;
  sixteenth: QualifingData;
  seventeenth: QualifingData;
  eighteenth: QualifingData;
  nineteenth: QualifingData;
  twentieth: QualifingData;
}
// map positions to numbers
const positionToNumbers = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9,
  tenth: 10,
  eleventh: 11,
  twelfth: 12,
  thirteenth: 13,
  fourteenth: 14,
  fifteenth: 15,
  sixteenth: 16,
  seventeenth: 17,
  eighteenth: 18,
  nineteenth: 19,
  twentieth: 20,
};

export async function POST(request: Request, { params, body }: { params: { id: string }; body: any }) {
  const requestBody: QualifingDataSchema = await request.json();
  const { id } = params;
  const keys = Object.keys(requestBody) as (keyof QualifingDataSchema)[];

  try {
    for await (const [key, value] of Object.entries(requestBody)) {
      const pos = key as positionType;
      const seconds = value.minutes * 60 + value.seconds + value.milliseconds / 1000;
      await createQualifingResult(positionToNumbers[pos], seconds, value.driverId, id);
    }
  } catch (e) {
    return createDefaultResponse(null, false, "Something went wrong");
  }

  return createDefaultResponse(true, true);
}
