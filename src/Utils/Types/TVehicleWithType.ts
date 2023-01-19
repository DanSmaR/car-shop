import IVehicle from '../../Interfaces/IVehicle';
import VehicleTypes from '../Enum/enumVehicle';

type TVehicleWithType = IVehicle<VehicleTypes.CAR | VehicleTypes.MOTORCYCLE>;

export default TVehicleWithType;
