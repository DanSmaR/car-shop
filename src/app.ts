import express from 'express';
import VehicleController from './Controllers/VehicleController';
import Car from './Domains/Car';
import Motorcycle from './Domains/Motorcycle';
import ICar from './Interfaces/ICar';
import IController from './Interfaces/IController';
import IMotorcycle from './Interfaces/IMotorcycle';
import ErrorMiddleware from './Middleware/errorMiddleware';
import CarMongooseODM from './Models/CarMongooseODM';
import MotorcycleMongooseODM from './Models/MotorcycleMongooseODM';
import VehicleService from './Services/VehicleService';

export class App {
  public readonly app: express.Express;

  constructor(controllers: IController[]) {
    this.app = express();
    this.config();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private initializeControllers(controllers: IController[]): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeErrorHandling(): void {
    this.app.use(ErrorMiddleware);
  }
}

const carService = new VehicleService<ICar, Car>(new CarMongooseODM());
const motoService = new VehicleService<IMotorcycle, Motorcycle>(new MotorcycleMongooseODM());

const carController = new VehicleController(carService);
const motoController = new VehicleController(motoService);

const controllers: IController[] = [carController, motoController];

export default new App(controllers).app;
