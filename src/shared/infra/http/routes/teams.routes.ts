import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/users/useCases/refreshToken/RefreshTokenController";
import { CreateTeamController } from "@modules/teams/createTeam/CreateTeamController";

const teamsRoutes = Router();

const createTeamController = new CreateTeamController();

teamsRoutes.post("/", createTeamController.handle);

export { teamsRoutes };
