import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
// import IMotorcycleModel from '../Interfaces/Models/IMotorcycleModel';
import MotorcycleMongooseODM from '../Models/MotorcycleMongooseODM';
import IVehicleService from '../Interfaces/Services/IVehicleService';
import IVehicleModel from '../Interfaces/Models/IVehicleModel';
import VehicleService from './AbstractVehicleService';
// import HttpException from '../Utils/Exceptions/HttpException';

export default class MotorcycleService 
  extends VehicleService<IMotorcycle, Motorcycle> 
  implements IVehicleService<IMotorcycle, Motorcycle> {
  constructor(private motoModel: IVehicleModel<IMotorcycle> = new MotorcycleMongooseODM()) {
    super(motoModel);
  }

  // private createMotoDomain(moto: IMotorcycle): Motorcycle {
  //   return new Motorcycle(moto);
  // }

  // public async registerVehicle(motoData: IMotorcycle): Promise<Motorcycle> {
  //   const newMoto = await this.motoModel.create(motoData);
  //   return this.createMotoDomain(newMoto);
  // }

  // public async getVehicles(): Promise<Motorcycle[]> {
  //   const motosFound = await this.motoModel.find();
  //   const motosDomainList = motosFound.map((car) => this.createMotoDomain(car));
  //   return motosDomainList;
  // }
}
