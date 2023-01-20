import TVehicleInterfaceOptions from '../../Utils/Types/TVehicleInterfaceOptions';
import TVehicleDomainOptions from '../../Utils/Types/TVehicleDomainOptions';

export default interface IVehicleService<
T extends TVehicleInterfaceOptions, X extends TVehicleDomainOptions> {
  modelName: string;
  registerVehicle(vehicleData: T): Promise<X>;
  getVehicles(): Promise<X[]>;
  getVehicleById(id: string): Promise<X>;
  updateVehicleById(id: string, updatedData: Partial<T>): Promise<X>; 
}
