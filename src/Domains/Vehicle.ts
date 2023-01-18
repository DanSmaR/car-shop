// eslint-disable-next-line max-classes-per-file
import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
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
}
