/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');


const lecon =db.cnx().define('plan_vscol1_prim_lecons',{
  id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_lecon: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    libelle: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    contenu: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    ressource: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    act_ens_app_profs: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    act_ens_app_elev: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    evaluation: {
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
    },
    eval_support: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    eval_trace: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    eval_consigne: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    eval_result: {
      type: Sequelize.TEXT,
      allowNull: true
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'plan_vscol1_prim_lecons'
});

module.exports = lecon
