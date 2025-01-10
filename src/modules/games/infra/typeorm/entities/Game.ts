import { Tournament } from '@modules/tournaments/infra/typeorm/entities/Tournament';
import { Team } from '@modules/teams/infra/typeorm/entities/Team';
import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuidV4 } from "uuid";
import { Round } from '@modules/tournaments/infra/typeorm/entities/Round';
import { Prediction } from '@modules/players/infra/typeorm/entities/Prediction';

@Entity('games')
export class Game {
  @PrimaryColumn()
  id: string;

  // Relacionamento com o time mandante
  @ManyToOne(() => Team, (team) => team.homeGames)
  @JoinColumn({ name: 'homeTeamId' })
  homeTeam: Team;

  // Relacionamento com o time visitante
  @ManyToOne(() => Team, (team) => team.awayGames)
  @JoinColumn({ name: 'awayTeamId' })
  awayTeam: Team;

  @Column()
  homeTeamId: string;

  @Column()
  awayTeamId: string;

  @Column()
  date: Date;

  @Column()
  location: string;

  @Column()
  homeTeamResult: number;

  @Column()
  awayTeamResult: number;

  @Column()
  totalCards: number;

  @Column({
    type: 'enum',
    enum: ['home', 'away', 'draw'],
  })
  result: 'home' | 'away' | 'draw';

  @Column({
    type: 'enum',
    enum: ['scheduled', 'in_progress', 'finished', 'canceled'],
  })
  status: 'scheduled' | 'in_progress' | 'finished' | 'canceled';

  // Relacionamento com o torneio
  @ManyToOne(() => Tournament, (tournament) => tournament.games)
  @JoinColumn({ name: 'tournamentId' })
  tournament: Tournament;

  @ManyToOne(() => Round, (round) => round.games)
  @JoinColumn({ name: 'roundId' })
  round: Round;

  @Column()
  tournamentId: string;

  // Relacionamento com as previsões (um para muitos)
  @OneToMany(() => Prediction, (prediction) => prediction.game)
  predictions: Prediction[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
