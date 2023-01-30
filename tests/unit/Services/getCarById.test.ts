import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import VehicleService from '../../../src/Services/VehicleService';
import CarMongooseODM from '../../../src/Models/CarMongooseODM';
import HttpException from '../../../src/Utils/Exceptions/HttpException';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

describe('Testing the get car by id endpoint', function () {
  afterEach(function () {
    Sinon.restore();
  });

  const carService = new VehicleService<ICar, Car>(new CarMongooseODM());

  it('should return an car registered in the database when sending a valid id', async function () {
    const carExpected = {
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

    Sinon.stub(Model, 'findOne').resolves(carExpected);

    const carFound = await carService.getVehicleById('63c5a8e47530e081402bb954');

    expect(carFound).to.be.deep.equal(carExpected);
  });

  it('should return an error when sending an id with no corresponding' 
    + 'match in database', async function () {
    const UNMATCHED_ID = '83c5a8e47530e081402bb952';
    const carNotFoundResult = null;
    Sinon.stub(Model, 'findOne').resolves(carNotFoundResult);

    try {
      await carService.getVehicleById(UNMATCHED_ID);
    } catch (error) {
      expect(error).to.be.instanceOf(HttpException);
      expect((error as HttpException).message).to.be.equal('Car not found');
      expect((error as HttpException).status).to.be.equal(404);
    }
  });
});