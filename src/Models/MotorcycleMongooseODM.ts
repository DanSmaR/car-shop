import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
// import IMotorcycleModel from '../Interfaces/Models/IMotorcycleModel';
import IVehicleModel from '../Interfaces/Models/IVehicleModel';
import VehicleTypes from '../Utils/Enum/enumVehicle';
import AbstractMongooseODM from './AbstractODM';

class MotorcycleMongooseODM 
  extends AbstractMongooseODM<IMotorcycle>
  implements IVehicleModel<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      ...AbstractMongooseODM.vehicleSchema,
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      type: { type: String, required: false, default: VehicleTypes.MOTORCYCLE },
    });
    super(schema, 'Motorcycle');
  }
}

export default MotorcycleMongooseODM;
