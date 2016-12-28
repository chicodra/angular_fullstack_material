/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_vscol1_prim_lecons', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_lecon: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    libelle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contenu: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ressource: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    act_ens_app_profs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    act_ens_app_elev: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    evaluation: {
      type: DataTypes.TEXT,
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
    },
    eval_support: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eval_trace: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eval_consigne: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eval_result: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'plan_vscol1_prim_lecons'
  });
};
