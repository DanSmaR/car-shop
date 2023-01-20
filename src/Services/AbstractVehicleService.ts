import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import IVehicleModel from '../Interfaces/Models/IVehicleModel';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import notFoundMsg, { INotFoundMsg } from '../Utils/Erros/NotFoundMessages';
// import notFoundMsgByDomainType from '../Utils/Erros/NotFoundMessages';
// import notFoundMsg from '../Utils/Erros/NotFoundMessages';
import HttpException from '../Utils/Exceptions/HttpException';
import TVehicleInterfaceOptions from '../Utils/Types/TVehicleInterfaceOptions';
import TVehicleDomainOptions from '../Utils/Types/TVehicleInterfaceOptions copy';

export default abstract class VehicleService<
T extends TVehicleInterfaceOptions, X extends TVehicleDomainOptions> {
  constructor(private vehicleModel: IVehicleModel<T>) {}

  public async registerVehicle(vehicleData: T): Promise<X> {
    const newMoto = await this.vehicleModel.create(vehicleData);
    return this.createVehicleDomain(newMoto);
  }

  public async getVehicles(): Promise<X[]> {
    const motosFound = await this.vehicleModel.find();
    const motosDomainList = motosFound.map((car) => this.createVehicleDomain(car));
    return motosDomainList;
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
