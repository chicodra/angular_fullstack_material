/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Classe = require('../api/classe/classe.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Classe.find({}).remove(function() {
  Classe.create({
    libelle: 'sixième',
    abrev: '6e',
  annee_academ: '2016/2017'
  }, {
    libelle: 'cinquième',
    abrev: '5e',
  annee_academ: '2016/2017'
  }, {
    libelle: 'quatrième',
    abrev: '4e',
  annee_academ: '2016/2017'
  }, {
    libelle: 'troisième',
    abrev: '3e',
  annee_academ: '2016/2017'
  }, {
    libelle: 'seconde S',
    abrev: '2nd S',
  annee_academ: '2016/2017'
  }, {
    libelle: 'seconde L',
    abrev: '2nd L',
  annee_academ: '2016/2017'
  }, {
    libelle: 'première S1',
    abrev: '1ere S1',
  annee_academ: '2016/2017'
  }, {
    libelle: 'première S2',
    abrev: '1ere S2',
  annee_academ: '2016/2017'
  }, {
    libelle: 'première L1',
    abrev: '1ere L1',
  annee_academ: '2016/2017'
  }, {
    libelle: 'première L2',
    abrev: '1ere L2',
  annee_academ: '2016/2017'
  }, {
    libelle: 'terminal S1',
    abrev: 'Tle S1',
  annee_academ: '2016/2017'
  }, {
    libelle: 'terminal S2',
    abrev: 'Tle S2',
  annee_academ: '2016/2017'
  }, {
    libelle: 'terminal L1',
    abrev: 'Tle L1',
  annee_academ: '2016/2017'
  }, {
    libelle: 'terminal L2',
    abrev: 'Tle L2',
  annee_academ: '2016/2017'
  }, function() {
      console.log('finished populating Classes');
    }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});