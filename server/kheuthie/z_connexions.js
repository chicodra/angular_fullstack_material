/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('z_connexions', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_conn: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    navigateur: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sens: {
      type: DataTypes.ENUM('IN','OUT','NR'),
      allowNull: false,
      defaultValue: "NR"
    },
    statut: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    nom_pers: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profil_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'z_connexions'
  });
};
