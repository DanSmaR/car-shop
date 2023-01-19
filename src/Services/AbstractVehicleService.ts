import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IVehicleModel from '../Interfaces/Models/IVehicleModel';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import TVehicleInterfaceOptions from '../Utils/Types/TVehicleInterfaceOptions';
import TVehicleDomainOptions from '../Utils/Types/TVehicleInterfaceOptions copy';
import TVehicleWithType from '../Utils/Types/TVehicleWithType';

export default abstract class VehicleService<
T extends TVehicleInterfaceOptions, X extends TVehicleDomainOptions> {
  constructor(private vehicleModel: IVehicleModel<T>) {}

  public async registerVehicle(vehicleData: T): Promise<X> {
    const newMoto = await this.vehicleModel.create(vehicleData);
    return this.createVehicleDomain(
      newMoto as T & TVehicleWithType,
    );
  }

  public async getVehicles(): Promise<X[]> {
    const motosFound = await this.vehicleModel.find();
    const motosDomainList = motosFound.map((car) => this.createVehicleDomain(
      car as T & TVehicleWithType,
    ));
    return motosDomainList;
  }

  protected createVehicleDomain(
    vehicle: T & TVehicleWithType,
  ): X {
    if (vehicle.type === VehicleTypes.CAR) {
      return new Car(vehicle as unknown as ICar) as X;
    }
    if (vehicle.type === VehicleTypes.MOTORCYCLE) {
      return new Motorcycle(vehicle as unknown as IMotorcycle) as X;
    }
    throw new Error('Invalid vehicle type');
  }
}
