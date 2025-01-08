import { Tournament } from '@modules/tournaments/infra/typeorm/entities/Tournament';
import { Team } from '@modules/teams/infra/typeorm/entities/Team'; // Importação da entidade Team
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from "uuid";
import { Round } from '@modules/tournaments/infra/typeorm/entities/Round';

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

  @Column({
    type: 'enum',
    enum: ['scheduled', 'in_progress', 'finished', 'canceled'],
  })
  status: 'scheduled' | 'in_progress' | 'finished' | 'canceled';

  @Column({ type: 'json', nullable: true })
  score?: {
    home: number;
    away: number;
  };

  // Relacionamento com o torneio
  @ManyToOne(() => Tournament, (tournament) => tournament.games)
  @JoinColumn({ name: 'tournamentId' })
  tournament: Tournament;

  @ManyToOne(() => Round, (round) => round.games)
  @JoinColumn({ name: 'roundId' })
  round: Round;

  @Column()
  tournamentId: string;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
