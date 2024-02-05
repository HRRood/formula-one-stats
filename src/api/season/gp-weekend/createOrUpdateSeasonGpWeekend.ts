import { Driver, Season } from "@/backend/types/dbTypes";
import { api } from "../../api";
import { GpWeekend } from "@prisma/client";

export const createOrUpdateSeasonGpWeekend = async (data: GpWeekend) => {
  return await api.post<Season>(`/api/seasons/${data.seasonId}/gp-weekends`, data);
};
