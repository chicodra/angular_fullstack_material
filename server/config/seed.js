/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Cycle = require('../api/cycle/cycle.model');
var Niveau = require('../api/niveau/niveau.model');
var Domaine = require('../api/domaine/domaine.model');
var SDomaine = require('../api/sous_domaine/sous_domaine.model');
var Mat = require('../api/matiere/matiere.model');
var Chap = require('../api/chapitre/chapitre.model');
var Lec = require('../api/lecon/lecon.model');

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

Cycle.find({}).remove(function () {
  Cycle.create({
  _id: "585825ac65717b6822c057bb",
  label: 'Primaire'
},{
  _id: "585825ac65717b6822c057bc",
  label: 'Secondaire'
},
{
  _id: "585825ac65717b6822c057bd",
  label: 'Enseignement Superieur'
},function () {
      console.log('finished populating Cycle');
    }
);
});

Niveau.find({}).remove(function () {
  Niveau.create({
  _id: "58582af366b2e8df24696d5e",
  label: "sixieme",
  abrv: "6éme",
  cycle:"585825ac65717b6822c057bc"
  },{
  _id: "58582af366b2e8df24696d5f",
  label: "cinquieme",
  abrv: "5éme",
  cycle:"585825ac65717b6822c057bc"
  },{
  _id: "58582af366b2e8df24696d60",
  label: "quatrieme",
  abrv: "4éme",
  cycle:"585825ac65717b6822c057bc"
  }
  ,function () {
      console.log('finished populating Niveau');
    }
  );
});

Domaine.find({}).remove(function () {
  Domaine.create({
  _id: "58582ca63ad3f86a260205a3",
  label: "Sciences",
  niveau:"58582af366b2e8df24696d5e",
},{
  _id: "58582ca63ad3f86a260205a4",
  label: "Lettres",
  niveau:"58582af366b2e8df24696d5e",
},{
  _id: "58582ca63ad3f86a260205a5",
  label: "Sciences",
  niveau:"58582af366b2e8df24696d5f",
},{
  _id: "58582ca63ad3f86a260205a6",
  label: "Lettres",
  niveau:"58582af366b2e8df24696d5f",
},{
  _id: "58582ca63ad3f86a260205a7",
  label: "Sciences",
  niveau:"58582af366b2e8df24696d60",
},{
  _id: "58582ca63ad3f86a260205a8",
  label: "Lettres",
  niveau:"58582af366b2e8df24696d60",
},
function () {
      console.log('finished populating Domaine');
    }
  );
});

SDomaine.find({}).remove(function () {
  SDomaine.create({
  _id: "58582f1c090e997427311e8a",
  label: "Mathematiques",
  domaine:"58582ca63ad3f86a260205a3",
},{
  _id: "58582f1c090e997427311e8b",
  label: "HG",
  domaine:"58582ca63ad3f86a260205a4",
},
{
  _id: "58582f1c090e997427311e8c",
  label: "Mathematiques",
  domaine:"58582ca63ad3f86a260205a5",
},{
  _id: "58582f1c090e997427311e8d",
  label: "HG",
  domaine:"58582ca63ad3f86a260205a6",
},{
  _id: "58582f1c090e997427311e8e",
  label: "Mathematiques",
  domaine:"58582ca63ad3f86a260205a7",
},{
  _id: "58582f1c090e997427311e8f",
  label: "HG",
  domaine:"58582ca63ad3f86a260205a8",
},
function () {
      console.log('finished populating Sous Domaine');
    }
);
});

Mat.find({}).remove(function () {
  Mat.create({
  _id: "585831820cad0f8628b8ed48",
  label: "Mathematiques",
  sous_domaine:"58582f1c090e997427311e8a"
},{
  _id: "585831820cad0f8628b8ed49",
  label: "Geographie",
  sous_domaine:"58582f1c090e997427311e8b"
},
{
  _id: "585831820cad0f8628b8ed4a",
  label: "Mathematiques",
  sous_domaine:"58582f1c090e997427311e8c"
},{
  _id: "585831820cad0f8628b8ed4b",
  label: "Histoire",
  sous_domaine:"58582f1c090e997427311e8d"
},{
  _id: "585831820cad0f8628b8ed4c",
  label: "Mathematiques",
  sous_domaine:"58582f1c090e997427311e8e"
},{
  _id: "585831820cad0f8628b8ed4d",
  label: "Histoire",
  sous_domaine:"58582f1c090e997427311e8f"
},
function () {
      console.log('finished populating Matiere');
    }
);
});

