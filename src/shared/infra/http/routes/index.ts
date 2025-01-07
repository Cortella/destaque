import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { teamsRoutes } from "./teams.routes";
import { playersRoutes } from "./players.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/players", playersRoutes);
router.use("/teams", teamsRoutes);

router.use(authenticateRoutes);

export { router };
