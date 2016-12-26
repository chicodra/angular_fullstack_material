/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_list_niveau_s_domaines', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_niveau: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_list_niveau',
        key: 'id'
      }
    },
    id_s_domaine: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_vscol_matieres_disc_parents',
        key: 'id'
      }
    },
    commentaires: {
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'plan_list_niveau_s_domaines'
  });
};
