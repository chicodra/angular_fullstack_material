/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('z_math', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NIVEAU: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    TITRE_CHAPITRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CHAPITRES: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    TITRE_LECON: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CODE_LECON: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CONTENU_LECON: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    import: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'z_math'
  });
};
