import { ICreateGameDTO } from '../dtos/ICreateGameDTO'
import { Game } from '../infra/typeorm/entities/Game'

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<void>
  findById(id: string): Promise<Game | null>
  getTornamentIdByGame(gameId: string): Promise<string | undefined>
  getPredicionsByGameId(gameId: string): Promise<void>
  findByName(name: string): Promise<Game | null>
  show(): Promise<Game[]>
  setFinishedGame(result: {
    gameId: string
    homeTeamResult: number
    awayTeamResult: number
  }): Promise<void>
}

export { IGamesRepository }
