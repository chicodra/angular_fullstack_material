/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Fils =db.cnx().define('plan_vscol_matieres_disc_fils',{
 id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_parent: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'plan_vscol_matieres_disc_parents',
        key: 'id'
      }
    },
    code_mat: {
      type: Sequelize.STRING,
      allowNull: true
    },
    alias: {
      type: Sequelize.STRING,
      allowNull: true
    },
    libelle: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    couleur: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
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
    tableName: 'plan_vscol_matieres_disc_fils'
});

module.exports = Fils