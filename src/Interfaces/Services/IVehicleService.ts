import TVehicleInterfaceOptions from '../../Utils/Types/TVehicleInterfaceOptions';
import TVehicleDomainOptions from '../../Utils/Types/TVehicleInterfaceOptions copy';

export default interface IVehicleService<
T extends TVehicleInterfaceOptions, X extends TVehicleDomainOptions> {
  registerVehicle(vehicleData: T): Promise<X>;
  getVehicles(): Promise<X[]>;
  getVehicleById(id: string): Promise<X>;
  // updateCarById(id: string, updatedData: Partial<IVehicle>): Promise<IVehicleWithIdAndStatus>; 
}
