import { League } from "@modules/league/infra/typeorm/entities/League";
import { User } from "@modules/users/infra/typeorm/entities/User";
import {
  Entity,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("players")
export class Player {
  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar", length: 255 })
  username: string;

  @Column({ type: "varchar", length: 255 })
  player_avatar: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @OneToOne(type => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ type: "varchar", nullable: true })
  userId: string;

  // // Relacionamento com Leagues como membro
  @ManyToMany(() => League, (league) => league.members)
  leagues: League[];

  // Relacionamento com Leagues como administrador
  @OneToMany(() => League, (league) => league.admin)
  adminLeagues: League[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}