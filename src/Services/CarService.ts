import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IVehicleModel from '../Interfaces/Models/IVehicleModel';
import IVehicleService from '../Interfaces/Services/IVehicleService';
import CarMongooseODM from '../Models/CarMongooseODM';
import VehicleService from './AbstractVehicleService';

export default class CarService 
  extends VehicleService<ICar, Car> 
  implements IVehicleService<ICar, Car> {
  constructor(private carModel: IVehicleModel<ICar> = new CarMongooseODM()) {
    super(carModel);
  }
}
