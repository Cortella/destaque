import { CreatePlayerController } from "@modules/players/useCases/createPlayer/CreatePlayerController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensuredAuthenticated";

const playersRoutes = Router();

const createplayerController = new CreatePlayerController();

playersRoutes.post("/", ensureAuthenticated, createplayerController.handle);

export { playersRoutes };
