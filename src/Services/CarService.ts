import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/ICarModel';
import ICarService from '../Interfaces/ICarService';
import ICarWithIdAndStatus from '../Interfaces/ICarWithIdAndStatus';
import CarMongooseODM from '../Models/CarMongooseODM';

export default class CarService implements ICarService {
  constructor(private carModel: ICarModel = new CarMongooseODM()) {}

  private createCarDomain(car: ICarWithIdAndStatus | null): ICarWithIdAndStatus | null {
    if (car) {
      const newCar = new Car(car);
      return {
        id: newCar.id,
        model: newCar.model,
        year: newCar.year,
        color: newCar.color,
        status: newCar.status,
        buyValue: newCar.buyValue,
        doorsQty: newCar.doorsQty,
        seatsQty: newCar.seatsQty,
      };
    }
    return null;
  }

  public async registerCar(carData: ICar): Promise<ICarWithIdAndStatus | null> {
    const newCar = await this.carModel.create(carData);
    return this.createCarDomain(newCar as ICarWithIdAndStatus);
  }
}
