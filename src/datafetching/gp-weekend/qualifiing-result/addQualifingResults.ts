import { GpWeekend } from "@prisma/client";
import { api } from "../../api";
import { QualifingResultsFormState } from "@/components/dialog/addQualifingResults";

export const addQualifingResults = async (data: QualifingResultsFormState, gpWeekendId: string) => {
  return await api.post(`/api/gp-weekend/${gpWeekendId}/qualifing-results`, data);
};
