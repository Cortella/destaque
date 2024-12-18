import { ICreatePlayerDTO } from "../dtos/ICreatePlayerDTO";
import { Player } from "../infra/typeorm/entities/Player";

interface IPlayersRepository {
  create(data: ICreatePlayerDTO, userId: string): Promise<void>;
  findById(id: string): Promise<Player>;
  findByUsername(username: string): Promise<Player>;
  show(): Promise<Player[]>;
}

export { IPlayersRepository };
