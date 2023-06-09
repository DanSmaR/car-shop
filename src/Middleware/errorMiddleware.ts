import { NextFunction, Request, Response } from 'express';
import HttpException from '../Utils/Exceptions/HttpException';

function errorMiddleware(
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  console.error(error);
  const status = error.status || 500;
  const message = error.status ? error.message : 'Something went wrong';
  res.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;
