import { Driver, Season } from "@/backend/types/dbTypes";
import { api } from "../../api";

export const createOrUpdateSeasonDriver = async (data: Driver) => {
  return await api.post<Season>(`/api/seasons/${data.seasonId}/drivers`, data);
};
