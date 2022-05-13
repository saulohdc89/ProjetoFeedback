import express from 'express';
import { STRController } from '../controllers/setorController';
const setorRouter = express.Router();



setorRouter.get("/setor", STRController.GetlSetorController);

setorRouter.get("/setor/:id", STRController.GetlSetorController);

setorRouter.post("/setor", STRController.PostSetor);

setorRouter.patch("/setor/:id", STRController.PatchSetor);

setorRouter.put("/setor/:id",STRController.PutSetor);

setorRouter.delete("/setor/:id", STRController.DeleteSetor);

setorRouter.delete("/setor", STRController.DeleteALLSetor);

export {setorRouter as STRoute};