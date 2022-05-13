import express from 'express';
import { ADMController } from '../controllers/mainController';


const adminrouter = express.Router();

adminrouter.get('/', ADMController.GetlAdmin);

adminrouter.get('/:id', ADMController.GetNAdmin);

adminrouter.post('/', ADMController.PostAdmin);

adminrouter.patch('/:id/', ADMController.PatchAdmin);

adminrouter.delete('/:id', ADMController.DeleteAdmin);

adminrouter.delete('/', ADMController.DeleteALLAdmin);

export {adminrouter as MAINRouter};





