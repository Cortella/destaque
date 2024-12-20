import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/users/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensuredAuthenticated";
import { GetUserByIdController } from "@modules/users/useCases/getUserById/GetUserByIdController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const getUserByIdController = new GetUserByIdController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:user_id", getUserByIdController.handle);

usersRoutes.patch("/:user_id/admin", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
