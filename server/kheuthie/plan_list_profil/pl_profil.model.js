/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Profil =db.cnx().define('plan_list_profil',{
  id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    auth_del: {
      type: Sequelize.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    auth_edit: {
      type: Sequelize.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    auth_add: {
      type: Sequelize.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    id_op_saisie: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    date_last_modif: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'plan_list_profil'
});

module.exports = Profil
