import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
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

  @Column()
  homeTeamScore: number;

  @Column()
  awayTeamScore: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Prediction };