/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_list_domaine_cycle', {
    id_dmc: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_domaine: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      references: {
        model: 'plan_list_domaines_matieres',
        key: 'id'
      }
    },
    id_cycle: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_list_cycle',
        key: 'id'
      }
    },
    date_last_modif: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'plan_list_domaine_cycle'
  });
};
