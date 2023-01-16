import ICarWithIdAndStatus from '../Interfaces/ICarWithIdAndStatus';

export default class Car {
  protected id: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICarWithIdAndStatus) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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

  geColor() {
    return this.color;
  }

  setColor(_color: string) {
    this.color = _color;
  }

  getStatus() {
    return this.status;
  }

  setStatus(_status: boolean) {
    this.status = _status;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(_buyValue: number) {
    this.buyValue = _buyValue;
  }

  getDoorsQty() {
    return this.doorsQty;
  }

  getSeatsQty() {
    return this.seatsQty;
  }
}
