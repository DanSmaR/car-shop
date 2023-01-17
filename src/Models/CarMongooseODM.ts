import { Schema, UpdateQuery } from 'mongoose';
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

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findOne(_id: string): Promise<ICar | null> {
    AbstractMongooseODM.validateId(_id);
    const carFound = await this.model.findOne({ _id });
    return carFound;
  }

  public async updateById(_id: string, dataToUpdate: Partial<ICar>): Promise<ICar | null> {
    AbstractMongooseODM.validateId(_id);
    return this.model.findByIdAndUpdate(
      { _id },
      { ...dataToUpdate } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}
