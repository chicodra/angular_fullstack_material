/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function (app) {

  // Insert routes below
  
  app.use('/api/plcycles', require('./kheuthie/plan_list_cycle'));
  app.use('/api/plniveaux', require('./kheuthie/plan_list_niveau'));
  app.use('/api/pldom', require('./kheuthie/plan_list_domaines_matieres'));
  app.use('/api/pldomat', require('./kheuthie/plan_list_domaine_cycle'));
  app.use('/api/ptsituation', require('./kheuthie/plan_tab_situation'));
  app.use('/api/pvparent', require('./kheuthie/plan_vscol_matieres_disc_parent'));
  app.use('/api/plnivsdom', require('./kheuthie/plan_list_niveau_s_domaine'));
  app.use('/api/pvfils', require('./kheuthie/plan_vscol_matieres_disc_fils'));
  app.use('/api/pv1chapitre', require('./kheuthie/plan_vscol1_chapitres'));
  app.use('/api/utilisateurs', require('./kheuthie/utilisateur'));
  app.use('/api/profils', require('./kheuthie/plan_list_profil'));
  app.use('/api/semestres', require('./kheuthie/plan_list_semestre'));
  app.use('/api/series', require('./kheuthie/plan_list_series'));
  app.use('/api/chapitreos', require('./kheuthie/plan_vscol1_chapitres_os'));
  app.use('/api/primlecons', require('./kheuthie/plan_vscol1_prim_lecons'));
  app.use('/api/zconnexions', require('./kheuthie/z_connexions'));
  app.use('/api/zmaths', require('./kheuthie/z_math'));
  app.use('/api/zleconnexions', require('./kheuthie/z_log_error_connexions'));








  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
