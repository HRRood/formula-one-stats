import { Season } from "@prisma/client";
import { api } from "../api";

export const createOrUpdateSeason = async (data: Season) => {
  return await api.post<Season>("/api/seasons", data);
};
