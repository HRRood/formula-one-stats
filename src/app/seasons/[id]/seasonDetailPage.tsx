"use client";

import { SeasonInfo } from "./seasonInfo";
import { SeasonFormWrapper } from "@/app/seasons/[id]/seasonFormWrapper";

interface Props {
  id: string;
}

export const SeasonDetailPage = ({ id }: Props) => {
  return (
    <>
      <SeasonFormWrapper id={id} />
      <SeasonInfo id={id} />
    </>
  );
};
