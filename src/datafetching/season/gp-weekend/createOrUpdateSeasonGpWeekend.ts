import { GpWeekend } from "@prisma/client";
import { api } from "../../api";

export const createOrUpdateSeasonGpWeekend = async (data: GpWeekend) => {
  return await api.post<GpWeekend>(`/api/seasons/${data.seasonId}/gp-weekends`, data);
};
