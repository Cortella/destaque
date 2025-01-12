import { Router } from "express";

import { SetEndGamesController } from "@modules/games/useCases/setEndGames/SetEndGamesController";
import { CreateTournamentController } from "@modules/tournaments/useCases/createTournaments/CreateTounamentController";

const tournamentsRoutes = Router();

const setEndGameController = new SetEndGamesController()
const crateTournamentController = new CreateTournamentController()

tournamentsRoutes.post("/games/end", setEndGameController.handle);
tournamentsRoutes.post("/", crateTournamentController.handle);

export { tournamentsRoutes };
