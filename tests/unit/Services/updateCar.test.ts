import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import VehicleService from '../../../src/Services/VehicleService';
import CarMongooseODM from '../../../src/Models/CarMongooseODM';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('Testing the update car endpoint', function () {
  it('should return an update car composed of' 
    + 'the data sent and an id and status', async function () {
    const carRequestData = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carResponseData = {
      id: '63d7c48425420874177efc27',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
      type: 'car',
    };

    Sinon.stub(Model, 'findByIdAndUpdate').resolves(carResponseData);

    const carService = new VehicleService<ICar, Car>(new CarMongooseODM());
    const carUpdated = await carService
      .updateVehicleById('63d7c48425420874177efc27', carRequestData);

    expect(carUpdated).to.be.deep.equal(carResponseData);

    Sinon.restore();
  });
});