import { Repository, getRepository } from "typeorm";

import { AppError } from "@shared/errors/AppError";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { ICreateTeamDTO } from "@modules/teams/dtos/ICreateTeamDTO";
import { Tounament } from "../entities/Tounament";
import { ITournamentRepository } from "@modules/tournaments/repositories/ITounamentRepository";
import { ICreateTournamentsDTO } from "@modules/tournaments/dtos/ICreateTournamentsDTO";

class TounamentRepository implements ITournamentRepository {
  private repository: Repository<Tounament>;

  constructor() {
    this.repository = getRepository(Tounament);
  }
  async create(data: ICreateTournamentsDTO): Promise<void> {
    const Tounament = this.repository.create(data);
    await this.repository.save(Tounament);
  }

  async findById(id: string): Promise<Tounament> {
    const team = await this.repository.findOne({
      where: { id },
    });

    if (!team) {
      throw new AppError("User not found!", 404);
    }

    return team;
  }

  async findByName(name: string): Promise<Tounament> {
    const tounament = await this.repository.findOne({
      where: { name },
    });

    return tounament;
  }

  show(): Promise<Tounament[]> {
    const tounaments = this.repository.find();
    return tounaments;
  }
}

export { TounamentRepository };
