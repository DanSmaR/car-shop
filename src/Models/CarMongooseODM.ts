import { Schema, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/Models/ICarModel';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import AbstractMongooseODM from './AbstractODM';

export default class CarMongooseODM extends AbstractMongooseODM<ICar> implements ICarModel {
  constructor() {
    const schema = new Schema<ICar>({
      ...AbstractMongooseODM.vehicleSchema,
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      type: { type: String, required: false, default: VehicleTypes.CAR },
    });
    super(schema, 'Car');
  }

  public async updateById(_id: string, dataToUpdate: Partial<ICar>): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...dataToUpdate } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}
