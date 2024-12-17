import { Team } from "@modules/teams/infra/typeorm/entities/Team";

export type TournamentType = 'mata-mata' | 'grupos' | 'liga-nacional' | 'copa';

export interface ICreateTournamentsDTO {
  id?: string;
  name: string;
  initalDate: Date;
  finalDate: string;
  teams?: Team[];
  type?: TournamentType;
  champion?: Team;

}

export interface ITournamentLeagueFormatDTO {
  rounds: number;

}