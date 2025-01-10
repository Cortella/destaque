import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ITournamentRepository } from "../../repositories/ITournamentRepository";
import { ICreateTournamentsDTO } from "@modules/tournaments/dtos/ICreateTournamentsDTO";

@injectable()
class CreateTournamentUseCase {
  constructor(
    @inject("TournamentsRepository")
    private tournamentsRepository: ITournamentRepository
  ) {}

  async execute(data: ICreateTournamentsDTO): Promise<void> {
    const tournamentAlreadyExists = await this.tournamentsRepository.findByName(data?.name);

    if (tournamentAlreadyExists) {
      throw new AppError("tournament Already Exists", 404);
    }

    await this.tournamentsRepository.create(data);
  }
}

export { CreateTournamentUseCase };
