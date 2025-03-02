import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm'
import { Player } from '@modules/players/infra/typeorm/entities/Player'
import { Tournament } from '@modules/tournaments/infra/typeorm/entities/Tournament'
import { v4 as uuidV4 } from 'uuid'

@Entity('leagues')
export class League {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'boolean', default: false })
  isPublic: boolean

  @ManyToOne(() => Player, (player) => player.adminLeagues)
  admin: Player

  @ManyToMany(() => Player)
  @JoinTable({
    name: 'league_players',
    joinColumn: { name: 'leagueId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'playerId', referencedColumnName: 'id' },
  })
  members: Player[]

  @ManyToMany(() => Tournament, (tournament) => tournament.leagues)
  @JoinTable({
    name: 'league_tournaments',
    joinColumn: { name: 'leagueId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tournamentId', referencedColumnName: 'id' },
  })
  tournaments: Tournament[]

  @Column({ type: 'boolean', default: false })
  isOfficial: boolean

  @Column('json', { nullable: true })
  moderators?: { id: string; name: string }[]

  @Column({ type: 'timestamp', nullable: true })
  lastActivityDate: Date | null

  @Column({ type: 'int', default: 0 })
  pointsPerFullHit: number

  @Column({ type: 'int', default: 0 })
  pointsPerResult: number

  @Column({ type: 'int', default: 0 })
  pointsPerTeamGoals: number

  @Column({ type: 'int', default: 0 })
  boostPerRound: number

  @Column({ type: 'int', nullable: true })
  year: number | null

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
