declare class CarService {
    private carRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (car: any) => Promise<void>;
    delete: (id: any) => Promise<any>;
    update: (id: any, car: any) => Promise<any>;
    finById: (id: any) => Promise<any>;
}
declare const _default: CarService;
export default _default;
