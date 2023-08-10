import {Request, Response} from "express";
import car from "../service/car";
import * as fs from "fs";

class carController {
    private carService;

    constructor() {
        this.carService = car;
    }

    getAll = async (req: Request, res: Response) => {
        let listcar = await this.carService.getAll();
        res.json(listcar);
    }
    delete = async(req: Request, res: Response) => {
        let data = await this.carService.delete(req.params.id)
        res.json("xóa thành công");
    }
    update =async (req: Request ,res: Response) => {
        let data = await this.carService.update(req.params.id, req.body)
        res.json("sửa thành công");
    }
    findById =async (req: Request ,res: Response) => {
        let data = await this.carService.findById(req.query.id)
        res.json(data);
    }

}

export default new carController();
