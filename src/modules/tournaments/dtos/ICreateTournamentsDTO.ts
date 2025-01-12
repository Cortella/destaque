import { Team } from "@modules/teams/infra/typeorm/entities/Team";

export type TournamentType = 'mata-mata' | 'pontos-corridos' | 'copa';

export interface ICreateTournamentsDTO {
  id?: string;
  name: string;
  initalDate: Date;
  finalDate: string;
  type: TournamentType;
}

export interface ITournamentLeagueFormatDTO {
  rounds: number;

}