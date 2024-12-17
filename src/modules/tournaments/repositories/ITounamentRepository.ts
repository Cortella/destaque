import { ICreateTournamentsDTO } from "../dtos/ICreateTournamentsDTO";
import { Tounament } from "../infra/typeorm/entities/Tounament";

interface ITournamentRepository {
  create(data: ICreateTournamentsDTO): Promise<void>;
  findById(id: string): Promise<Tounament>;
  findByName(name: string): Promise<Tounament>;
  show(): Promise<Tounament[]>
}

export { ITournamentRepository };
