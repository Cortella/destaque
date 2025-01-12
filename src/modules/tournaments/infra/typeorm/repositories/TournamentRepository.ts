import { Repository, getRepository } from "typeorm";

import { AppError } from "@shared/errors/AppError";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { ICreateTeamDTO } from "@modules/teams/dtos/ICreateTeamDTO";
import { Tournament } from "../entities/Tournament";
import { ITournamentRepository } from "@modules/tournaments/repositories/ITournamentRepository";
import { ICreateTournamentsDTO } from "@modules/tournaments/dtos/ICreateTournamentsDTO";

class TournamentRepository implements ITournamentRepository {
  private repository: Repository<Tournament>;

  constructor() {
    this.repository = getRepository(Tournament);
  }
  async create(data: ICreateTournamentsDTO): Promise<void> {
    const tournament = this.repository.create(data);
    await this.repository.save(tournament);
  }

  async findById(id: string): Promise<Tournament> {
    const team = await this.repository.findOne({
      where: { id },
    });

    if (!team) {
      throw new AppError("User not found!", 404);
    }

    return team;
  }

  async findByName(name: string): Promise<Tournament> {
    const tournament = await this.repository.findOne({
      where: { name },
    });

    return tournament;
  }

  show(): Promise<Tournament[]> {
    const tournaments = this.repository.find();
    return tournaments;
  }
}

export { TournamentRepository };
