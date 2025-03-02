import { Player } from '@modules/players/infra/typeorm/entities/Player'
import {
  Entity,
  Column,
  CreateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string

  @Column({ type: 'varchar', length: 255 })
  password: string

  @Column({ type: 'boolean', default: false })
  isAdmin: boolean

  @Column({ type: 'date' })
  birthDate: Date

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @OneToOne(() => Player, (player) => player.user)
  player: Player

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { User }
