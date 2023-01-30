import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IVehicleModel from '../Interfaces/Models/IVehicleModel';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import AbstractMongooseODM from './AbstractODM';

export default class CarMongooseODM 
  extends AbstractMongooseODM<ICar> implements IVehicleModel<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      ...AbstractMongooseODM.vehicleSchema,
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      type: { type: String, required: false, default: VehicleTypes.CAR },
    });
    super(schema, 'Car');
  }
}
