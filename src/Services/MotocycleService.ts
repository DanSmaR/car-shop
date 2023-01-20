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
}
