import { DriverInfo } from "@/backend/types/dbTypes";
import { ApiOptions, api } from "../api";
import { toDate } from "date-fns";

export const getDriverInfoById = async (id: string, options?: ApiOptions): Promise<DriverInfo | null> => {
  const response = await api.get<DriverInfo>(`/api/drivers-info/${id}`, options);

  if (!response.succeeded) {
    return null;
  }

  if (!response.data) {
    return null;
  }

  const data = {
    ...response.data,
    birthday: toDate(new Date(response.data.birthday)),
  };

  return data;
};
