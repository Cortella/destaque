export interface ICreateGameDTO {
  id?: string;
  tournamentId: string; 
  homeTeamId: string;
  awayTeamId: string;
  date: Date;
  location: string;
  status: 'scheduled' | 'in_progress' | 'finished' | 'canceled';
  score?: {
    home: number;
    away: number;
  };
}