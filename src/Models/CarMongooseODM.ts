import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/ICarModel';
import HttpException from '../Utils/Exceptions/HttpException';
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

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findOne(_id: string): Promise<ICar> {
    AbstractMongooseODM.validateId(_id);
    const carFound = await this.model.findOne({ _id });
    if (carFound === null) throw new HttpException(404, 'Car not found');
    return carFound;
  }
}
