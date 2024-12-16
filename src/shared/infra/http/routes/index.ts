import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { teamsRoutes } from "./teams.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/teams", teamsRoutes);
router.use(authenticateRoutes);

export { router };
