// eslint-disable-next-line max-classes-per-file
import IMotorcycle from '../Interfaces/IMotorcycle';
import TCategoryVehicle from '../Utils/Types/CategoryVehicle';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: TCategoryVehicle;
  private engineCapacity: number;
  private type: VehicleTypes.MOTORCYCLE;

  constructor(moto: IMotorcycle) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
    this.type = moto.type || VehicleTypes.MOTORCYCLE;
  }

  getCategory() {
    return this.category;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }

  getType() {
    return this.type;
  }
}
