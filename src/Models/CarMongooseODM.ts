import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/ICarModel';
import AbstractMongooseODM from './AbstractMongooseODM';

export default class CarMongooseODM extends AbstractMongooseODM<ICar> implements ICarModel {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}
