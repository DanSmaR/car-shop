// eslint-disable-next-line max-classes-per-file
import IMotorcycle from '../Interfaces/IMotorcycle';
import TCategoryVehicle from '../Utils/Types/CategoryVehicle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: TCategoryVehicle;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  getCategory() {
    return this.category;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }
}
