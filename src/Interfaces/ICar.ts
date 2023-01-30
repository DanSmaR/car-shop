import VehicleTypes from '../Utils/Enum/enumVehicle';
import IVehicle from './IVehicle';

export default interface ICar extends IVehicle {
  doorsQty: number;
  seatsQty: number;
  type?: VehicleTypes.CAR;
}
