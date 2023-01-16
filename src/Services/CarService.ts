import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/ICarModel';
import ICarService from '../Interfaces/ICarService';
import ICarWithIdAndStatus from '../Interfaces/ICarWithIdAndStatus';
import CarMongooseODM from '../Models/CarMongooseODM';

export default class CarService implements ICarService {
  constructor(private carModel: ICarModel = new CarMongooseODM()) {}

  private createCarDomain(car: ICar | null): ICar | null {
    if (car) {
      const newCar = new Car(car);
      return {
        id: newCar.getId(),
        model: newCar.getModel(),
        year: newCar.getYear(),
        color: newCar.getColor(),
        status: newCar.getStatus(),
        buyValue: newCar.getBuyValue(),
        doorsQty: newCar.getDoorsQty(),
        seatsQty: newCar.getSeatsQty(),
      };
    }
    return null;
  }

  public async registerCar(carData: ICar): Promise<ICarWithIdAndStatus | null> {
    const newCar = await this.carModel.create(carData);
    return this.createCarDomain(newCar) as ICarWithIdAndStatus | null;
  }

  public async getCars(): Promise<ICarWithIdAndStatus[]> {
    const carsFound = await this.carModel.find();
    const carsDomainList = carsFound.map((car) => this.createCarDomain(car));
    return carsDomainList as Array<ICarWithIdAndStatus>;
  }

  public async getCarById(id: string): Promise<ICarWithIdAndStatus> {
    const carFound = await this.carModel.findOne(id);
    return this.createCarDomain(carFound) as ICarWithIdAndStatus;
  }
}
