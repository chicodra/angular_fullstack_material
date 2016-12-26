/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_tab_situation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_niv: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'plan_list_niveau',
        key: 'id'
      }
    },
    situation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    res_attendus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modal_exec: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'plan_tab_situation'
  });
};
