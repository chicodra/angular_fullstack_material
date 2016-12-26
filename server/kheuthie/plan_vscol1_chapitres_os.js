/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_vscol1_chapitres_os', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_oa: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    duree: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: true
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentaires: {
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
      allowNull: false
    },
    rest_attendus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deroulement_prerequis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deroulement_situation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deroulement_prepa: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'plan_vscol1_chapitres_os'
  });
};
