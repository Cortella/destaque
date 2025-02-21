import { Game } from '@modules/games/infra/typeorm/entities/Game'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  OneToMany,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('teams')
class Team {
  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  shield: string

  @Column({ type: 'varchar' })
  city: string

  @Column({ type: 'varchar', nullable: true })
  stadium?: string

  @CreateDateColumn()
  created_at: Date

  @OneToMany(() => Game, (game) => game.homeTeam)
  homeGames: Game[]

  @OneToMany(() => Game, (game) => game.awayTeam)
  awayGames: Game[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
    this.created_at = new Date()
  }
}

export { Team }
