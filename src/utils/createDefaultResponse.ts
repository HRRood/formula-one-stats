import { NextResponse } from "next/server";

export const createDefaultResponse = <T>(data: T, succeeded = true, message = "", options?: ResponseInit) => {
  return NextResponse.json(
    {
      data,
      message,
      succeeded,
    },
    options
  );
};
