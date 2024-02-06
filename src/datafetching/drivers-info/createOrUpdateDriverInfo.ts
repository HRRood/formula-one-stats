import { DriverInfo } from "@/backend/types/dbTypes";
import { api } from "../api";

export const createOrUpdateDriverInfo = async (data: DriverInfo) => {
  return await api.post<DriverInfo>("/api/drivers-info", data);
};
