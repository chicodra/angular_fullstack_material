'use strict';

describe('Service: chapitre', function () {

  // load the service's module
  beforeEach(module('appChicoApp'));

  // instantiate service
  var chapitre;
  beforeEach(inject(function (_chapitre_) {
    chapitre = _chapitre_;
  }));

  it('should do something', function () {
    expect(!!chapitre).toBe(true);
  });

});
