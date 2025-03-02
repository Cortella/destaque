import { Tournament } from '@modules/tournaments/infra/typeorm/entities/Tournament'
import { Team } from '@modules/teams/infra/typeorm/entities/Team'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Round } from '@modules/tournaments/infra/typeorm/entities/Round'
import { Prediction } from '@modules/players/infra/typeorm/entities/Prediction'

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Team, (team) => team.homeGames)
  @JoinColumn({ name: 'homeTeamId' })
  homeTeam: Team

  @ManyToOne(() => Team, (team) => team.awayGames)
  @JoinColumn({ name: 'awayTeamId' })
  awayTeam: Team

  @Column({ type: 'uuid' })
  homeTeamId: string

  @Column({ type: 'uuid' })
  awayTeamId: string

  @Column({ type: 'timestamp' })
  date: Date

  @Column({ type: 'varchar', length: 255 })
  location: string

  @Column({ type: 'int' })
  homeTeamResult: number

  @Column({ type: 'int' })
  awayTeamResult: number

  @Column({ type: 'int' })
  totalCards: number

  @Column({
    type: 'enum',
    enum: ['home', 'away', 'draw'],
  })
  result: 'home' | 'away' | 'draw'

  @Column({
    type: 'enum',
    enum: ['scheduled', 'in_progress', 'finished', 'canceled'],
  })
  status: 'scheduled' | 'in_progress' | 'finished' | 'canceled'

  @ManyToOne(() => Tournament, (tournament) => tournament.games)
  @JoinColumn({ name: 'tournamentId' })
  tournament: Tournament

  @ManyToOne(() => Round, (round) => round.games)
  @JoinColumn({ name: 'roundId' })
  round: Round

  @Column({ type: 'uuid' })
  tournamentId: string

  @OneToMany(() => Prediction, (prediction) => prediction.game)
  predictions: Prediction[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
