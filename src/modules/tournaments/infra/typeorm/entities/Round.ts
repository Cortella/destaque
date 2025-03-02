import { Game } from '@modules/games/infra/typeorm/entities/Game'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn, // Use PrimaryGeneratedColumn para UUID
  JoinColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Tournament } from './Tournament'

@Entity('rounds')
export class Round {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'int' })
  roundNumber: number

  @Column({ type: 'timestamp' })
  initialDate: Date

  @Column({ type: 'timestamp' })
  finalDate: Date

  @ManyToOne(() => Tournament, (tournament) => tournament.rounds)
  @JoinColumn({ name: 'tournamentId' })
  tournament: Tournament

  @OneToMany(() => Game, (game) => game.round)
  games: Game[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
