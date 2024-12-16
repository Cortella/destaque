import { ICreateTeamDTO } from "../dtos/ICreateTeamDTO";
import { Team } from "../infra/typeorm/entities/Team";

interface ITeamsRepository {
  create(data: ICreateTeamDTO): Promise<void>;
  findById(id: string): Promise<Team>;
  findByName(name: string): Promise<Team>;
  show(): Promise<Team[]>
}

export { ITeamsRepository };
