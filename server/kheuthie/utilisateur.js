/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_profil: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'plan_list_profil',
        key: 'id'
      }
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nom: {
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
    },
    etat: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'utilisateur'
  });
};
