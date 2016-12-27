/* jshint indent: 2 */
var Sequelize=require('sequelize');
var db = require('../../models/connect');

const Cycle =db.cnx().define('plan_list_cycle',{
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
    commentaires: {
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
    updatedAt: false
});

module.exports = Cycle
