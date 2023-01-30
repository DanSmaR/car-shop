import TCategoryVehicle from '../Utils/Types/CategoryVehicle';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: TCategoryVehicle;
  engineCapacity: number;
  type?: VehicleTypes.MOTORCYCLE;
}
