export interface IPrediction {
    gameId: string;
    playerId: string;
    leagueId: string
    homeTeamScore: number;
    awayTeamScore: number;
}

export interface IPlayerPredictions {
    playerId: string;
    leagueId: string;
    predictions: [
        games: {
            gameId: string;
            homeTeamScore: number;
            awayTeamScore: number;
            predictionsDate?: Date
        }
    ]
}