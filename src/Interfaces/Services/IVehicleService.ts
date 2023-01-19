import TVehicleInterfaceOptions from '../../Utils/Types/TVehicleInterfaceOptions';
import TVehicleDomainOptions from '../../Utils/Types/TVehicleInterfaceOptions copy';

export default interface IVehicleService<
T extends TVehicleInterfaceOptions, X extends TVehicleDomainOptions> {
  registerVehicle(vehicleData: T): Promise<X>;
  getVehicles(): Promise<X[]>;
  // getCarById(id: string): Promise<IVehicleWithIdAndStatus>;
  // updateCarById(id: string, updatedData: Partial<IVehicle>): Promise<IVehicleWithIdAndStatus>; 
}
