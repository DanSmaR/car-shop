export default interface IVehicleService<T, X> {
  registerVehicle(vehicleData: T): Promise<X>;
  // getCars(): Promise<(T & TStatusAndId)[]>;
  // getCarById(id: string): Promise<IVehicleWithIdAndStatus>;
  // updateCarById(id: string, updatedData: Partial<IVehicle>): Promise<IVehicleWithIdAndStatus>; 
}
