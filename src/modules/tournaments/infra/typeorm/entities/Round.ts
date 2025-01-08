import { Game } from "@modules/games/infra/typeorm/entities/Game";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, JoinColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Tournament } from "./Tournament";

@Entity('rounds')
export class Round {
  @PrimaryColumn()
  id: string;

  @Column()
  roundNumber: number;

  @ManyToOne(() => Tournament, (tournament) => tournament.rounds)
  @JoinColumn({ name: 'tournamentId' })
  tournament: Tournament;

  @OneToMany(() => Game, (game) => game.round)
  games: Game[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}