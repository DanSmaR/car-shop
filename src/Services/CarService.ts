import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarService from '../Interfaces/ICarService';
import ICarWithId from '../Interfaces/ICarWithId';

export default class CarService implements ICarService {
  constructor(private carModel: ICarModel = new CarODM()) {}

  private createCarDomain(car: (ICarWithId) | null): ICarWithId | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCar(carData: ICar): Promise<ICarWithId | null> {
    const newCar = await this.carModel.create(carData);
    return this.createCarDomain(newCar);
  }
}