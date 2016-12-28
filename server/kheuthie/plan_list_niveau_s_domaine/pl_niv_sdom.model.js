/* jshint indent: 2 */
var Sequelize=require('sequelize');
var db = require('../../models/connect');

const Niv_Sdom =db.cnx().define('plan_list_niveau_s_domaines',{
  id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_niveau: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_niveau',
        key: 'id'
      }
    },
    id_s_domaine: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_vscol_matieres_disc_parents',
        key: 'id'
      }
    },
    commentaires: {
      type: Sequelize.STRING,
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
    tableName: 'plan_list_niveau_s_domaines'
});

module.exports = Niv_Sdom