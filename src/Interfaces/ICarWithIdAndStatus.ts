import ICar from './ICar';

type ICarWithIdAndStatus = ICar & { id: string } & { status: boolean };

export default ICarWithIdAndStatus;
