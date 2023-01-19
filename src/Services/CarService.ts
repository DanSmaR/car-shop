import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/Models/ICarModel';
import ICarService from '../Interfaces/Services/ICarService';
import CarMongooseODM from '../Models/CarMongooseODM';
import HttpException from '../Utils/Exceptions/HttpException';
import VehicleService from './AbstractVehicleService';

export default class CarService extends VehicleService<ICar, Car> implements ICarService {
  constructor(private carModel: ICarModel = new CarMongooseODM()) {
    super(carModel);
  }

  public async getCarById(id: string): Promise<Car> {
    const carFound = await this.carModel.findOne(id);
    if (carFound === null) throw new HttpException(404, 'Car not found');
    return this.createVehicleDomain(carFound);
  }

  public async updateCarById(id: string, updatedData: Partial<ICar>): Promise<Car> {
    const carUpdated = await this.carModel.updateById(id, updatedData);
    if (carUpdated === null) throw new HttpException(404, 'Car not found');
    return this.createVehicleDomain(carUpdated);
  }
}
