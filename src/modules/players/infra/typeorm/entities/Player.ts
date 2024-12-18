import { League } from "@modules/league/infra/typeorm/entities/League";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { Entity, Column, CreateDateColumn, OneToOne, JoinColumn, PrimaryColumn, OneToMany } from "typeorm";
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

  @OneToOne(() => User, (user) => user.player)
  @JoinColumn()
  user: User;

  @OneToMany(() => League, (league) => league.admin)
  adminLeagues: League[];
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}