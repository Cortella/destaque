import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { Team } from "@modules/teams/infra/typeorm/entities/Team";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class ShowTeamsUseCase {
  constructor(
    @inject("TeamsRepository")
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(): Promise<Team[]> {
    return this.teamsRepository.show();
  }
}

export { ShowTeamsUseCase };
