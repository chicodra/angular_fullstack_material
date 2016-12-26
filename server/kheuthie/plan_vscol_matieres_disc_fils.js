/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_vscol_matieres_disc_fils', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_parent: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'plan_vscol_matieres_disc_parents',
        key: 'id'
      }
    },
    code_mat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    couleur: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
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
    tableName: 'plan_vscol_matieres_disc_fils'
  });
};
