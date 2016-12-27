/* jshint indent: 2 */
var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Parent =db.cnx().define('plan_vscol_matieres_disc_parents',{
   id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_domaine: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_domaines_matieres',
        key: 'id'
      }
    },
    libelle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    commentaires: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    etat: {
      type: Sequelize.ENUM('1','0'),
      allowNull: true,
      defaultValue: "1"
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
    tableName: 'plan_vscol_matieres_disc_parents'
});

module.exports = Parent