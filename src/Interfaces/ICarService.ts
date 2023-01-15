import ICar from './ICar';
import ICarWithId from './ICarWithId';

export default interface ICarService {
  registerCar(carData: ICar): Promise<ICarWithId | null>;
}