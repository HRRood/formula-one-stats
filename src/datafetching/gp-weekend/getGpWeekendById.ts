import { GpWeekend } from "@/backend/types/dbTypes";
import { ApiOptions, api } from "../api";
import { toDate } from "date-fns";

export const getGpWeekendById = async (id: string, options?: ApiOptions): Promise<GpWeekend | null> => {
  const response = await api.get<GpWeekend>(`/api/gp-weekend/${id}`, options);

  if (!response.succeeded) {
    return null;
  }

  if (!response.data) {
    return null;
  }

  const data = {
    ...response.data,
    date: toDate(new Date(response.data.date)),
  };

  return data;
};
