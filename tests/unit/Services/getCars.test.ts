import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import VehicleService from '../../../src/Services/VehicleService';
import CarMongooseODM from '../../../src/Models/CarMongooseODM';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

describe('Testing the list cars endpoint', function () {
  it('should return a list of cars registered in the database', async function () {
    const carsExpectedList = [{
      id: '63c5a8e47530e081402bb954',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
      type: 'car',
    }, {
      id: '43c5a8e47530e081402bb955',
      model: 'Tempra',
      year: 1995,
      color: 'Black',
      status: false,
      buyValue: 35.990,
      doorsQty: 2,
      seatsQty: 5,
      type: 'car',
    }];

    Sinon.stub(Model, 'find').resolves(carsExpectedList);

    const carService = new VehicleService<ICar, Car>(new CarMongooseODM());
    const carsFoundList = await carService.getVehicles();

    expect(carsFoundList).to.be.deep.equal(carsExpectedList);

    Sinon.restore();
  });
});