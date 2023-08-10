"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("../entity/car");
const data_source_1 = require("../data-source");
class CarService {
    constructor() {
        this.getAll = async () => {
            let car = await this.carRepository.find();
            return car;
        };
        this.add = async (car) => {
            await this.carRepository.save(car);
        };
        this.delete = async (id) => {
            return await this.carRepository.delete(id);
        };
        this.update = async (id, car) => {
            return await this.carRepository.update(id, car);
        };
        this.finById = async (id) => {
            return await this.carRepository.find(id);
        };
        this.carRepository = data_source_1.AppDataSource.getRepository(car_1.Xe);
    }
}
exports.default = new CarService();
//# sourceMappingURL=car.js.map