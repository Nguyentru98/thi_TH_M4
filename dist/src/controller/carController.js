"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("../service/car"));
class carController {
    constructor() {
        this.getAll = async (req, res) => {
            let listcar = await this.carService.getAll();
            res.json(listcar);
        };
        this.delete = async (req, res) => {
            let data = await this.carService.delete(req.params.id);
            res.json("xóa thành công");
        };
        this.update = async (req, res) => {
            let data = await this.carService.update(req.params.id, req.body);
            res.json("sửa thành công");
        };
        this.findById = async (req, res) => {
            let data = await this.carService.findById(req.query.id);
            res.json(data);
        };
        this.carService = car_1.default;
    }
}
exports.default = new carController();
//# sourceMappingURL=carController.js.map