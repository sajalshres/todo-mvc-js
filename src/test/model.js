import { expect } from 'chai';
import { mockLocalStorage } from './utils';
import Model from '../js/model';

describe('Model()', function () {
  before(function () {
    global.localStorage = mockLocalStorage();
  });

  beforeEach(function () {
    this.model = new Model();
  });

  it('Should have valid property', function () {
    expect(this.model.todos).to.have.lengthOf(0);
  });
});
