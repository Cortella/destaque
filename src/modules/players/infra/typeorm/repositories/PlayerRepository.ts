import { Repository, getRepository } from 'typeorm'

import { AppError } from '@shared/errors/AppError'
import { Player } from '../entities/Player'
import { IPlayersRepository } from '@modules/players/repositories/IPlayersRepository'
import { ICreatePlayerDTO } from '@modules/players/dtos/ICreatePlayerDTO'

class PlayersRepository implements IPlayersRepository {
  private repository: Repository<Player>

  constructor() {
    this.repository = getRepository(Player)
  }
  async create(data: ICreatePlayerDTO, userId: string): Promise<void> {
    data = { ...data, userId: userId }
    const player = this.repository.create(data)
    await this.repository.save(player)
  }

  async findById(id: string): Promise<Player> {
    const Player = await this.repository.findOne({
      where: { id },
    })

    if (!Player) {
      throw new AppError('User not found!', 404)
    }

    return Player
  }

  async findByUsername(username: string): Promise<Player> {
    const player = await this.repository.findOne({
      where: { username },
    })
    console.log('busca retornou x')
    return player
  }

  show(): Promise<Player[]> {
    const Players = this.repository.find()
    return Players
  }
}

export { PlayersRepository }
