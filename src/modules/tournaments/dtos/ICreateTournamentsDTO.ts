import { Team } from "@modules/teams/infra/typeorm/entities/Team";

export type TounamentType = 'mata-mata' | 'grupos' | 'liga-nacional' | 'copa';

export interface ICreateTournamentsDTO {
  id?: string;
  name: string;
  initalDate: Date;
  finalDate: string;
  teams?: Team[];
  type?: TounamentType;
  champion?: Team;

}

export interface ITounamentLeagueFormatDTO {
  rounds: number;

}