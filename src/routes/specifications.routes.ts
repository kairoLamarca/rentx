/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticate);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
