import {
  // isValidObjectId,
  Model,
  models,
  Schema,
  // UpdateQuery,
  model,
} from 'mongoose';

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
}
