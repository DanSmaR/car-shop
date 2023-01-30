// eslint-disable-next-line max-classes-per-file
import ICar from '../Interfaces/ICar';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  private type: VehicleTypes.CAR;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.type = car.type || VehicleTypes.CAR;
  }

  getDoorsQty() {
    return this.doorsQty;
  }

  getSeatsQty() {
    return this.seatsQty;
  }

  getType() {
    return this.type;
  }
}
