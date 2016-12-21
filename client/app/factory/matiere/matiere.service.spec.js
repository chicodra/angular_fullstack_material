'use strict';

describe('Service: matiere', function () {

  // load the service's module
  beforeEach(module('appChicoApp'));

  // instantiate service
  var matiere;
  beforeEach(inject(function (_matiere_) {
    matiere = _matiere_;
  }));

  it('should do something', function () {
    expect(!!matiere).toBe(true);
  });

});
