import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/ICarModel';
import ICarService from '../Interfaces/ICarService';
import CarMongooseODM from '../Models/CarMongooseODM';
import HttpException from '../Utils/Exceptions/HttpException';

export default class CarService implements ICarService {
  constructor(private carModel: ICarModel = new CarMongooseODM()) {}

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async registerVehicle(carData: ICar): Promise<Car> {
    const newCar = await this.carModel.create(carData);
    return this.createCarDomain(newCar);
  }

  public async getCars(): Promise<Car[]> {
    const carsFound = await this.carModel.find();
    const carsDomainList = carsFound.map((car) => this.createCarDomain(car));
    return carsDomainList;
  }

  public async getCarById(id: string): Promise<Car> {
    const carFound = await this.carModel.findOne(id);
    if (carFound === null) throw new HttpException(404, 'Car not found');
    return this.createCarDomain(carFound);
  }

  public async updateCarById(id: string, updatedData: Partial<ICar>): Promise<Car> {
    const carUpdated = await this.carModel.updateById(id, updatedData);
    if (carUpdated === null) throw new HttpException(404, 'Car not found');
    return this.createCarDomain(carUpdated);
  }
}
