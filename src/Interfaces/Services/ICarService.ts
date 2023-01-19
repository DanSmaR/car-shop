import Car from '../../Domains/Car';
import ICar from '../ICar';
import IVehicleService from './IVehicleService';

export default interface ICarService extends IVehicleService<ICar, Car> {
  getCarById(id: string): Promise<Car>;
  updateCarById(id: string, updatedData: Partial<ICar>): Promise<Car>; 
}
