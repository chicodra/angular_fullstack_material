/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Zconnex =db.cnx().define('z_connexions',{
  id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: Sequelize.STRING,
      allowNull: false
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date_conn: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    navigateur: {
      type: Sequelize.STRING,
      allowNull: true
    },
    sens: {
      type: Sequelize.ENUM('IN','OUT','NR'),
      allowNull: false,
      defaultValue: "NR"
    },
    statut: {
      type: Sequelize.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    nom_pers: {
      type: Sequelize.STRING,
      allowNull: true
    },
    profil_id: {
      type: Sequelize.STRING,
      allowNull: false
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'z_connexions'
});

module.exports = Zconnex
