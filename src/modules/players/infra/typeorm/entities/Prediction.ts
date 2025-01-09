import { Game } from "@modules/games/infra/typeorm/entities/Game";
import { League } from "@modules/league/infra/typeorm/entities/League";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("predictions")
class Prediction {
  @PrimaryColumn()
  id: string;

  @Column()
  playerId: string;

  @Column()
  gameId: string;

  @Column()
  leagueId: string;

  @ManyToOne(() => Game, (game) => game.predictions)
  @JoinColumn({ name: "gameId", referencedColumnName: "id" })
  game: Game;

  @ManyToOne(() => League)
  @JoinColumn({ name: "leagueId" })
  league: League;

  @Column()
  homeTeamScore: number;

  @Column()
  awayTeamScore: number;

  @Column()
  points: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Prediction };
