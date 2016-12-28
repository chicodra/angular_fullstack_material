/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');

const Semestre =db.cnx().define('plan_list_semestre',{
   id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    libelle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_op_saisie: {
      type: Sequelize.INTEGER,
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
    tableName: 'plan_list_semestre'
});

module.exports = Semestre
