export interface IPrediction {
  gameId: string;
  playerId: string;
  leagueId: string;
  homeTeamScore: number;
  awayTeamScore: number;
  predictionResult: "home" | "away" | "draw";
}

export interface IPlayerPredictions {
  playerId: string;
  leagueId: string;
  predictions: [
    games: {
      gameId: string;
      homeTeamScore: number;
      awayTeamScore: number;
      predictionsDate?: Date;
    }
  ];
}
export interface ISetResults {
  results: [
    {
      gameId: string;
      homeTeamResult: number;
      awayTeamResult: number;
    }
  ];
}
