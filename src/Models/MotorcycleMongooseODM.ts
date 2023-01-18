import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IMotorcycleModel from '../Interfaces/Models/IMotorcycleModel';
import AbstractMongooseODM from './AbstractODM';

class MotorcycleMongooseODM extends AbstractMongooseODM<IMotorcycle> implements IMotorcycleModel {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      ...AbstractMongooseODM.vehicleSchema,
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  // public async find(): Promise<IMotorcycle[]> {
  //   return this.model.find();
  // }

  // public async findOne(_id: string): Promise<IMotorcycle | null> {
  //   const carFound = await this.model.findOne({ _id });
  //   return carFound;
  // }

  // public async updateById(_id: string, dataToUpdate: Partial<IMotorcycle>): Promise<IMotorcycle | null> {
  //   return this.model.findByIdAndUpdate(
  //     { _id },
  //     { ...dataToUpdate } as UpdateQuery<IMotorcycle>,
  //     { new: true },
  //   );
  // }
}

export default MotorcycleMongooseODM;
