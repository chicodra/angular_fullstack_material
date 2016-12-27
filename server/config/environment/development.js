'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  // mongo: {
  //   uri: 'mongodb://localhost/appchico-dev'
  // },
  mysql:{
    "username": "kain",
    "password": "passer",
    "database": "simens_secondaire",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port":"3306",

  },

  seedDB: true
};
