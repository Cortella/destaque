import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ITeamsRepository } from "../../repositories/ITeamsRepository";
import { ICreateTeamDTO } from "../../dtos/ICreateTeamDTO";
import { REPOSITORIES } from "@utils/utils";

@injectable()
class CreateTeamUseCase {
  constructor(
    @inject(REPOSITORIES.TEAMS_REPOSITORY)
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(data: ICreateTeamDTO): Promise<void> {
    const teamAlreadyExists = await this.teamsRepository.findByName(data?.name);

    if (teamAlreadyExists) {
      throw new AppError("Team Already Exists", 404);
    }

    await this.teamsRepository.create(data);
  }
}

export { CreateTeamUseCase };
