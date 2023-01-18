import ICar from '../ICar';
import IVehicleModel from './IVehicleModel';

export default interface ICarModel extends IVehicleModel<ICar> {
  findOne(id: string): Promise<ICar | null>;
  find(): Promise<ICar[]>;
  updateById(id: string, dataToUpdate: Partial<ICar>): Promise<ICar | null>;
}
