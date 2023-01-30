import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import IController from '../Interfaces/IController';
import ValidateIdMiddleware from '../Middleware/validateIdMiddleware';
import IVehicleService from '../Interfaces/Services/IVehicleService';
import TVehicleInterfaceOptions from '../Utils/Types/TVehicleInterfaceOptions';
import TVehicleDomainOptions from '../Utils/Types/TVehicleDomainOptions';
import pathByModel from '../Utils/controllerPaths';
import TControllerPaths from '../Utils/Types/TControllerPaths';

export default class VehicleController<
  T extends TVehicleInterfaceOptions, X extends TVehicleDomainOptions> implements IController {
  private readonly _path: string;
  private readonly _router = Router();

  constructor(private vehicleService: IVehicleService<T, X>) {
    this._path = pathByModel[vehicleService.modelName as keyof TControllerPaths];
    this.initializeRoutes();
  }

  get path() {
    return this._path;
  }

  get router() {
    return this._router;
  }

  private initializeRoutes(): void {
    this.router.post(this.path, this.registerVehicleHandler(this.vehicleService));
    this.router.get(this.path, this.getVehiclesHandler(this.vehicleService));
    this.router.get(
      `${this.path}/:id`,
      ValidateIdMiddleware,
      this.getVehicleByIdHandler(this.vehicleService),
    );
    this.router.put(
      `${this.path}/:id`,
      ValidateIdMiddleware,
      this.updateVehicleByIdHandler(this.vehicleService),
    );
  }

  private registerVehicleHandler(vehicleService: IVehicleService<T, X>): RequestHandler {
    return async (
      req: Request<unknown, unknown, T>,
      res: Response,
      next: NextFunction,
    ): Promise<Response | void> => {
      try {
        const vehicle = await vehicleService.registerVehicle(req.body);
        res.status(201).json(vehicle);
      } catch (error) {
        next(error);
      }
    };
  }

  private getVehiclesHandler(vehicleService: IVehicleService<T, X>): RequestHandler {
    return async (
      _req: Request,
      res: Response,
      next: NextFunction,
    ): Promise<Response | void> => {
      try {
        const vehicleList = await vehicleService.getVehicles();
        res.status(200).json(vehicleList);
      } catch (error) {
        next(error);
      }
    };
  } 

  private getVehicleByIdHandler(vehicleService: IVehicleService<T, X>): RequestHandler {
    return async (
      req: Request,
      res: Response,
      next: NextFunction,
    ): Promise<Response | void> => {
      try {
        const vehicleFound = await vehicleService.getVehicleById(req.params.id);
        res.status(200).json(vehicleFound);
      } catch (error) {
        next(error);
      }
    };
  }

  private updateVehicleByIdHandler(
    vehicleService: IVehicleService<T, X>,
  ): RequestHandler<{ id: string }, unknown, Partial<T>> {
    return async (
      req: Request<{ id: string }, unknown, Partial<T>>,
      res: Response,
      next: NextFunction,
    ): Promise<Response | void> => {
      try {
        const vehicleUpdated = await vehicleService.updateVehicleById(req.params.id, req.body);
        res.status(200).json(vehicleUpdated);
      } catch (error) {
        next(error);
      }
    };
  }
}
