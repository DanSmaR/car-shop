import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import IVehicleModel from '../Interfaces/Models/IVehicleModel';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import notFoundMsg, { INotFoundMsg } from '../Utils/Erros/NotFoundMessages';
import HttpException from '../Utils/Exceptions/HttpException';
import TVehicleInterfaceOptions from '../Utils/Types/TVehicleInterfaceOptions';
import TVehicleDomainOptions from '../Utils/Types/TVehicleDomainOptions';

export default class VehicleService<
T extends TVehicleInterfaceOptions, X extends TVehicleDomainOptions> {
  constructor(private vehicleModel: IVehicleModel<T>) {}

  public async registerVehicle(vehicleData: T): Promise<X> {
    const newVehicle = await this.vehicleModel.create(vehicleData);
    return this.createVehicleDomain(newVehicle);
  }

  public async getVehicles(): Promise<X[]> {
    const vehiclesFound = await this.vehicleModel.find();
    const vehiclesDomainList = vehiclesFound.map((car) => this.createVehicleDomain(car));
    return vehiclesDomainList;
  }

  public async getVehicleById(id: string): Promise<X> {
    const vehicleFound = await this.vehicleModel.findOne(id);
    if (vehicleFound === null) {
      throw new HttpException(
        404, 
        notFoundMsg[this.vehicleModel.getModelName() as keyof INotFoundMsg],
      );
    }
    return this.createVehicleDomain(vehicleFound);
  }

  public async updateVehicleById(id: string, updatedData: Partial<T>): Promise<X> {
    const vehicleUpdated = await this.vehicleModel.updateById(id, updatedData);
    if (vehicleUpdated === null) {
      throw new HttpException(
        404,
        notFoundMsg[this.vehicleModel.getModelName() as keyof INotFoundMsg],
      );
    }
    return this.createVehicleDomain(vehicleUpdated);
  }

  protected createVehicleDomain(vehicle: T): X {
    if (vehicle.type === VehicleTypes.CAR) {
      return new Car(vehicle) as X;
    }
    if (vehicle.type === VehicleTypes.MOTORCYCLE) {
      return new Motorcycle(vehicle) as X;
    }
    throw new Error('Invalid vehicle type');
  }
}
