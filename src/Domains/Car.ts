import ICarWithIdAndStatus from '../Interfaces/ICarWithIdAndStatus';

export default class Car {
  protected _id: string;
  protected _model: string;
  protected _year: number;
  protected _color: string;
  protected _status: boolean;
  protected _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(car: ICarWithIdAndStatus) {
    this._id = car.id;
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status;
    this._buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }

  get id() {
    return this._id;
  }

  get model() {
    return this._model;
  }

  set model(model: string) {
    this._model = model;
  }

  get year() {
    return this._year;
  }

  set year(year: number) {
    this._year = year;
  }

  get color() {
    return this._color;
  }

  set color(color: string) {
    this._color = color;
  }

  get status() {
    return this._status;
  }

  set status(status: boolean) {
    this._status = status;
  }

  get buyValue() {
    return this._buyValue;
  }

  set buyValue(buyValue: number) {
    this._buyValue = buyValue;
  }

  get doorsQty() {
    return this._doorsQty;
  }

  get seatsQty() {
    return this._seatsQty;
  }
}