/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

// specificationRoutes.use(ensureAuthenticate);
specificationRoutes.post(
    "/",
    ensureAuthenticate,
    ensureAdmin,
    createSpecificationController.handle
);

export { specificationRoutes };
