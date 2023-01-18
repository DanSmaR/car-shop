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

  getId() {
    return this.id;
  }

  getModel() {
    return this.model;
  }

  setModel(_model: string) {
    this.model = _model;
  }

  getYear() {
    return this.year;
  }

  setYear(_year: number) {
    this.year = _year;
  }

  getColor() {
    return this.color;
  }

  setColor(_color: string) {
    this.color = _color;
  }

  getStatus() {
    return this.status;
  }

  setStatus(_status: boolean | undefined) {
    this.status = _status;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(_buyValue: number) {
    this.buyValue = _buyValue;
  }

  getCategory() {
    return this.category;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }
}
