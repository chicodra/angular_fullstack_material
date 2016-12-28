/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_vscol1_chapitres', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_mat_disc_fils: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_vscol_matieres_disc_fils',
        key: 'id'
      }
    },
    id_niveau: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_list_niveau',
        key: 'id'
      }
    },
    id_parent: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'plan_vscol1_chapitres',
        key: 'id'
      }
    },
    type_chapitre: {
      type: DataTypes.ENUM('palier','oa','chapitre','competence'),
      allowNull: false
    },
    libelle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    commentaires: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lib_integration: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    z_theme: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_last_modif: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_op_saisie: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'plan_vscol1_chapitres'
  });
};
