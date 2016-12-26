/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_vscol_matieres_disc_parents', {
    id: {
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
    libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentaires: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    etat: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "1"
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
    tableName: 'plan_vscol_matieres_disc_parents'
  });
};
