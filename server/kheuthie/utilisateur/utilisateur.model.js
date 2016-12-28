/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Utilisateur =db.cnx().define('utilisateur',{
  id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_profil: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_profil',
        key: 'id'
      }
    },
    prenom: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date_last_modif: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_op_saisie: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    etat: {
      type: Sequelize.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'utilisateur'
});

module.exports = Utilisateur