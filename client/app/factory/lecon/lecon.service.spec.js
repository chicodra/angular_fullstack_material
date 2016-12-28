'use strict';

describe('Service: lecon', function () {

  // load the service's module
  beforeEach(module('appChicoApp'));

  // instantiate service
  var lecon;
  beforeEach(inject(function (_lecon_) {
    lecon = _lecon_;
  }));

  it('should do something', function () {
    expect(!!lecon).toBe(true);
  });

});
