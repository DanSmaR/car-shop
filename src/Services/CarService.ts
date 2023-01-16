import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarService from '../Interfaces/ICarService';
import ICarWithIdAndStatus from '../Interfaces/ICarWithIdAndStatus';

export default class CarService implements ICarService {
  constructor(private carModel: ICarModel = new CarODM()) {}

  private createCarDomain(car: ICarWithIdAndStatus | null): ICarWithIdAndStatus | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCar(carData: ICar): Promise<ICarWithIdAndStatus | null> {
    const newCar = await this.carModel.create(carData);
    return this.createCarDomain(newCar);
  }
}