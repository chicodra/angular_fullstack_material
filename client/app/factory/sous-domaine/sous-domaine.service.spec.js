'use strict';

describe('Service: sousDomaine', function () {

  // load the service's module
  beforeEach(module('appChicoApp'));

  // instantiate service
  var sousDomaine;
  beforeEach(inject(function (_sousDomaine_) {
    sousDomaine = _sousDomaine_;
  }));

  it('should do something', function () {
    expect(!!sousDomaine).toBe(true);
  });

});
