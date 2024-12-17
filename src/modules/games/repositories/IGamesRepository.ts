
import { ICreateGameDTO } from "../dtos/ICreateGameDTO";
import { Game } from "../infra/typeorm/entities/Game";

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<void>;
  findById(id: string): Promise<Game>;
  findByName(name: string): Promise<Game>;
  show(): Promise<Game[]>
}

export { IGamesRepository };
