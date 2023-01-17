import TCategoryVehicle from '../Utils/Types/CategoryVehicle';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: TCategoryVehicle;
  engineCapacity: number;
}
