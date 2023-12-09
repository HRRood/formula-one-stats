import { Season } from "@prisma/client";
import { ApiOptions, api } from "../api";

export const getSeasonById = async (id: string, options?: ApiOptions): Promise<Season | null> => {
  const response = await api.get<Season>(`/api/seasons/${id}`, options);

  if (!response.succeeded) {
    return null;
  }

  if (!response.data) {
    return null;
  }

  return response.data;
};
