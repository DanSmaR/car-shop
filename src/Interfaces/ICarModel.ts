import ICar from './ICar';

export default interface ICarModel {
  create(carData: ICar): Promise<ICar>;
  findOne(id: string): Promise<ICar>;
  find(): Promise<ICar[]>;
}
