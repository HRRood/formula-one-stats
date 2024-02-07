import { QualifyingResult } from "@/backend/types/dbTypes";
import { ApiOptions, api } from "../../api";
import { toDate } from "date-fns";

export const getQualifingResults = async (gpWeekendId: string, options?: ApiOptions): Promise<QualifyingResult[] | null> => {
  const response = await api.get<QualifyingResult[]>(`/api/gp-weekend/${gpWeekendId}/qualifing-results`, options);

  if (!response.succeeded) {
    return null;
  }

  if (!response.data) {
    return null;
  }

  return response.data;
};
