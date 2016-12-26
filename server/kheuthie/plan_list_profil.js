/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_list_profil', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    auth_del: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    auth_edit: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    auth_add: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
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
    tableName: 'plan_list_profil'
  });
};
