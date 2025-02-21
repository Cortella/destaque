import { Game } from '@modules/games/infra/typeorm/entities/Game'
import { League } from '@modules/league/infra/typeorm/entities/League'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Round } from './Round'

@Entity('tournaments')
class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'timestamp' })
  initialDate: Date

  @Column({ type: 'timestamp' })
  finalDate: Date

  @Column({ type: 'varchar', length: 50 })
  type: string

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @OneToMany(() => Game, (game) => game.tournament)
  games: Game[]

  @ManyToMany(() => League, (league) => league.tournaments)
  leagues: League[]

  @OneToMany(() => Round, (round) => round.tournament)
  rounds: Round[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Tournament }
