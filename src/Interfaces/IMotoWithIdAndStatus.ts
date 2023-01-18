import IMotorcycle from './IMotorcycle';

type IMotoWithIdAndStatus = IMotorcycle & { id: string } & { status: boolean };

export default IMotoWithIdAndStatus;
