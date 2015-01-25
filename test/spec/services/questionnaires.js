'use strict';

describe('Service: questionnaires', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var questionnaires;
  beforeEach(inject(function (_questionnaires_) {
    questionnaires = _questionnaires_;
  }));

  it('should do something', function () {
    expect(!!questionnaires).toBe(true);
  });

});
