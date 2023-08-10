import {Router} from "express";
import carController from "../controller/carController";

const carRouter = Router();
carRouter.get('/', carController.getAll);
export default carRouter;
