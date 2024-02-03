export interface ConstructorStanding {
  Id: string;
  constructorId: string;
  seasonId: string;
  position: number;
  points: number;
  Constructor: ConstructorTeam;
  Season: Season;
}

export interface Driver {
  id: string;
  driverInfoId: string;
  constructorTeamId: string;
  number: number;
  seasonId: string;
  ConstructorTeam: ConstructorTeam;
  DriverInfo: DriverInfo;
  Season: Season;
}

export interface DriverInfo {
  id: string;
  name: string;
  shortName: string;
  birthday: Date;
  nationality: string;
  championships: number;
  wins: number;
  podiums: number;
  fastestLaps: number;
  polepositions: number;
  dnfs: number;
  dnss: number;
  dsqs: number;
  raceStarts: number;
}

export interface DriverStanding {
  id: string;
  driverId: string;
  seasonId: string;
  position: number;
  points: number;
  Season: Season;
}

export interface GpWeekend {
  id: string;
  name: string;
  date: Date;
  type: string;
  seasonId: string;
  Season: Season;
}

export interface PitStop {
  id: string;
  driverId: string;
  raceId: string;
  sconds: number;
  oldTire: string;
  newTire: string;
  lap: number;
  Race: Race;
}

export interface Point {
  id: string;
  position: number;
  points: number;
  sprintPoint: boolean;
}

export interface QualifyingResult {
  id: string;
  position: number;
  time: Date;
  driverId: string;
  gpWeekendId: string;
  GpWeekend: GpWeekend;
}

export interface Race {
  Id: string;
  type: string;
  weather: string;
  gpWeekendId: string;
  GpWeekend: GpWeekend;
}

export interface RaceResult {
  id: string;
  driverId: string;
  raceId: string;
  pointsId: string;
  fastestLapBonus: boolean;
  posiitonsGained: number;
  Race: Race;
  Point: Point;
}

export interface Season {
  id: string;
  year: number;
}

export interface ConstructorTeam {
  id: string;
  name: string;
  countryOrigin: string;
  seasonId: string;
  Season: Season;
  Driver: Driver[];
}
