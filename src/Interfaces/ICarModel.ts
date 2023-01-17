import ICar from './ICar';

export default interface ICarModel {
  create(carData: ICar): Promise<ICar>;
  findOne(id: string): Promise<ICar | null>;
  find(): Promise<ICar[]>;
  updateById(id: string, dataToUpdate: Partial<ICar>): Promise<ICar | null>;
}
