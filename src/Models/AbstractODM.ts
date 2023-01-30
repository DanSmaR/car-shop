import {
  Model,
  models,
  Schema,
  // UpdateQuery,
  model,
  isValidObjectId,
} from 'mongoose';
import HttpException from '../Utils/Exceptions/HttpException';

export default abstract class AbstractMongooseODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  protected static vehicleSchema = {
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    status: { type: Boolean, required: false, default: false },
    buyValue: { type: Number, required: true },
  };

  constructor(_schema: Schema, _modelName: string) {
    this.schema = _schema;
    this.modelName = _modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findOne(_id: string): Promise<T | null> {
    return this.model.findOne({ _id });
  }

  public getModelName(): string {
    return this.model.modelName;
  }

  static validateId(_id: string): void | Error {
    if (!isValidObjectId(_id)) throw new HttpException(422, 'Invalid mongo id');
  }
}
