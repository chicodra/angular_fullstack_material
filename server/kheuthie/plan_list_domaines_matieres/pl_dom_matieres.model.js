/* jshint indent: 2 */
var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Domaine =db.cnx().define('plan_list_domaines_matieres',{
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
      type: Sequelize.TEXT,
      allowNull: false
    },
    date_last_modif: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_op_saisie: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'plan_list_domaines_matieres'
});

module.exports = Domaine
