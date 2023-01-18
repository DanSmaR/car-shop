export default interface IVehicleModel<T> {
  create(vehicleData: T): Promise<T>;
  find(): Promise<T[]>;
  // findOne(id: string): Promise<IMotorcycle | null>;
  // updateById(id: string, dataToUpdate: Partial<IMotorcycle>): Promise<IMotorcycle | null>;
}
