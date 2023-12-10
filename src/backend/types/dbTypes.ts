import { ConstructorTeam, Season } from "@prisma/client";

export interface ConstructorTeamType extends ConstructorTeam {
  season: Season;
}
