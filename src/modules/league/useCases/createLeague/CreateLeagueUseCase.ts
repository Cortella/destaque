import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ILeagueRepository } from "@modules/league/repositories/ILeagueRepository";
import { ICreateLeagueDTO } from "@modules/league/dto/ICreateLeagueDTO";
import { League } from "@modules/league/infra/typeorm/entities/League";
import { REPOSITORIES } from "@utils/utils";

@injectable()
class CreateLeagueUseCase {
  constructor(
    @inject(REPOSITORIES.LEAGUE_REPOSITORY)
    private leagueRepository: ILeagueRepository
  ) {}

  async execute(data: ICreateLeagueDTO): Promise<League> {
    const leagueAlreadyExists = await this.leagueRepository.getLeagueByName(data?.name);
    if (leagueAlreadyExists) throw new AppError("Liga já existe", 404);
    const league = await this.leagueRepository.create(data);
    return league
  }
}

export { CreateLeagueUseCase };
