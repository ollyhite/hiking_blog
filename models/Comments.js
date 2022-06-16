const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    create_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    blog_id:{
        type: DataTypes.INTEGER,
        references: {
        model: 'blog',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;
