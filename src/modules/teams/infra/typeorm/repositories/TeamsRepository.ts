import { Repository, getRepository } from "typeorm";

import { AppError } from "@shared/errors/AppError";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { ICreateTeamDTO } from "@modules/teams/dtos/ICreateTeamDTO";
import { Team } from "../entities/Team";

class TeamsRepository implements ITeamsRepository {
  private repository: Repository<Team>;

  constructor() {
    this.repository = getRepository(Team);
  }
  async create(data: ICreateTeamDTO): Promise<void> {
    const team = this.repository.create(data);
    await this.repository.save(team);
  }

  async findById(id: string): Promise<Team> {
    const team = await this.repository.findOne({
      where: { id },
    });

    if (!team) {
      throw new AppError("Time não encontrado", 404);
    }

    return team;
  }

  async findByName(name: string): Promise<Team> {
    const team = await this.repository.findOne({
      where: { name },
    });

    return team;
  }

  show(): Promise<Team[]> {
    const teams = this.repository.find();
    return teams;
  }
}

export { TeamsRepository };
