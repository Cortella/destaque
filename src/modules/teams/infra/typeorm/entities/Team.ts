import { Game } from "@modules/games/infra/typeorm/entities/Game";
import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("teams")
class Team {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  shield: string;

  @Column()
  city: string;

  @Column()
  stadium?: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Game, (game) => game.homeTeam)
  homeGames: Game[];

  @OneToMany(() => Game, (game) => game.awayTeam)
  awayGames: Game[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Team };