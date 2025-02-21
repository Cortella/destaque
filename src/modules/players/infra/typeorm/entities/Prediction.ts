import { Game } from '@modules/games/infra/typeorm/entities/Game'
import { League } from '@modules/league/infra/typeorm/entities/League'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('predictions')
class Prediction {
  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ type: 'varchar', length: 255 })
  playerId: string

  @Column({ type: 'uuid' })
  gameId: string

  @Column({ type: 'uuid' })
  leagueId: string

  @Column({ type: 'enum', enum: ['home', 'away', 'draw'] })
  predictionResult: 'home' | 'away' | 'draw'

  @ManyToOne(() => Game, (game) => game.predictions)
  @JoinColumn({ name: 'gameId', referencedColumnName: 'id' })
  game: Game

  @ManyToOne(() => League)
  @JoinColumn({ name: 'leagueId' })
  league: League

  @Column({ type: 'int' })
  homeTeamScore: number

  @Column({ type: 'int' })
  awayTeamScore: number

  @Column({ type: 'int' })
  points: number

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Prediction }
