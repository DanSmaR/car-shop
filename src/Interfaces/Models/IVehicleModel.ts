export default interface IVehicleModel<T> {
  create(vehicleData: T): Promise<T>;
  // findOne(id: string): Promise<IMotorcycle | null>;
  // find(): Promise<IMotorcycle[]>;
  // updateById(id: string, dataToUpdate: Partial<IMotorcycle>): Promise<IMotorcycle | null>;
}
