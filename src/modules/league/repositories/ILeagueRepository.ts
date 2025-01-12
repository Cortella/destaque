import { ICreateLeagueDTO } from "../dto/ICreateLeagueDTO";
import { League } from "../infra/typeorm/entities/League";

export interface ILeagueRepository {
  create(data: ICreateLeagueDTO): Promise<League>;
  getById(leagueId: string): Promise<League>;
  addTournamentInLeague(tournamentId: string, leagueId: string): Promise<void>;
  findLeaguesByTournamentId(tournamentId: string): Promise<League[]>
  getLeagueByName(name: string): Promise<League>;
  getLeaguePoints(leagueId: string): Promise<any>;
}
