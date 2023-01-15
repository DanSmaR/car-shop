import express from 'express';
import IController from './Interfaces/Controller/IController';
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

export default new App().app;
