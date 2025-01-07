import { Router } from "express";

import { CreateTeamController } from "@modules/teams/useCases/createTeam/CreateTeamController";
import { ShowTeamsController } from "@modules/teams/useCases/showTeams/ShowTeamsController";

const teamsRoutes = Router();

const createTeamController = new CreateTeamController();
const showTeamsController = new ShowTeamsController();

teamsRoutes.post("/", createTeamController.handle);
teamsRoutes.get("/", showTeamsController.handle);

export { teamsRoutes };
