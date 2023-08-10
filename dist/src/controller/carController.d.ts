import { Request, Response } from "express";
declare class carController {
    private carService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: carController;
export default _default;
