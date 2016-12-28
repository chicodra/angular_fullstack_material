/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Zmath =db.cnx().define('z_math',{
  id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NIVEAU: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    TITRE_CHAPITRE: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CHAPITRES: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    TITRE_LECON: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CODE_LECON: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    CONTENU_LECON: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    import: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: "0"
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'z_math'
});

module.exports = Zmath
