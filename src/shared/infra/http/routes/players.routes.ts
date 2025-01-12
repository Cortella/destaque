import { CreatePlayerController } from "@modules/players/useCases/createPlayer/CreatePlayerController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensuredAuthenticated";
import { SetPlayerPredictionsController } from "@modules/players/useCases/setPlayerPredictions/SetPlayerPredictionsController";

const playersRoutes = Router();

const createplayerController = new CreatePlayerController();
const setPlayerPrediction = new SetPlayerPredictionsController()

playersRoutes.post("/", ensureAuthenticated, createplayerController.handle);
playersRoutes.post("/predictions", setPlayerPrediction.handle);

export { playersRoutes };
