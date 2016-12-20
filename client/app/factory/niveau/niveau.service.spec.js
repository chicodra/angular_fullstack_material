'use strict';

describe('Service: niveau', function () {

  // load the service's module
  beforeEach(module('appChicoApp'));

  // instantiate service
  var niveau;
  beforeEach(inject(function (_niveau_) {
    niveau = _niveau_;
  }));

  it('should do something', function () {
    expect(!!niveau).toBe(true);
  });

});
