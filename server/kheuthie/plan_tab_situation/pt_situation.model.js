/* jshint indent: 2 */

var Sequelize=require('sequelize');
var db = require('../../models/connect');


const Situation =db.cnx().define('plan_tab_situation',{
 id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_niv: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_niveau',
        key: 'id'
      }
    },
    situation: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    res_attendus: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    modal_exec: {
      type: Sequelize.TEXT,
      allowNull: true
    }
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'plan_tab_situation'
});

module.exports = Situation
