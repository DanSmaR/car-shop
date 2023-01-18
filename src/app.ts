import express from 'express';
import CarController from './Controllers/CarController';
import MotorcycleController from './Controllers/MotorcycleController';
import IController from './Interfaces/IController';
import ErrorMiddleware from './Middleware/errorMiddleware';

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

const controllers: IController[] = [new CarController(), new MotorcycleController()];

export default new App(controllers).app;
