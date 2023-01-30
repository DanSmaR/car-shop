import TVehicleInterfaceOptions from '../../Utils/Types/TVehicleInterfaceOptions';

export default interface IVehicleModel<T extends TVehicleInterfaceOptions> {
  create(vehicleData: T): Promise<T>;
  find(): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
  updateById(id: string, dataToUpdate: Partial<T>): Promise<T | null>;
  getModelName(): string;
}
