var Sequelize=require('sequelize');
var db = require('./connect');


const User =db.cnx().define('utilisateur',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },  username:Sequelize.STRING,
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false
});

module.exports = User
