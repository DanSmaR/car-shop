import { Router, Request, Response, NextFunction } from 'express';
import IController from '../Interfaces/IController';
import ICar from '../Interfaces/ICar';
import ICarService from '../Interfaces/ICarService';
import CarService from '../Services/CarService';
import validateIdMiddleware from '../Middleware/validateIdMiddleware';

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
    this.router.get(this.path, this.getCarsHandler);
    this.router.get(`${this.path}/:id`, validateIdMiddleware, this.getCarByIdHandler);
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

  private getCarsHandler = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const carsList = await this.carService.getCars();
      res.status(200).json(carsList);
    } catch (error) {
      next(error);
    }
  };

  private getCarByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const carFound = await this.carService.getCarById(req.params.id);
      res.status(200).json(carFound);
    } catch (error) {
      next(error);
    }
  };
}
