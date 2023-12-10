"use client";

import { SeasonDrivers } from "./seasonDrivers";

interface Props {
  id: string;
}

export const SeasonInfo = ({ id }: Props) => {
  return (
    <>
      <SeasonDrivers id={id} />
    </>
  );
};
