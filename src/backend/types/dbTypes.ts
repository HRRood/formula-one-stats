import {ConstructorTeam, Driver, DriverInfo, Season} from "@prisma/client";

export interface ConstructorTeamType extends ConstructorTeam {
  season: Season;
}

export interface DriverType extends Driver {
  season: Season;
  ConstructorTeam: ConstructorTeamType;
  DriverInfo: DriverInfo;
}
