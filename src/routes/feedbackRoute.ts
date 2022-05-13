import express from 'express';
import { FBController } from '../controllers/feedbackController';

const fbRouter = express.Router();

fbRouter.get('/feedback', FBController.GetlFBController);

fbRouter.get('/feedback/:id', FBController.GetNFBController);

fbRouter.post('/feedback', FBController.PostFB);

fbRouter.patch('/feedback/:id', FBController.PatchFB);

fbRouter.put('/feedback/:id', FBController.PatchFB);

fbRouter.delete('/feedback/:id', FBController.DeleteFB);

fbRouter.delete('/feedback', FBController.DeleteALLFB);

export {fbRouter as FBRoute} ;