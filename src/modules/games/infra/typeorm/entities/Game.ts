import { Tournament } from '@modules/tournaments/infra/typeorm/entities/Tournament';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @ManyToOne(() => Tournament, (tournament) => tournament.games)
  tournament: Tournament;
}