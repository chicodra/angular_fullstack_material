/* jshint indent: 2 */
var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Chapitre_os =db.cnx().define('plan_vscol1_chapitres_os',{
  id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_oa: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    duree: {
      type: Sequelize.STRING,
      allowNull: false
    },
    numero: {
      type: Sequelize.STRING,
      allowNull: true
    },
    titre: {
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
      allowNull: false
    },
    rest_attendus: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    deroulement_prerequis: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    deroulement_situation: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    deroulement_prepa: {
      type: Sequelize.TEXT,
      allowNull: true
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'plan_vscol1_chapitres_os'
});

module.exports = Chapitre_os
