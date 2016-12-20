/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/lecons', require('./api/lecon'));
  app.use('/api/chapitres', require('./api/chapitre'));
  app.use('/api/matieres', require('./api/matiere'));
  app.use('/api/sous_domaines', require('./api/sous_domaine'));
  app.use('/api/domaines', require('./api/domaine'));
  app.use('/api/niveaus', require('./api/niveau'));
  app.use('/api/cycles', require('./api/cycle'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
