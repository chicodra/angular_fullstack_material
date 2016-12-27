/* jshint indent: 2 */
var Sequelize=require('sequelize');
var db = require('../../models/connect');

const Dom_Mat =db.cnx().define('plan_list_domaine_cycle',{
    id_dmc: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_domaine: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_domaines_matieres',
        key: 'id'
      }
    },
    id_cycle: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_cycle',
        key: 'id'
      }
    },
    date_last_modif: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  
},{
  timestamps: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'plan_list_domaine_cycle'
});

module.exports = Dom_Mat
