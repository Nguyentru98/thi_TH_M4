import {Router} from "express";
import carController from "../controller/carController";

const carRouter = Router();

carRouter.get('', carController.getAll);
carRouter.put('/update', carController.update);
carRouter.delete('/delete', carController.delete);
carRouter.post('/add', carController.add);
carRouter.get('', carController.findById);

export default carRouter;
