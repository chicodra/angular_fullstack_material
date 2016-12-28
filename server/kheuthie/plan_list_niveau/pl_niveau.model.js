/* jshint indent: 2 */
var Sequelize=require('sequelize');
var db = require('../../models/connect');



const Niveau =db.cnx().define('plan_list_niveau',{
 id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_cycle: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'plan_list_cycle',
        key: 'id'
      }
    },
    commentaires: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_op_saisie: {
      type: Sequelize.INTEGER,
      allowNull: true
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
    tableName: 'plan_list_niveau'
}
    
  
);

module.exports = Niveau
