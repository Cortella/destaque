import { Repository, getRepository } from "typeorm";
import { League } from "../entities/League";
import { ICreateLeagueDTO } from "@modules/league/dto/ICreateLeagueDTO";
import { ILeagueRepository } from "@modules/league/repositories/ILeagueRepository";
import { Tournament } from "@modules/tournaments/infra/typeorm/entities/Tournament";

class LeagueRepository implements ILeagueRepository {
  private repository: Repository<League>;
  private tournamentRepository: Repository<Tournament>;
  constructor() {
    this.repository = getRepository(League),
    this.tournamentRepository = getRepository(Tournament)
  }
  async addTournamentInLeague(
    tournamentId: string,
    leagueId: string
  ): Promise<void> {
    // Busca a liga com seus torneios associados
    const league = await this.repository.findOne({
      where: { id: leagueId },
      relations: ["tournaments"],
    });
  
    if (!league) {
      throw new Error(`League with ID ${leagueId} not found.`);
    }
  
    // Verifica se o torneio já está associado à liga
    const tournamentAlreadyLinked = league.tournaments.some(
      (tournament) => tournament.id === tournamentId
    );
  
    if (tournamentAlreadyLinked) {
      throw new Error(
        `Tournament with ID ${tournamentId} is already associated with League ${leagueId}.`
      );
    }
  
    // Busca o torneio
    const tournament = await this.tournamentRepository.findOne({
      where: { id: tournamentId },
    });
  
    if (!tournament) {
      throw new Error(`Tournament with ID ${tournamentId} not found.`);
    }
  
    // Adiciona o torneio à liga e salva
    league.tournaments.push(tournament);
    await this.repository.save(league);
  }
  

  async getById(leagueId: string): Promise<League> {
    const league = await this.repository.findOne({ where: { id: leagueId } });
    return league;
  }
  async getLeagueByName(name: string): Promise<League> {
    const league = await this.repository.findOne({ where: { name } });
    return league;
  }

  create(data: ICreateLeagueDTO): Promise<League> {
    const league = this.repository.create(data);
    return this.repository.save(league);
  }

  getLeaguePoints(leagueId: string): Promise<any> {
    return this.repository.findOne({
      where: { id: leagueId },
      select: ["pointsPerFullHit", "pointsPerResult", "pointsPerTeamGoals"],
    });
  }

  async findLeaguesByTournamentId(tournamentId: string): Promise<League[]> {
    const leagues = await this.repository
      .createQueryBuilder("league")
      .innerJoinAndSelect("league.tournaments", "tournament")
      .where("tournament.id = :tournamentId", { tournamentId })
      .getMany();

    return leagues;
  }
}

export { LeagueRepository };
