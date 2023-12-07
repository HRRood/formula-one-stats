import { Season } from "@prisma/client";
import { api } from "../api";

export const createSeason = async (year: number) => {
  return await api.post<Season>("/season", { year });
};
