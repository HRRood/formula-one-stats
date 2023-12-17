import {ConstructorTeam, Driver, DriverInfo, Season} from "@prisma/client";

export interface ConstructorTeamType extends ConstructorTeam {
  season: Season;
  Driver: Omit<DriverType, "ConstructorTeam" | "Season">[];
}

export interface DriverType extends Driver {
  Season: Season;
  ConstructorTeam: ConstructorTeamType;
  DriverInfo: DriverInfo;
}
