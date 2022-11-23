/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post("/", createUserController.handle);

userRoutes.patch(
    "/avatar",
    ensureAuthenticate,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { userRoutes };