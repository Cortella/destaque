import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensuredAuthenticated";
import { GetUserByIdController } from "@modules/users/useCases/getUserById/GetUserByIdController";
import { SendForgotPasswordMailController } from "@modules/users/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const sendForgotPasswordMailController = new SendForgotPasswordMailController()

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:user_id", getUserByIdController.handle);
usersRoutes.post("/recovery/send", sendForgotPasswordMailController.handle)

usersRoutes.patch("/:user_id/admin", createUserController.handle);
export { usersRoutes };
