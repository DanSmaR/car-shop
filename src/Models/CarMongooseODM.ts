import { Schema, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/ICarModel';
import AbstractMongooseODM from './AbstractODM';

export default class CarMongooseODM extends AbstractMongooseODM<ICar> implements ICarModel {
  constructor() {
    const schema = new Schema<ICar>({
      ...AbstractMongooseODM.vehicleSchema,
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findOne(_id: string): Promise<ICar | null> {
    const carFound = await this.model.findOne({ _id });
    return carFound;
  }

  public async updateById(_id: string, dataToUpdate: Partial<ICar>): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...dataToUpdate } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}
