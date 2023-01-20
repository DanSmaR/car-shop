import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import VehicleService from '../../../src/Services/VehicleService';
import CarMongooseODM from '../../../src/Models/CarMongooseODM';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('Testing the register car endpoint', function () {
  it('should return a new car composed of the data sent and an id and status', async function () {
    const carRequestData = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carResponseData = {
      id: '63c5a8e47530e081402bb954',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
      type: 'car',
    };

    Sinon.stub(Model, 'create').resolves(carResponseData);

    const carService = new VehicleService<ICar, Car>(new CarMongooseODM());
    const carCreated = await carService.registerVehicle(carRequestData);

    expect(carCreated).to.be.deep.equal(carResponseData);

    Sinon.restore();
  });
});