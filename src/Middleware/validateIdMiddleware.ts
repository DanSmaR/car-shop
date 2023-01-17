import { NextFunction, Request, Response } from 'express';
import AbstractMongooseODM from '../Models/AbstractMongooseODM';

function validateIdMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): Error | void {
  AbstractMongooseODM.validateId(req.params.id);
  return next();
}

export default validateIdMiddleware;
