import { Router, Request, Response, NextFunction } from 'express';
import IController from '../Interfaces/IController';
import ICar from '../Interfaces/ICar';
import ICarService from '../Interfaces/ICarService';

export default class CarController implements IController {
  private readonly _path = '/cars';
  private readonly _router = Router();

  constructor(private carService: ICarService = new CarService()) {
    this.initializeRoutes();
  }

  get path() {
    return this._path;
  }

  get router() {
    return this._router;
  }

  private initializeRoutes(): void {
    this.router.post(this.path, this.registerCarHandler);
  }

  private registerCarHandler = async (
    req: Request<unknown, unknown, ICar>,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const car = await this.carService.registerCar(req.body);
      res.status(201).json(car);
    } catch (error) {
      next(error);
    }
  };
}