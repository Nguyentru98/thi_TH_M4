import { Car } from "../entity/car";
import {AppDataSource} from "../data-source";

class CarService {
    private carRepository;
    constructor() {
        this.carRepository = AppDataSource.getRepository(Car);
    }

    getAll = async () => {
        let car = await this.carRepository.find();
        return car;
    }
    add = async (car) => {
        await this.carRepository.save(car)
    }
    delete = async (id) => {
        return await this.carRepository.delete(id)
    }
    update = async ( id, car) => {
        return await this.carRepository.update(id, car)
    }
    finById  = async (id) => {
        return await this.carRepository.find(id)
    }
}

export default new CarService();
