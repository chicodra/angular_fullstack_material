/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');

const Chapitre =db.cnx().define('plan_vscol1_chapitres',{
  id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_mat_disc_fils: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_vscol_matieres_disc_fils',
        key: 'id'
      }
    },
    id_niveau: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_niveau',
        key: 'id'
      }
    },
    id_parent: {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'plan_vscol1_chapitres',
        key: 'id'
      }
    },
    type_chapitre: {
      type: Sequelize.ENUM('palier','oa','chapitre','competence'),
      allowNull: false
    },
    libelle: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    commentaires: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    lib_integration: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    z_theme: {
      type: Sequelize.TEXT,
      allowNull: true
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
    tableName: 'plan_vscol1_chapitres'
});

module.exports = Chapitre