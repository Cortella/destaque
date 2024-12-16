import { ICreateTeamDTO } from "../dtos/ICreateTournamentsDTO";
import { Team } from "../infra/typeorm/entities/Tounament";

interface ITeamsRepository {
  create(data: ICreateTeamDTO): Promise<void>;
  findById(id: string): Promise<Team>;
  findByName(name: string): Promise<Team>;
  show(): Promise<Team[]>
}

export { ITeamsRepository };
