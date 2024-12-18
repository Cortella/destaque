import { Player } from "@modules/players/infra/typeorm/entities/Player";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Player, (player) => player.user, { nullable: true })
  player?: Player;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
