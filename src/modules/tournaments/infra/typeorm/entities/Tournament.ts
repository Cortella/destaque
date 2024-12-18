
import { Game } from "@modules/games/infra/typeorm/entities/Game";
import { League } from "@modules/league/infra/typeorm/entities/League";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tournaments")
class Tournament {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  initialDate: Date;

  @Column()
  finalDate: Date;

  @Column({ type: "varchar", length: 50 })
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Game, (game) => game.tournament)
  games: Game[];
  
  @ManyToOne(() => League, (league) => league.tournaments)
  league: League;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Tournament };
