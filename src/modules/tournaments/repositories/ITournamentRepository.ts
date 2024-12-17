import { ICreateTournamentsDTO } from "../dtos/ICreateTournamentsDTO";
import { Tournament } from "../infra/typeorm/entities/Tournament";

interface ITournamentRepository {
  create(data: ICreateTournamentsDTO): Promise<void>;
  findById(id: string): Promise<Tournament>;
  findByName(name: string): Promise<Tournament>;
  show(): Promise<Tournament[]>
}

export { ITournamentRepository };
