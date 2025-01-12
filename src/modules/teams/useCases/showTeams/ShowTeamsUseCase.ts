import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ITeamsRepository } from "../../repositories/ITeamsRepository";
import { ICreateTeamDTO } from "../../dtos/ICreateTeamDTO";
import { Team } from "@modules/teams/infra/typeorm/entities/Team";
import { REPOSITORIES } from "@utils/utils";

@injectable()
class ShowTeamsUseCase {
  constructor(
    @inject(REPOSITORIES.TEAMS_REPOSITORY)
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(): Promise<Team[]> {
    return this.teamsRepository.show();
  }
}

export { ShowTeamsUseCase };
