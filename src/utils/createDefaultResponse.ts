import { NextResponse } from "next/server";

// apiUtils.ts
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

export const createDefaultResponse = <T>(data: T, success = true, message = "", options?: ResponseInit) => {
  return NextResponse.json(
    {
      data,
      message,
      success,
    },
    options
  );
};
