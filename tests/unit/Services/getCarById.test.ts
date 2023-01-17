import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import HttpException from '../../../src/Utils/Exceptions/HttpException';

describe('Testing the get car by id endpoint', function () {
  afterEach(function () {
    Sinon.restore();
  });

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
    };

    Sinon.stub(Model, 'findOne').resolves(carExpected);

    const carService = new CarService();
    const carFound = await carService.getCarById('63c5a8e47530e081402bb954');

    expect(carFound).to.be.deep.equal(carExpected);
  });

  it('should return an error when sending an invalid id', async function () {
    const INVALID_ID = 'invalidId';

    const carService = new CarService();
    try {
      await carService.getCarById(INVALID_ID);
    } catch (error) {
      expect(error).to.be.instanceOf(HttpException);
      expect((error as HttpException).message).to.be.equal('Invalid mongo id');
      expect((error as HttpException).status).to.be.equal(422);
    }
  });

  it('should return an error when sending an id with no corresponding' 
    + 'match in database', async function () {
    const UNMATCHED_ID = '83c5a8e47530e081402bb952';
    const carNotFoundResult = null;
    Sinon.stub(Model, 'findOne').resolves(carNotFoundResult);

    const carService = new CarService();
    try {
      await carService.getCarById(UNMATCHED_ID);
    } catch (error) {
      expect(error).to.be.instanceOf(HttpException);
      expect((error as HttpException).message).to.be.equal('Car not found');
      expect((error as HttpException).status).to.be.equal(404);
    }
  });
});