import { Router, Request, Response, NextFunction } from 'express';
import IController from '../Interfaces/IController';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import IVehicleService from '../Interfaces/Services/IVehicleService';
import MotocycleService from '../Services/MotocycleService';
import ValidateIdMiddleware from '../Middleware/validateIdMiddleware';

export default class MotorcycleController implements IController {
  private readonly _path = '/motorcycles';
  private readonly _router = Router();

  constructor(
    private motoService: IVehicleService<IMotorcycle, Motorcycle> = new MotocycleService(),
  ) {
    this.initializeRoutes();
  }

  get path() {
    return this._path;
  }

  get router() {
    return this._router;
  }

  private initializeRoutes(): void {
    this.router.post(this.path, this.registerMotoHandler);
    this.router.get(this.path, this.getMotosHandler);
    this.router.get(`${this.path}/:id`, ValidateIdMiddleware, this.getMotosByIdHandler);
    this.router.put(`${this.path}/:id`, ValidateIdMiddleware, this.updateMotoByIdHandler);
  }

  private registerMotoHandler = async (
    req: Request<unknown, unknown, IMotorcycle>,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const motorcycle = await this.motoService.registerVehicle(req.body);
      res.status(201).json(motorcycle);
    } catch (error) {
      next(error);
    }
  };

  private getMotosHandler = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const carsList = await this.motoService.getVehicles();
      res.status(200).json(carsList);
    } catch (error) {
      next(error);
    }
  };

  private getMotosByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const carFound = await this.motoService.getVehicleById(req.params.id);
      res.status(200).json(carFound);
    } catch (error) {
      next(error);
    }
  };

  private updateMotoByIdHandler = async (
    req: Request<{ id: string }, unknown, Partial<IMotorcycle>>,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const carUpdated = await this.motoService.updateVehicleById(req.params.id, req.body);
      res.status(200).json(carUpdated);
    } catch (error) {
      next(error);
    }
  };
}
