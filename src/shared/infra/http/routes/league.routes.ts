import { Router } from "express";


import { AddTournamentInLeagueController } from "@modules/league/useCases/addTounamentInLeague/AddTournamentInLeagueController";
import { CreateLeagueController } from "@modules/league/useCases/createLeague/CreateLeagueController";

const leagueRoutes = Router();

const createLeagueController = new CreateLeagueController()
const addtournamentInLeague = new AddTournamentInLeagueController()

leagueRoutes.post("/", createLeagueController.handle);
leagueRoutes.post("/tournament", addtournamentInLeague.handle);

export { leagueRoutes };