Chap.find({}).remove(function () {
  Chap.create({
  _id: "585837cf0c3fb6852ac7807d",
  label: "CHAPITRE 1 : ACTIVITÉS NUMERIQUES",
  matiere:"585831820cad0f8628b8ed48",
    rang: 1
},
{
  _id: "585837cf0c3fb6852ac7807e",
  label: "CHAPITRE 2 : ACTIVITÉS GÉOMÉTRIQUES",
  matiere:"585831820cad0f8628b8ed48",
    rang: 2
},
{
  _id: "585837cf0c3fb6852ac7807f",
  label: "CHAPITRE 1: Le bassin arachidier",
  matiere:"585831820cad0f8628b8ed49",
    rang: 1
},
{
  _id: "585837cf0c3fb6852ac78080",
  label: "CHAPITRE 2 : Dakar et le littoral central",
  matiere:"585831820cad0f8628b8ed49",
    rang: 2
},{
  _id: "585837cf0c3fb6852ac78081",
  label: "CHAPITRE 1 : ACTIVITÉS NUMERIQUES",
  matiere:"585831820cad0f8628b8ed4a",
    rang: 1
},
{
  _id: "585837cf0c3fb6852ac78082",
  label: "CHAPITRE 2 : ACTIVITÉS GÉOMÉTRIQUES",
  matiere:"585831820cad0f8628b8ed4a",
    rang: 2
},
{
  _id: "585837cf0c3fb6852ac78083",
  label: "CHAPITRE 1: LA CIVISATION MUSULMANE",
  matiere:"585831820cad0f8628b8ed4b",
    rang: 1
},
{
  _id: "585837cf0c3fb6852ac78084",
  label: "CHAPITRE 2 : LES CIVILISATIONS DE L’AFRIQUE OCCIDENTALE DU VIIe  AU XVIe SIECLE",
  matiere:"585831820cad0f8628b8ed4b",
    rang: 2
},
{
  _id: "585837cf0c3fb6852ac78085",
  label: "CHAPITRE 1 : ACTIVITÉS NUMERIQUES",
  matiere:"585831820cad0f8628b8ed4c",
    rang: 1
},
{
  _id: "585837cf0c3fb6852ac78086",
  label: "CHAPITRE 2 : ACTIVITÉS GÉOMÉTRIQUES",
  matiere:"585831820cad0f8628b8ed4c",
    rang: 2
},
{
  _id: "585837cf0c3fb6852ac78087",
  label: "CHAPITRE 1: L’AMERIQUE ET L’ASIE DU XVIIe AU XIXe SIECLE",
  matiere:"585831820cad0f8628b8ed4d",
    rang: 1
},
{
  _id: "585837cf0c3fb6852ac78088",
  label: "CHAPITRE 2 : L’EUROPE DU XVIIe AU XIXe SIECLE",
  matiere:"585831820cad0f8628b8ed4d",
    rang: 2
},
function () {
      console.log('finished populating Chapitre');
    }
);
});

Lec.find({}).remove(function () {
  Lec.create({
  label: "Leçon 1 : NOMBRE DÉCIMAUX ARITHMÉTIQUES",
  chapitre:"585837cf0c3fb6852ac7807d",
    rang: 1
},{
  label: "Leçon 2 : ADDITION DE DEUX NOMBRES DÉCIMAUX",
  chapitre:"585837cf0c3fb6852ac7807d",
    rang: 2
},{
  label: "Leçon 1 : INTRODUCTION A LA GÉOMÉTRIE",
  chapitre:"585837cf0c3fb6852ac7807e",
    rang: 1
},{
  label: "Leçon 2 : LE CERCLE",
  chapitre:"585837cf0c3fb6852ac7807e",
    rang: 2
},{
  label: "Leçon 1 : PUISSANCE DANS D",
  chapitre:"585837cf0c3fb6852ac78081",
    rang: 1
},{
  label: "Leçon 2 : MULTIPLES ET DIVISEURS",
  chapitre:"585837cf0c3fb6852ac78081",
    rang: 2
},
{
  label: "Leçon 1 : SYMETRIE CENTRALE",
  chapitre:"585837cf0c3fb6852ac78082",
    rang: 1
},{
  label: "Leçon 2 : LES ANGLES",
  chapitre:"585837cf0c3fb6852ac78082",
    rang: 2
},{
  label: "Leçon 1 : NOMBRES RATIONNELS",
  chapitre:"585837cf0c3fb6852ac78085",
    rang: 1
},{
  label: "Leçon 2 : Calcul algébrique",
  chapitre:"585837cf0c3fb6852ac78085",
    rang: 2
},
{
  label: "Leçon 1 : DISTANCES",
  chapitre:"585837cf0c3fb6852ac78086",
    rang: 1
},{
  label: "Leçon 2 : DROITES DES MILIEUX",
  chapitre:"585837cf0c3fb6852ac78086",
    rang: 2
},
function () {
      console.log('finished populating Leçons');
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
