/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Classe = require('../api/classe/classe.model');
var Role = require('../api/role/role.model');
var Mat = require('../api/matiere/matiere.model');
var Cours = require('../api/cours/cours.model');
var Chap = require('../api/chapitre/chapitre.model');

Thing.find({}).remove(function () {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
});

Classe.find({}).remove(function () {
  Classe.create({
    _id: "58552a28ccf48ad00680f688",
    libelle: 'sixième',
    abrev: '6e',
    annee_academ: '2016/2017'
  }, {
    _id: "58552a28ccf48ad00680f689",
      libelle: 'cinquième',
      abrev: '5e',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f68a",
      libelle: 'quatrième',
      abrev: '4e',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f68b",
      libelle: 'troisième',
      abrev: '3e',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f68c",
      libelle: 'seconde S',
      abrev: '2nd S',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f68d",
      libelle: 'seconde L',
      abrev: '2nd L',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f68e",
      libelle: 'première S1',
      abrev: '1ere S1',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f68f",
      libelle: 'première S2',
      abrev: '1ere S2',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f690",
      libelle: 'première L1',
      abrev: '1ere L1',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f691",
      libelle: 'première L2',
      abrev: '1ere L2',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f692",
      libelle: 'terminal S1',
      abrev: 'Tle S1',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f693",
      libelle: 'terminal S2',
      abrev: 'Tle S2',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f694",
      libelle: 'terminal L1',
      abrev: 'Tle L1',
      annee_academ: '2016/2017'
    }, {
      _id: "58552a28ccf48ad00680f695",
      libelle: 'terminal L2',
      abrev: 'Tle L2',
      annee_academ: '2016/2017'
    }, function () {
      console.log('finished populating Classes');
    }
  );
});

Role.find({}).remove(function () {
  Role.create({
    _id: '58552073a0b74220231120ce',

    name: 'Etudiant'
  }, {
      name: 'Professeur'
    }, {
      name: 'Parent'
    },
    function () {
      console.log('finished populating Classes');
    }
  );
});

Chap.find({}).remove(function () {
  Chap.create({
  name: "Les Fonctions",
  numero: "Chap1",
  cours: "58552e68ea9bec3c14a927ee",
  contenue: "../assets/guide_cahier_charge.pdf"                           
},
{
  name: "Les Fractions",
  numero: "Chap2",
  cours: "58552e68ea9bec3c14a927ee",
  contenue: "../assets/guide_cahier_charge.pdf"                           
},
{
  name: "Les Nombres Entiers",
  numero: "Chap3",
  cours: "58552e68ea9bec3c14a927ee",
  contenue: "../assets/guide_cahier_charge.pdf"                           
},
{
  name: "Les Adjectifs",
  numero: "Chap1",
  cours: "58552e68ea9bec3c14a927ec",
  contenue: "../assets/guide_cahier_charge.pdf"                           
},
{
  name: "Les Déterminants",
  numero: "Chap1",
  cours: "58552e68ea9bec3c14a927ec",
  contenue: "../assets/guide_cahier_charge.pdf"                           
},
    function () {
      console.log('finished populating Classes');
    }
  );
});

Mat.find({}).remove(function () {
  Mat.create({
    _id: "58552e68ea9bec3c14a927ec",
    libelle: 'français'
  },
  {
    _id: "58552e68ea9bec3c14a927ed",
    libelle: 'Anglais'
  },
  {
    _id: "58552e68ea9bec3c14a927ee",
    libelle: 'Mathematique'
  },
  {
    _id: "58552e68ea9bec3c14a927ef",
    libelle: 'Physique - Chimie'
  },
  {
    _id: "58552e68ea9bec3c14a927f0",
    libelle: 'SVT'
  },
  {
    _id: "58552e68ea9bec3c14a927f2",
    libelle: 'Philosophie'
  },
  {
    _id: "58552e68ea9bec3c14a927f3",
    libelle: 'Espagnol'
  },
  {
    _id: "58552e68ea9bec3c14a927f4",
    libelle: 'Histoire'
  },
  {
    _id: "58552e68ea9bec3c14a927f1",
    libelle: 'Geographie'
  }
  );
});

Cours.find({}).remove(function () {
  Cours.create({
  _id: "58565772fa9ee307100d8d70",
  classe: "58552a28ccf48ad00680f688",
  matiere: "58552e68ea9bec3c14a927ec",
  coeff: 4
  },
  {
  _id: "58565772fa9ee307100d8d72",
  classe: "58552a28ccf48ad00680f688",
  matiere: "58552e68ea9bec3c14a927ed",
  coeff: 2
  },
  {
  _id: "58565772fa9ee307100d8d74",
  classe: "58552a28ccf48ad00680f688",
  matiere: "58552e68ea9bec3c14a927ee",
  coeff: 4
  },
  {
  _id: "58565772fa9ee307100d8d77",
  classe: "58552a28ccf48ad00680f688",
  matiere: "58552e68ea9bec3c14a927ef",
  coeff: 2
  },
  {
  _id: "58565772fa9ee307100d8d75",
  classe: "58552a28ccf48ad00680f689",
  matiere: "58552e68ea9bec3c14a927ec",
  coeff: 4
  },
  {
  _id: "58565772fa9ee307100d8d71",
  classe: "58552a28ccf48ad00680f689",
  matiere: "58552e68ea9bec3c14a927ed",
  coeff: 2
  },
  {
  _id: "58565772fa9ee307100d8d76",
  classe: "58552a28ccf48ad00680f689",
  matiere: "58552e68ea9bec3c14a927ee",
  coeff: 4
  },
  {
  _id: "58565772fa9ee307100d8d73",
  classe: "58552a28ccf48ad00680f689",
  matiere: "58552e68ea9bec3c14a927ef",
  coeff: 2
  },
    function () {
      console.log('finished populating Cours');
    }
  );
});

User.find({}).remove(function () {
  User.create({
    _id:'58552073a0b74220231120cf',
    provider: 'local',
    name: 'Test User',
    role:'58552073a0b74220231120ce',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Test 2',
    role:'58552073a0b74220231120ce',
    email: 'tudt@test.com',
    password: 'test'
  },{
    provider: 'local',
    name: 'Test 1412',
    email: 'te254t@test.com',
    password: 'test'
  },{
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});