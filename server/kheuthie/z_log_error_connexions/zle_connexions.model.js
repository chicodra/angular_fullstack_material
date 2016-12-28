/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');



const Errcon =db.cnx().define('z_log_error_connexions',{
 id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: Sequelize.STRING,
      allowNull: false
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date_conn: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    navigateur: {
      type: Sequelize.STRING,
      allowNull: true
    },
    statut: {
      type: Sequelize.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'z_log_error_connexions'
});

module.exports = Errcon
