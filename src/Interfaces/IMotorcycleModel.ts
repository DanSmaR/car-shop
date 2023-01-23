import IMotorcycle from './IMotorcycle';

export default interface IMotorcycleModel {
  create(carData: IMotorcycle): Promise<IMotorcycle>;
  // findOne(id: string): Promise<IMotorcycle | null>;
  // find(): Promise<IMotorcycle[]>;
  // updateById(id: string, dataToUpdate: Partial<IMotorcycle>): Promise<IMotorcycle | null>;
}
