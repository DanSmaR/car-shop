import ICar from './ICar';
import ICarWithIdAndStatus from './ICarWithIdAndStatus';

export default interface ICarService {
  registerCar(carData: ICar): Promise<ICarWithIdAndStatus | null>;
}
