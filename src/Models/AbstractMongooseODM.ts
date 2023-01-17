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

  constructor(_schema: Schema, _modelName: string) {
    this.schema = _schema;
    this.modelName = _modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }

  protected static validateId(_id: string): void | Error {
    if (!isValidObjectId(_id)) throw new HttpException(422, 'Invalid mongo id');
  }
}
