import { Game } from "@modules/games/infra/typeorm/entities/Game";
import { IPoitsToLeagueDTO } from "@modules/league/dto/IPointsToLeagueDTO";
import { Prediction } from "@modules/players/infra/typeorm/entities/Prediction";

export function getGameResult(
  homeScore: number,
  awayScore: number
): "home" | "away" | "draw" {
  if (homeScore > awayScore) return "home";
  if (homeScore < awayScore) return "away";
  return "draw";
}

export function getPlayerPoints(prediction: Prediction, game: Game, leagueMetricPoints: IPoitsToLeagueDTO) : number{
    let points = 0
    if(prediction.homeTeamScore == game.homeTeamResult && prediction.awayTeamScore == game.awayTeamResult){
        points = leagueMetricPoints.pointsperFullHit
    } else if(game?.result == prediction?.predictionResult){
        points = leagueMetricPoints.pointsPerResult
    } else if(prediction.homeTeamScore == game.homeTeamResult || prediction.awayTeamScore == game.awayTeamResult) {
        points = leagueMetricPoints.pointsPerTeamGoals
    } else {
        points = 0
    }
    return points
}
