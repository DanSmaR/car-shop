import { Router } from 'express';
// import TControllerPaths from '../Utils/Types/TControllerPaths';

export default interface IController {
  path: string;
  router: Router;
}
