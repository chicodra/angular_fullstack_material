/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_list_cycle', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentaires: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_op_saisie: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    date_last_modif: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'plan_list_cycle'
  });
};
